import React from "react";
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({producto}){
    const onAdd = (cantidad)=>{
        console.log(`compraste ${cantidad} productos`)
    }

    return(
     
        <div className='detalleItem card'>
        
            <h2 className="card-title detailTitle">{producto.title} - product details</h2>
            <img className="imgDetalle" src={producto.image} alt={producto.title}></img>

            <div className="card-content">
            
                <p>{producto.description}</p>
                <p>Skill level: {producto.skill}</p>
                <p className="card-price">${producto.price}</p>

                <ItemCount initial={0} stock={producto.stock} onAdd={onAdd}></ItemCount>
            </div>
            
        </div>
    )
}

export default ItemDetail;