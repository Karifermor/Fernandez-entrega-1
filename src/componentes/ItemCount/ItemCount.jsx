import React, { useState } from 'react';

function ItemCount({stock, onAdd, initial}){
    const [count, setCount] = useState(initial);

    function decrease(){
        if (count != 0){
            setCount(count -1)
        }
    }

    function increase(){
        if (count < stock){
            setCount(count + 1)
        }
    }

    return(
        <div className='botonDiv'> 
    
            <div className='botonDivv'>
               <button className='boton' onClick={decrease}>-</button>
               <span>{count}</span>
               <button className='boton' onClick={increase}>+</button>
            </div>

            <div>
                <button className='comprar' disabled={count === 0} onClick={()=>onAdd(count)}>Comprar</button>
            </div>

        </div>
    )
    
}

export default ItemCount;