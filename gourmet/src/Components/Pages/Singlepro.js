import React from 'react';
import { hampers, bestseller } from '../Compo/Datadetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



const Singlepro = () => {

    const { id } = useParams();
    const parsedId = parseInt(id, 10);


    console.log('parsedId:', parsedId);
    console.log('hampers:', hampers);
    console.log('bestseller:', bestseller);

    const allProduct = [...hampers, ...bestseller];
    const demo = allProduct.find((product) => {
        console.log('product:', product);
        return product.id === parsedId;
    });



    return (
        <div>
            <div className='tl'>
                <h1>{demo.title}</h1>
                <div className='tl1'>
                <Link to="/home"><FontAwesomeIcon icon={faHome} className='sii' /></Link>
                <FontAwesomeIcon icon={faGreaterThan} className='si' />
                <p><a href="#">shop</a></p>
                <FontAwesomeIcon icon={faGreaterThan} className='si' />
                <p>{demo.title}</p>
                </div>
            </div>
            <div className="card-body">
                <img src={demo.image} alt={demo.title} />
               <div className='glass'><FontAwesomeIcon icon={faMagnifyingGlass} className='si2' /></div> 
                <div className='spd'>
                    <h2>{demo.title}</h2>
                    <br></br>
                    <hr />
                    <br></br>

                    <h3>${demo.price}</h3><br></br>
                    <p>{demo.title}</p>
                    <p>{demo.description}</p>
                    <h5>Out of stock</h5>
                    <br></br>
                    <hr />
                    <br></br>
                    <h4>Category:<a href='#'>Desserts</a></h4>
                    
                </div>
            </div>
            <br /><br />
        </div>
    );
}
export default Singlepro



















// if (!demo) {
//     return <div>Product not found</div>;
// }



