import React, {useState, useEffect} from 'react';
import Mainheader from './mainheader';
import axios from 'axios';


const Cart = () =>{
    let Totalprice = 0;
    const[productlist, updateProduct] = useState([]);
    const getProduct = () =>{
        fetch("http://localhost:123/cart")
        .then(response =>response.json())
        .then(productArray=>{
            updateProduct(productArray);
        })
    }

    useEffect(()=>{
        getProduct();
    }, [1]);

    const[msg, updatemsg] = useState("");
    const deleteitem = (pid) =>{
        var url = "http://localhost:1234/cartitem/"+pid
        axios.delete(url)
        .then(response=>{
            updatemsg("Item Deleted Successfully from Your Cart");
            getProduct();   // to reload available cart item after delete
        })
    }

    const[customername, pickName] = useState("");
    const[mobile, pickMobile] = useState("");
    const[email, pickEmail] = useState("");
    const[address, pickAddress] = useState("");
    const save = () =>{
        var orderdata = {
            "fullname":customername, 
            "emailid":email, 
            "mobileno":mobile, 
            "fulladdress":address,
            "product":productlist
        };
        var url = "http://localhost:1234/orders";
        axios.post(url, orderdata)
        .then(response=>{
            updatemsg("Hi, "+ customername+ " Your order placed Successfully !");
        })
    }

    return(
        <>
            <Mainheader/>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='p-3 rounded shadow'>
                            <h4 className='text-center text-primary'> Customer Details </h4>
                            <div className='mb-3'>
                                <label> Customer Name</label>
                                <input type="text" className='form-control' 
                                onChange={obj=>pickName(obj.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <label> Customer Mobile No</label>
                                <input type="text" className='form-control'
                                onChange={obj=>pickMobile(obj.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <label> Customer e-Mail id</label>
                                <input type="text" className='form-control'
                                onChange={obj=>pickEmail(obj.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <label> Delivery Address</label>
                                <textarea className='form-control'
                                onChange={obj=>pickAddress(obj.target.value)}></textarea>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary btn-lg' onClick={save}> Place My Order </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <h4 className='text-center text-primary'> Available Items in Cart </h4>
                        <p className='text-danger text-center'>{msg}</p>
                        <table className='table shadow table-hover rounded mt-4'>
                            <thead className="text-center">
                                <tr className='bg-light text-primary'>
                                    <th>Sl No</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {
                                    productlist.map((product, index)=>{
                                        Totalprice = Totalprice+ parseInt(product.price);
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{product.name}</td>
                                                <td>Rs. {product.price}</td>
                                                <td> <img src={product.photo} height="30" width="50"/> </td>
                                                <td>
                                                    <button className='btn btn-danger btn-sm' 
                                                    onClick={deleteitem.bind(this, product.id)}>
                                                        <i className='fa fa-trash'></i>
                                                    </button>
                                                </td>
                                            </tr>        
                                        )
                                    })
                                }

                                <tr>
                                    <td colSpan="3" align="right">
                                     TOTAL:   { Totalprice}
                                    </td>
                                    <td>
                                        
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;