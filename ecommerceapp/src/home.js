import React, {useState, useEffect} from 'react';
import Mainheader from './mainheader';
import axios from 'axios';

const Myhome = () =>{
    const[productlist, Updateproduct] = useState([]);
    const getProduct = () =>{
        fetch("  http://localhost:123/product")
        .then(response =>response.json())
        .then(productArray=>{
            Updateproduct(productArray);
        })
    }

    useEffect(()=>{
        getProduct();
    }, [1]);

    const[msg, updatemsg] = useState("");
    const addtocart = (productinfo) =>{
       axios.post("  http://localhost:1234/addcart", productinfo)
       .then(response =>{
            updatemsg("Item Added Successfully in Your Cart");
       })
    }

    return(
        <>
            <Mainheader/>
            <div className="container mt-5">
                <p className='text-center text-danger'> {msg} </p>
                <div className="row text-center">
                    {
                        productlist.map((product, index)=>{
                            return(
                                <div className="col-lg-3 mb-5" key={index}>
                                    <h4 className='text-primary'> {product.name} </h4>
                                    <img src={product.photo} className='img-fluid rounded myphoto' alt="Apple"/>
                                    <p> {product.details} </p>
                                    <p className='text-start text-center'>
                                        <ins className="text-success m-3"> Rs. {product.price} </ins>
                                    </p>
                        <button className='btn btn-danger btn-sm' onClick={addtocart.bind(this, product)}> 
                            <i className='fa fa-plus'></i> Add to Cart 
                        </button>
                                </div>       
                            )
                        })
                    
                    }
                </div>
            </div>
        </>
    )
}

export default Myhome;