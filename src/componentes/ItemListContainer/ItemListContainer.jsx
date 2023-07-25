import React, { useEffect, useState } from 'react';
import { getProducts } from '../../mock/data';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';


function ItemListContainer (){
    const [cargando, setCargando] = useState(false)
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()


      useEffect(()=>{
        setCargando(true)
        getProducts()
        .then((res) => {
          if(categoryId){
            setProductos(res.filter((item)=> item.category === categoryId))
          }else{
            setProductos(res)
          }
        }) 
        .catch((error) => console.log(error))
        .finally(()=> setCargando(false))
      }, [categoryId])


    return(

        <div className='loading'>

        
           {
            cargando ? <img className='loadingIcon' src='../images/loadingIcon.gif'></img> : 
            <div className='addToCart'>
              <h3><span>{categoryId && categoryId}</span></h3>
              <ItemList productos={productos}></ItemList>
           
            </div>
           }


        </div>
    )
}


export default ItemListContainer;

// loadingIcon.gif