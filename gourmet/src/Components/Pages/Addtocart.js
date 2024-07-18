import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { decrement, increment, remove } from '../Slice/CartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';


const Cart = () => {
  let names = useSelector((state) => state.cart)
  let dispatch = useDispatch()

  let REMOVE = (demoId) => {
    dispatch(remove(demoId))
  }

  let INCR = (demoId) => {
    dispatch(increment(demoId))
  }

  let DECR = (demoId) => {
    dispatch(decrement(demoId))
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(names))
  })

  //  calculate the total
  // const total = names.reduce(
  //   (acc, item) => acc + item.price * item.quantity, 0);

  const finaltotal = names.reduce(
    (total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <div className='container mt-4 mb-5'>
        <div className='row text-center'>
          {names.length === 0 ? <h1>Your cart is empty!</h1> :
            <div >
              <h1>Shopping Cart</h1><br></br><br></br>
              <div className='ab'>
                <p>Products</p>
                <p className='ms-4'>Price</p>
                <p className='ms-4'>Quantity</p>
                <p className='ms-4'>Total</p>
              </div>
            </div>
          }
          {names.map((demo) => {
            let total = demo.price * demo.quantity
            return (
              <div>
                <div className="cc">
                  <div className="c1">
                    <div className='aa'>
                      {/* <Link to={`demo/${demo.id}`}></Link> */}
                      <img src={demo.image}  style={{ height: 150, width: 150 }} />
                    </div>
                    <div className="qq">
                      <p><a href="#">{demo.title}</a>
                      </p>
                      <h6>${demo.price}<br></br>
                      </h6>
                    </div>


                    <div className='btnc'>
                      <div className='btnc1'>
                        <a href="#" className="btnd" onClick={() => DECR(demo.id)}>-</a>
                        <p>{demo.quantity}</p>
                        <a href="#" className="btni" onClick={() => INCR(demo.id)}>+</a>
                      </div>
                      <div className='btnc2'>
                        <p>${total}</p>
                        <a href="#" className="btnr" onClick={() => REMOVE(demo.id)} >⨯</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <br></br>
        <br></br>


        {names.length > 0 && (
          <div>
            <div className='abc'>
              <h1 style={{ marginLeft: 1000 }}>Subtotal:</h1>
              <h1>${finaltotal}</h1>
            </div>
            <br></br>
            <div className='chbtn'>
              <button type="button"><FontAwesomeIcon icon={faBagShopping} /> Checkout</button>
              <br></br>
              <br></br>
              <Link to="/"><a href="/home">Continue Shopping</a></Link>
              <br></br>
              <br></br>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Cart














