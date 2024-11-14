import NewYork from "../images/new_york1.jpeg";
import Paris from "../images/paris3.jpeg";
import Rome from "../images/rome2.jpeg";
import Thailand from "../images/thailand4.jpeg";
import Canada from "../images/canada5.jpeg";
import  Australia from "../images/australia6.jpeg"
import  Africa from "../images/africa7.jpeg"
import  Japan from "../images/japan8.jpeg"



export class Destination {
    constructor() {
        this.id = "";
        this.image = "";
        this.title = "";
        this.description = "";
        this.price = 0;
        this.continent = "";
        this.rate = 0;
        this.lastUpdated = "";
    }
}

export const destinationsData = [
    {
        id: "1",
        image: NewYork,
        title: "New York, USA",
        description: "New York City, a global hub for culture, art, and business, is known for its iconic landmarks like Times Square, Central Park, and the Statue of Liberty.",
        price: 2700,  
        continent: "North America",
        rate: 4, 
        lastUpdated: "2023-10-05"
    },
    {
        id: "2",
        image: Paris,
        title: "Paris, France",
        description: "The city of love, Paris is home to the Eiffel Tower, Louvre Museum, and breathtaking architecture, making it one of the most visited cities in the world.",
        price: 2500,  
        continent: "Europe",
        rate: 5,
        lastUpdated: "2023-10-06"
    },
    {
        id: "3",
        image: Rome,
        title: "Rome, Italy",
        description: "Rome, the Eternal City, offers a mix of ancient history, art, and vibrant street life. Key attractions include the Colosseum, Vatican, and Trevi Fountain.",
        price: 2300,  
        continent: "Europe",
        rate: 4,
        lastUpdated: "2023-10-07"
    },
    {
        id: "4",
        image: Thailand,
        title: "Phuket, Thailand",
        description: "Phuket is a tropical paradise famous for its stunning beaches, crystal-clear waters, and rich cultural experiences.",
        price: 1900,  
        continent: "Asia",
        rate: 4,
        lastUpdated: "2023-10-08"
    },
    {
        id: "5",
        image: Canada,
        title: "Banff, Canada",
        description: "Located in the heart of the Canadian Rockies, Banff offers breathtaking mountain views, pristine lakes, and world-class outdoor activities year-round.",
        price: 2500,  
        continent: "North America",
        rate: 5,
        lastUpdated: "2023-10-09"
    },
    {
        id: "6",
        image: Australia, 
        title: "Sydney, Australia",
        description: "Sydney is known for its stunning harbor, the iconic Sydney Opera House, and beautiful beaches. It's a vibrant metropolis with a laid-back vibe.",
        price: 2800,  
        continent: "Australia",
        rate: 5,
        lastUpdated: "2023-10-10"
    },
    {
        id: "7",
        image: Africa, 
        title: "Cape Town, South Africa",
        description: "Cape Town combines natural beauty, rich history, and diverse culture, with highlights including Table Mountain, Robben Island, and Cape Point.",
        price: 2100, 
        continent: "Africa",
        rate: 3,
        lastUpdated: "2023-10-11"
    },
    {
        id: "8",
        image: Japan, 
        title: "Tokyo, Japan",
        description: "Tokyo, a fast-paced city that blends cutting-edge technology with traditional culture, offers everything from neon-lit streets to ancient temples.",
        price: 3000, 
        continent: "Asia",
        rate: 5,
        lastUpdated: "2023-10-12"
    }
];
