// import { getProducts } from '../../mock/data';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { db } from '../../Firebase/firebase';


function ItemListContainer (){
    const [cargando, setCargando] = useState(false)
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

      useEffect(()=>{
        setCargando(true)
        const productCollection = categoryId ? query(collection(db, 'products'), where("category", "==", categoryId)) : collection(db, 'products');
        getDocs(productCollection)
        .then((res)=>{
          const list = res.docs.map((product)=>{
            return{
              id: product.id,
              ...product.data()
            }
          })
          setProductos(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=>setCargando(false))
      }, [categoryId])

    return(

      <div className='loading'>

        {
          cargando ? <img className='loadingIcon' src='../images/loading.png'></img> 
          : 
          <div className='addToCart'>
            <h3 className='categoryTitle'><span>{categoryId && categoryId}</span></h3>
            <ItemList productos={productos}></ItemList>
          </div>
        }
      </div>
    )
}

export default ItemListContainer;