import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item}) =>{
const {deleteItem} = useContext(CartContext)
    return(
        <div className="cartt">
           <div className="cartDetail">
                <img className="imgCartt" src={item.image} alt={item.title}></img>                
           </div>

           <div className="detallecart">
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>quantity: {item.quantity}</p>
                <p>Subtotal: {item.quantity * item.price}</p>
                <button className="deleteItem" onClick={()=>deleteItem(item.id)}><img src="../images/delete.png"></img></button>
            </div>
        </div>
    )
}

export default CartItem;