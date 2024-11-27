import React, { FC, useEffect, useState } from 'react';
import './Cart.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store.config";
import { Link } from "react-router-dom";
import { getCart, getDestinations } from "../../../store";
import CartServices from "../../../services/CartService";
import { Cart } from "../../assets/utils/Cart";

const CartPage: FC = () => {
    const { cart } = useSelector((state: RootState) => state.cartReducer);
    const { destination } = useSelector((state: RootState) => state.destinationReducer);
    const dispatch = useDispatch<AppDispatch>();
    const [quantity, setQuantity] = useState<number>();

    useEffect(() => {
        dispatch(getCart()).then(() => {
            dispatch(getDestinations({
                search: "",
                price: undefined,
                continent: undefined,
                rate: undefined,
                sort: "",
                id: "",
            }));
        });
    }, [dispatch]);

    const handleItemDelete = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        e.preventDefault();
        CartServices.deleteCart(id).then(() => {
            dispatch(getCart());
        });
    }

    const handleItemEdit = (e: React.MouseEvent<HTMLButtonElement>, id: string, gap: number) => {
        e.preventDefault();
        const item = cart?.find(item => item.id === id);
        if (item) {
            if (item.amount + gap <= 0) {
                alert("Cannot go below 1");
                return;
            }
            setQuantity(item.amount + gap);
            CartServices.updateCart(id, { ...item, amount: item.amount + gap, destinationId: item.destination.id }).then(() => dispatch(getCart()));
        }
        setQuantity(0);
    }

    const calculateTotalPrice = () => {
        return cart?.reduce((total, item) => {
            const dest = destination?.find(dest => dest.id === item.destination.id);
            const price = dest ? dest.price : 0;
            return total + (price * item.amount);
        }, 0);
    }

    return (
        <section className="cart new-layout">
            <header className="cart-header">
                <h1>My Shopping Cart</h1>
            </header>
            <div className="cart-list">
                {cart && cart.map((item: Cart) => {
                    const dest = destination?.find(dest => dest.id === item.destination.id);
                    return (
                        <div key={item.id} className="cart-item animate-pop">
                            <img
                                src={"https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg"}
                                alt="Destination"
                                className="cart-item-image"
                            />
                            <div className="cart-item-details">
                                <h3 className="cart-item-title">{dest?.title || "Unknown"}</h3>
                                <p className="cart-item-description">{dest?.description || "No description available"}</p>
                                <div className="cart-item-actions">
                                    <button className="quantity-button" onClick={(e) => handleItemEdit(e, item.id, 1)}>+</button>
                                    <span className="item-quantity">{item.amount}</span>
                                    <button className="quantity-button" onClick={(e) => handleItemEdit(e, item.id, -1)}>-</button>
                                </div>
                                <h4 className="cart-item-price">{(dest?.price || 0) * item.amount} $</h4>
                            </div>
                            <button className="delete-button" onClick={(e) => handleItemDelete(e, item.id)}>❌</button>
                        </div>
                    );
                })}
            </div>
            <footer className="cart-footer">
                <h2 className="total-price">Total: {calculateTotalPrice()} $</h2>
                <div className="cart-footer-buttons">
                    <Link to="/catalog" className="back-button">Continue Shopping</Link>
                    <button className="checkout-button">Pay Now</button>
                </div>
            </footer>
        </section>
    );
};

export default CartPage;
