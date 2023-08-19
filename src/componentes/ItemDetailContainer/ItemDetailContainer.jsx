import { collection, getDoc, doc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import React, {useState, useEffect} from 'react'
// import { getItem } from '../../mock/data'
import { useParams } from 'react-router-dom'
import { db } from '../../Firebase/firebase'

function ItemDetailContainer(){
    const [cargar, setCargar] = useState(false)
    const [producto, setProducto] = useState({})

    const { id } = useParams()

    useEffect(()=>{
        setCargar(true)
        const collectionProd = collection(db, "products")
        const referenciaAlDoc = doc(collectionProd, id)
        getDoc(referenciaAlDoc)
        .then((res)=> setProducto({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))
        .finally(()=>setCargar(false))
    },[])

    return(
        <div className='loading'>
            { 
            cargar ? <img className='loadingIcon' src='../images/loading.png'></img>  
                : 
            <div className='addToCart'><ItemDetail producto={producto}/></div>
            }
        </div>
    )
}

export default ItemDetailContainer;