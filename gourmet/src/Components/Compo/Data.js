import React from 'react';
// import "./Nav.css"
import { hampers} from "./Datadetails";
import { Link } from 'react-router-dom'
import "./Navv.css"
import { useSelector, useDispatch } from 'react-redux'
import { add } from "../Slice/CartSlice"

const Data = () => {

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
    <>
      <div>
        <div className='hbody'>
          <h1>BEST SELLING HAMPERS</h1>

          <div className='rows'>

            {hampers.map((demo) => {
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
                        <a href="https://gourmetliving.com.au/product/moet-chandon-indulgence/">{demo.title}</a><br></br><br></br>
                        <p>${demo.price}</p><br></br>
                        <div className='rmbtn'>
                        <button onClick={() => ADD(demo)}>Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}


            




            {/* {bestseller.map((demo) => {
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
                          <button>Read more</button>
                        </div>
                      </div>
                    </div>
                    <div />
                    


                  </div >
                </ >
              )
            })} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Data
