import React, {useState, useEffect} from 'react'
import { getItem } from '../../mock/data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer(){
    const [cargar, setCargar] = useState(false)
    const [producto, setProducto] = useState({})

    const { id } = useParams()

    useEffect(()=>{
        setCargar(true)
        getItem(id)
        .then((res)=> setProducto(res))
        .catch((error)=>console.log(error))
        .finally(()=> setCargar(false))
    },[])

    return(
        <div className='loading'>
            { cargar ? <img className='loadingIcon' src='../images/loadingIcon.gif'></img> : <div className='addToCart'><ItemDetail producto={producto}/></div>}
        </div>
    )
}

export default ItemDetailContainer;