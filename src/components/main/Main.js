import React, { useState } from 'react';
import Data from '../../Data'
import Cart from './Cart';
import Course from './Course';
import './Main.css'

const Main = () => {
    const [data , setData] = useState(Data)
    const [cart, setCart]= useState([])


    const handleClick = ((data)=> {
        const newCard =[...cart,data]
        setCart(newCard);
        
    })
    const handleClick1 = ((data)=> {
      const newCArd = [...cart, data]
    //   setCart (newCArd)
      setCart([])

        
    })

    
    return (
        <div className='good'>
            <div className="container">
            {
                data.map((data)=> <Course handleClick={handleClick} data={data} key={data.id}></Course>)
            }
            </div>
            <div className='order'>
            <Cart cart = {cart} handleClick1 = {handleClick1}></Cart>
            </div>
            
        </div>
    );
};

export default Main;