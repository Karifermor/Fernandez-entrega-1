import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import React, { useState, useContext } from "react";
import { db } from "../../Firebase/firebase";


const Checkout = ()=>{
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const {cart, total, clear} = useContext(CartContext)
    const [orderId, setOrderId] = useState('')

    //funcion para capturar los eventos de input
    const datosComprador = (e) =>{
        setUser({
            ...user, 
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
            let order = {
                user,
                item: cart,
                total: total(),
                date: serverTimestamp()
            }
         const ventas = collection(db, "orders")
         addDoc(ventas, order)
         .then((res) => {
            setOrderId(res.id)
            clear()
 
         })
         .catch((error) => console.log(error))
    }

    

    return(
        <div className="thanksDiv">
            {orderId !== '' ? 

                <div className="thanks">
                    <h4>THANK YOU FOR YOUR ORDER!</h4> 
                                
                    <h6>We hope you enjoyed shopping with us, your order number is: <div className="orderId">{orderId}</div></h6>
                                
                    <div className="thanksContent">
                        <p>To download your purchased pattern, please click on the DOWNLOAD button below. You will also receive a separate email with a download link. 
                        If you have bought something other than digital patterns, the items will be shipped asap. You will receive an email when your order has been shipped.</p>
                        <button className="boton downloadBtn">DOWNLOAD YOUR PATTERN</button>
                        <h6>Happy knitting! 💗</h6>
                        <div className="contactMe"><p>If you have any questions, contact us at infoknitk@gmail.com 💌</p></div>
                    </div>        
                </div>
            : 
        <div>
            <div  className="titles-checkout">
              <h4>CHECK OUT</h4>
            </div>

            <div className="body-checkout">
                <form id="form" onSubmit={finalizarCompra}>

                    <p>CUSTOMER INFORMATION</p>
                    <div className="form-checkout">
                        <label className="label-checkout">Full name</label>
                        <input className="input-checkout" onChange={datosComprador} type="text" placeholder="Nombre y apellido" name="name" required></input>

                        <label className="label-checkout">Phone</label>
                        <input className="input-checkout" onChange={datosComprador} type="number" placeholder="+598 00123456" name="phone" required></input>

                        <label className="label-checkout">Email address</label>
                        <input className="input-checkout" onChange={datosComprador} type="email" placeholder="abc@abc.com" name="email" required></input>

                        <label className="label-checkout">Repeat email</label>
                        <input className="input-checkout" onChange={((e)=>setValidateEmail(e.target.value))} type="email" placeholder="abc@abc.com" name="email"></input>

                        <button className="btnPlaceOrder" type="submit" disabled={validateEmail !== user.email}>Place order</button>

                        <div>
                            <h5>SHIPPING METHOD</h5>
                            <div className="shipping-checkout">
                                <h6>Digital Pattern Download</h6>
                                <p>Once your order is complete you’ll receive an email link to download your pattern.</p>
                            </div>
                        </div>
                    </div>
    
                </form>
            </div>
            
        </div>
            }
    </div>
    )
}


export default Checkout;