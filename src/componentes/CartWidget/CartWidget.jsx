
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
                }>

                <div className="cart">
                    <img src="../images/cart.png" alt=""/>
                    <h6 className='cartItems'>3</h6>
                </div>
        
                {propiedades.children}
        </div>
    )
}

export default CartWidget;