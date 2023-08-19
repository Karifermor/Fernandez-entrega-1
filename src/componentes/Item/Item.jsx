import React from 'react';
import { Link } from 'react-router-dom';

function Item({ prod }) {
  return (
    <div className='divCards'>
      <Link to={`/item/${prod.id}`}><img src={prod.image} alt={prod.title} className='card-img'/></Link>
          
      <div className='card-content'>

        <h3 className='card-title'>{prod.title}</h3>
        <p className='card-description'>{prod.description}</p>
        <p className='card-price'>US$ {prod.price}</p>

        <div className='verMasDiv'>
          <Link className='boton' to={`/item/${prod.id}`}>See more</Link>
        </div>

      </div>
    </div>
    
  );
}

export default Item;
