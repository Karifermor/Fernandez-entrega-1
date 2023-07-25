import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'

function App (){
  return (
    <BrowserRouter>
    <Navbar/>

       <Routes>  
         <Route exact path='/' element={<ItemListContainer/>}/>
         <Route exact path='/category/:categoryId' element={<ItemListContainer greeting='Category:'/>}/>
         <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
       

       </Routes>
       
       <Footer/>
   </BrowserRouter>  
  )
}

 


export default App
