import React from 'react'
import { useState } from 'react';
import { useCartContext } from './cart-context'; 
import CartAmountToggle from './CartAmountToggle';

export default function AddToCart({product}) {
    const {addToCart} = useCartContext();
    const {id, sizes, stock} = product;
    const [size, setSize] = useState(sizes[1]);
    const [amount, setAmount] = useState(1);
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }
  return (
    <div>
        <p><span style={{marginRight: '0.5rem'}}>Size:</span>
            {sizes.map((items, index) => {
                return <button className={size === items ? 'size size-active' : 'size'} key={index} onClick={()=>setSize(items)}>{items}</button>
            })}
        </p>
        <CartAmountToggle 
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
        />
        <button onClick={() => addToCart(id, size, amount, product)} className='addtocart'>Add To Cart</button>
    </div>
  )
}
