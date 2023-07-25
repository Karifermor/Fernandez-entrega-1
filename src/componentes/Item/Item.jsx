import React from 'react';
import { Link } from 'react-router-dom';

function Item({ prod }) {
  return (
    <div className='divCards'>
      <div className='card'>
      
          <img src={prod.image} alt={prod.title} className='card-img'/>

          <div className='card-content'>
            <h3 className='card-title'>{prod.title}</h3>
            <p className='card-description'>{prod.description}</p>
            <p className='card-price'>${prod.price}</p>

            <div className='verMasDiv'>
            <Link className='verMasBtn' to={`/item/${prod.id}`}>Ver mas</Link>
            </div>
            
          </div>
      </div>
    </div>
    
  );
}

export default Item;
