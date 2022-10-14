import React, {useState, useEffect} from 'react';
import Adminheader from './adminheader';
import axios from 'axios';

const ManageProduct  = () =>{
    const[product, updateProduct] = useState([]);
    const getproduct = () =>{
        axios.get("http://localhost:1234/product")
        .then(response=>{
            updateProduct(response.data)
        })
    }

    useEffect(()=>{
        getproduct();
    },[true])

    const[pname,pickName]=useState();
    const[pprice,pickPrice]=useState();
    const[pdetails,pickDetails]=useState();
    const[pphoto,pickPhoto]=useState();
    const[msg,updatemsg]=useState();

    const save = ()=>{
        var url = "http://localhost:1234/product"
        var newproduct = {
            "name":pname,
            "price":pprice,
            "details":pdetails,
            "photo":pphoto,

        };

        axios.post(url,newproduct)
        .then(response=>{
            updatemsg(pname+"Add successfully");
            pickName("");
            pickPrice("");
            pickDetails("");
            pickPhoto("");
            getproduct();

        })
    }

    const deleteItem = (index,pnameItem) => {
        var url="http://localhost:1234/product/"+index
        axios.delete(url)
        .then(response=>{
            updatemsg(pnameItem+"  Item Deleted Successfully from your product list");
            getproduct();
        })
    }





    return(
        <>
            <Adminheader/>
            <div className="container mt-5">
                <div className='row'>
                    <div className="col-lg-12 text-center">
                        <h3 className='text-primary'> Manage Product </h3>
                        <p className='text-danger'>{msg}</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 text-center">
                            <h4 className='text-primary text-center'>Add product</h4>
                            <div className='mb-3'>
                                <label>Product Name</label>
                                <input type='text' className='form-control' onChange={obj=>pickName(obj.target.value)} value={pname}/>
                            </div>
                            <div className='mb-3'>
                                <label>Product Price</label>
                                <input type='text' className='form-control' onChange={obj=>pickPrice(obj.target.value)} value={pprice} />
                            </div>
                            <div className='mb-3'>
                                <label>Product Photo</label>
                                <input type='text' className='form-control' onChange={obj=>pickPhoto(obj.target.value)} value={pphoto}/>
                            </div>
                            <div className='mb-3'>
                                <label>Product details</label>
                               <textarea className='form-control' onChange={obj=>pickDetails(obj.target.value)} value={pdetails}></textarea>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary m-2' onClick={save}>Save </button> 

                            </div>

                        </div>

                        <div className="col-lg-9">
                            <h4 className='text-center'>  
                                Available product: {product.length}
                                </h4>
                                <table className='table table-bordered shadow'>
                                             <thead>
                                                 <tr className='bg-light text-center'>
                                                     <th> id</th>
                                                     <th>Name</th>
                                                     <th>Price</th>
                                                     <th>Photo</th>
                                                     <th>Datails</th>
                                                     <th>Action</th>

                                                 </tr>
                                             </thead>
                                             <tbody className='text-center'>
                                               {
                                                  product.map((pdata,index2)=>{
                                                       return(
                                                        <tr>
                                                        <td>{pdata.id}</td>
                                                        <td>{pdata.name}</td>
                                                        <td>{pdata.price}</td>
                                                        <td>
                                                            <img src={pdata.photo} height='50' width='50'/>
                                                        </td>
                                                        <td>
                                                            {pdata.details}
                                                        </td>
                                                        <td>
                                                            <button className='btn btn-danger btn-sm' onClick={deleteItem.bind(this,pdata.id,pdata.name)}>
                                                    <i className="fa fa-trash"></i>

                                                            </button>
                                                        </td>

                                                        </tr>

                                                       )
                                                   })
                                               }
                                             </tbody>

                                         </table>
                          
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageProduct;