import React from 'react';
import Item from '../Item/Item';

function ItemList({productos}){
    return(
        <div className='itemList'>
          {productos.map((prod)=><Item key={prod.id} prod={prod}/>)}
        </div> 
    )
}

export default ItemList;