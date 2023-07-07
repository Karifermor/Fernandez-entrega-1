import Navbar from './componentes/Nabvar';
import ItemList from './componentes/ItemListContainer/Index';

import './App.css'


function App() {
  return (
    <>
       <Navbar title="KNITK"/>

       <ItemList  title="PRODUCTOS">
          <p>This is the product desciption</p>
       </ItemList>
    </>
  )
}

export default App
