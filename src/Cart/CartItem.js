import React from "react";
import FormatPrice from '../components/FormatPrice'
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "./cart-context";

const CartItem = ({ id, name, image, size, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();
  

  return (
    <div className="cart-product">
      <div className="cart-image--name">
        <div className="img-name">
          <figure>
            <img src={`images/products/${image}`} alt={id} className='cart-item-img'/>
          </figure>
          <p>{name}</p>
        </div>
        <div>
          <div className="size-div">
            <p style={{marginRight: '5px'}}>Size:</p>
            <div className="blue">{size}</div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p style={{textAlign: 'center'}}>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <div style={{ display: 'flex' ,justifyContent: 'center', fontSize: '25px'}}>
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      />
      </div>

      {/* Subtotal */}
      <div className="cart-hide">
        <p style={{textAlign: 'center'}}>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div style={{textAlign: 'center'}}>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;