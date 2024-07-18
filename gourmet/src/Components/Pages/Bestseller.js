import React from 'react'
import { bestseller } from '../Compo/Datadetails'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { add } from "../Slice/CartSlice"



const Bestseller = () => {

    let names = useSelector((state) => state.cart)
    let dispatch = useDispatch()
  
    let ADD = (demo) => {
      // dispatch(add(demo))
  
      let numm = names.find((totalitem) => totalitem.id === demo.id)
      if (!numm) {
        dispatch(add(demo))
      }
      else {
        alert("product succesfully added in cart..🤩")
      }
  
    }
  
  



    return (
        <div>
            <h1>BEST SELLING HAMPERS</h1>
            {/* <Data/> */}

            <div className='rows'>
                {bestseller.map((demo) => {
                    return (
                        <>
                            <div className='data1'>
                                <div className='cbody'>
                                    <div className='card'>
                                        <div className='cimg'>
                                            <Link to={`demo/${demo.id}`}>
                                                <img src={demo.image} /><br></br>
                                                <div className='cdis'>
                                                    <p>OUT OF STOCK</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <a href="https://gourmetliving.com.au/product/unforgettable-products-chocolate-meringue-75-gm/">{demo.title}</a><br></br><br></br>
                                        <p>{demo.price}</p><br></br>
                                        <div className='rmbtn'>
                                        <button onClick={() => ADD(demo)}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </ >
                    )
                })}
            </div>
            <br></br><br></br><br></br>
        </div>
    )
}

export default Bestseller
