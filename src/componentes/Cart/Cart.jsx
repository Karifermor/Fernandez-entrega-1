import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import React, {useContext} from "react";
import CartItem from "./CartItem";


const Cart = () => {
    const{cart, clear, total} = useContext(CartContext)
    return(
        <div className="cartt">

            {
            cart.length ? 
            
            <div>
                <div className="itemsCartDiv">
                {cart.map((item)=><CartItem key={item.id} item={item}/>)}
                </div>
                
                <div className="totalDiv">
                    <p>Total a pagar: US$ {total()}</p>
                    <button className="botonRojo" onClick={clear}>Empty cart</button>
                    <Link to='/Checkout' className="botonCheckOut">Proceed to checkout</Link>
                </div>
           </div> 
            : 
            <div className="cartVacioDiv">
                <h3 >Your cart is empty! <img className="emptyCart" src="../images/empty-cart.png" alt=""/></h3>
                <div className="cartVacio"><Link to='/' className="goShopBtn">CONTINUE SHOPPING</Link></div>
            </div>
            }
        </div>
    )
}

export default Cart;
