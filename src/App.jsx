import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Checkout from './componentes/Checkout/Checkout';
import { CartProvider } from './context/CartContext';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import Cart from './componentes/Cart/Cart';
import React, { useEffect } from 'react';
import './App.css'

function App (){
  return (
     <CartProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>  
              <Route exact path='/' element={<ItemListContainer/>}/>
              <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='Category:'/>}/>
              <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route exact path='/cart' element={<Cart/>}/>
              <Route exact path='/Checkout' element={<Checkout/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter> 
     </CartProvider>
  )
}

export default App
