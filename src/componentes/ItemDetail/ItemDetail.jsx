import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";

function ItemDetail({producto}){
    const [quantityAdded, setQuantityAdded] = useState('')

    const {addItem} = useContext(CartContext)
  

    const onAdd = (cantidad)=>{
        console.log(`compraste ${cantidad} productos`)
        setQuantityAdded(cantidad)
        addItem(producto, cantidad)
    }



    return(

    <div className="detalleItemContainer">
        <div className='detalleItem'>

            <div className="divDetalle">
                <h3  className="card-title detailTitle">{producto.title} - details</h3>
                <img className="imgDetalle" src={producto.image} alt={producto.title}></img>
            </div>


            <div className="card-content-detail">

                <p>{producto.description}</p>
                <p>Skill level: {producto.skill}</p>        
                <p className="card-price">US$ {producto.price}</p>
               
                { quantityAdded === '' ? <ItemCount initial={0} stock={producto.stock} onAdd={onAdd}></ItemCount> 
                :
                <div> 
                <Link to='/' className='boton'>KEEP SHOPPING</Link>
                <Link to='/cart' className='boton'>VIEW CART</Link>
                </div>
                }

            </div>

        </div>
    </div>
     
        
    )
}

export default ItemDetail;

