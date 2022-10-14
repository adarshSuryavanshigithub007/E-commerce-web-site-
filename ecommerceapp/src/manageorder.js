import React, {useState, useEffect} from 'react';
import Adminheader from './adminheader';
import axios from 'axios';

const ManageOrder  = () =>{
    const[order, updateOrder] = useState([]);

const getorder = () =>{
    axios.get("http://localhost:1234/orders")
    .then(response=>{
        updateOrder(response.data.reverse())
    })
}

useEffect(()=>{
    getorder();
},[true])



    return(
        <>
            <Adminheader/>
            <div className="container mt-5">
                <div className='row'>
                    <div className="col-lg-12 text-center">
                        <h3 className='text-primary'> Manage Orders </h3>
                    </div>
                    {
                        order.map((orderdata,index)=>{
                            return(
                                <div className='row mb-4' key={index}>
                                     <div className="col-lg-4">
                                         <h4>Customer Details</h4>
                                         <p>Full Name:{orderdata.fullname}</p>
                                         <p>Mobile No:{orderdata.mobileno}</p>
                                         <p>e-mail id :{orderdata.emailid}</p>
                                         <p>Full Address:{orderdata.fulladdress}</p>
                                     </div>
                                     <div className="col-lg-8 text-center">
                                         <h4>Order id: {orderdata.id}, Total Item - {orderdata.product.length} </h4>
                                         <table className='table table-bordered'>
                                             <thead>
                                                 <tr className='bg-light text-center'>
                                                     <th>Product id</th>
                                                     <th>Name</th>
                                                     <th>Price</th>
                                                     <th>Photo</th>

                                                 </tr>
                                             </thead>
                                             <tbody>
                                               {
                                                   orderdata.product.map((pdata,index2)=>{
                                                       return(
                                                        <tr>
                                                        <td>{pdata.id}</td>
                                                        <td>{pdata.name}</td>
                                                        <td>{pdata.price}</td>
                                                        <td>
                                                            <img src={pdata.photo} height='50' width='50'/>
                                                        </td>
                                                       
                                                        </tr>

                                                       )
                                                   })
                                               }
                                             </tbody>

                                         </table>
                                     </div>
                                </div>
                            )
                        })
                    }
                   
                </div>
            </div>
        </>
    )
}

export default ManageOrder;