from flask import Flask, request, jsonify, render_template, send_from_directory
from datetime import datetime
import os
from werkzeug.utils import secure_filename
import uuid

app = Flask(__name__)

# Конфігурація для статичних файлів та завантажень
app.static_folder = 'static'
UPLOAD_FOLDER = 'static/assets'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# База даних (для прикладу використовуємо список)
destinations = [
    {
        "id": 1,
        "image": "/static/assets/paris.jpeg",
        "name": "Paris",
        "description": "Париж, столиця Франції, відомий своєю багатою історією та культурною спадщиною...",
        "price": 1000,
        "last_updated": "Oct 28 2024"
    },
    {
        "id": 2,
        "image": "/static/assets/new_york.jpeg",
        "name": "New York",
        "description": "Нью-Йорк — одне з найбільших міст США...",
        "price": 1100,
        "last_updated": "Oct 28 2024"
    },
    {
        "id": 3,
        "image": "/static/assets/rome.jpeg",
        "name": "Rome",
        "description": "Рим є столицею Італії і важливим центром античної історії...",
        "price": 800,
        "last_updated": "Oct 28 2024"
    }
]

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def save_image(file):
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        unique_filename = f"{uuid.uuid4()}_{filename}"
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], unique_filename)
        file.save(file_path)
        return f"/static/assets/{unique_filename}"
    return None

# Маршрути для веб-сторінок
@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/destinations')
def read():
    return render_template('read.html')

# API маршрути
@app.route('/api/destinations', methods=['GET'])
def get_destinations():
    return jsonify(destinations)

@app.route('/api/destinations/<int:id>', methods=['GET'])
def get_destination(id):
    destination = next((item for item in destinations if item["id"] == id), None)
    if destination:
        return jsonify(destination)
    return jsonify({"error": "Destination not found"}), 404

@app.route('/api/destinations', methods=['POST'])
def create_destination():
    data = request.json
    
    if not all(key in data for key in ["name", "description", "price", "image"]):
        return jsonify({"error": "Missing required fields"}), 400
    
    new_id = max(dest["id"] for dest in destinations) + 1 if destinations else 1
    
    new_destination = {
        "id": new_id,
        "name": data["name"],
        "description": data["description"],
        "price": float(data["price"]),
        "image": data["image"],
        "last_updated": datetime.now().strftime("%b %d %Y")
    }
    
    destinations.append(new_destination)
    return jsonify(new_destination), 201

@app.route('/api/destinations/<int:id>', methods=['PUT'])
def update_destination(id):
    data = request.json
    destination = next((item for item in destinations if item["id"] == id), None)
    
    if not destination:
        return jsonify({"error": "Destination not found"}), 404
        
    if not all(key in data for key in ["name", "description", "price", "image"]):
        return jsonify({"error": "Missing required fields"}), 400
    
    destination.update({
        "name": data["name"],
        "description": data["description"],
        "price": float(data["price"]),
        "image": data["image"],
        "last_updated": datetime.now().strftime("%b %d %Y")
    })
    
    return jsonify(destination)

@app.route('/api/destinations/<int:id>', methods=['DELETE'])
def delete_destination(id):
    destination = next((item for item in destinations if item["id"] == id), None)
    if destination:
        destinations.remove(destination)
        return '', 204
    return jsonify({"error": "Destination not found"}), 404

@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
        
    file_path = save_image(file)
    if file_path:
        return jsonify({"image_url": file_path}), 201
    
    return jsonify({"error": "Invalid file type"}), 400

if __name__ == '__main__':
    # Створюємо папку для зображень, якщо вона не існує
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    app.run(debug=True)