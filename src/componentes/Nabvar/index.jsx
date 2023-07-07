import CartWidget from "../CartWidget";
import './index.css'

function Navbar (props){
    return(
    <div
    
        style={{
            backgroundColor: '#f3f3f3',
            width: '100%',
            height: '90px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '5px'
        }}
    >
        <h1>{props.title}</h1>
        {props.children}

    
  
        <a className="link" href="">Patterns</a>
        <a className="link"  href="">Knitwear</a>
        <a className="link"  href="">Test calls</a>
    
        <CartWidget />


      
    </div>
   
    )
}


export default Navbar;