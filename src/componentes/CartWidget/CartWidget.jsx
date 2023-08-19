import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";

const CartWidget = ()=>{
    const {cartQuantity} = useContext(CartContext)

    return(
        <div>
            <div className="cart">
                <img src="../images/cart2.png" alt=""/>
                {cartQuantity() > 0 && 
                <div className="quantityCart">
                <h6 className='cartItems'>{cartQuantity()}</h6>
                </div>
                }
            </div>
        </div>
    )
}

export default CartWidget;