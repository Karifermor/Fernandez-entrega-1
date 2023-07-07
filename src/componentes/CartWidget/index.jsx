import './index.css'
const CartWidget = (propiedades)=>{
    return(
        <div 
            className="button" 
            onClick={propiedades.handleClick} 
            style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                margin: '50px',
                alignItems: 'center',
                display: 'flex',
                }
                }
     >

    
        <div className="cart">
          <img src="https://w7.pngwing.com/pngs/387/168/png-transparent-shopping-cart-button-graphy-earring-shopping-cart-angle-rectangle-logo.png" alt=""/>
          <h6 className='cartItems'>3</h6>
        </div>

        {propiedades.children}

        </div>
    )
}

export default CartWidget;