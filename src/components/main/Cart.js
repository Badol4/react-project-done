import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const {price} = cart
    const totalPrice = cart.reduce((sum, course) =>sum + course.price,0) 
    const tex = totalPrice / 10
    
    // this line of code is the best for price sum in array
    
    return (
        <div className='order'>
            <h1>Cart total : {cart.length}</h1>
            <p>price: {totalPrice}</p>
            <p>tex: {tex}</p>
            <p>Grand Total : {totalPrice + tex}</p>
            <button>Place order</button>
            <p></p>
        </div>
    );
};

export default Cart;