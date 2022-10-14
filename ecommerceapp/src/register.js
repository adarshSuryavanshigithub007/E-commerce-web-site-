import React, {useState} from 'react';
import Mainheader from './mainheader';
import axios from 'axios';

const Register = () =>{
    const[name, pickName] = useState("");
    const[email, pickEmail] = useState("");
    const[password, pickPassword] = useState("");
    const[mobile, pickMobile] = useState("");
    const[address, pickAddress] = useState("");
    const[msg, updatemessage] = useState("");

    const save = () =>{
        var url = "http://localhost:1234/vendor/";
        var vendorinfo = {
            "name":name, 
            "email":email, 
            "password":password, 
            "mobile":mobile, 
            "address":address
        };
        axios.post(url, vendorinfo)
        .then(response=>{
            updatemessage(name + " Register Successfully for Vendor...");
            pickName(""); pickEmail(""); pickPassword(""); pickMobile(""); pickAddress("");
        })
    }

    return(
        <>
            <Mainheader/>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-4 offset-4'>
                        <h3 className='text-center text-primary'> Vendor Register </h3>
                        <p className='text-danger text-center'>{msg}</p>
                        <div className="mb-3">
                            <label>Vendor Name</label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickName(obj.target.value)} value={name}/>
                        </div>
                        <div className="mb-3">
                            <label>e-Mail Id</label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickEmail(obj.target.value)} value={email}/>
                        </div>
                        <div className="mb-3">
                            <label>Create New Password</label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickPassword(obj.target.value)} value={password}/>
                        </div>
                        <div className="mb-3">
                            <label>Mobile No</label>
                            <input type="text" className='form-control'
                            onChange={obj=>pickMobile(obj.target.value)} value={mobile}/>
                        </div>
                        <div className="mb-3">
                            <label>Complete Address</label>
                            <textarea className='form-control'
                            onChange={obj=>pickAddress(obj.target.value)} value={address}></textarea>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-primary' onClick={save}> Register Now </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;