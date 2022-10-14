import React, {useState} from 'react';
import Mainheader from './mainheader';
import axios from 'axios';

const Login = () =>{
    const[username, pickEmail] = useState("");
    const[pass, pickPassword] = useState("");
    const[msg, updateMsg] = useState("Please Enter Login Details");

   const loginCheck = () =>{
       if( username =="" || pass =="" ){
            updateMsg("Enter Your Email & Plassword");
       }else{
            updateMsg("Please Wait Validating...");
            var userStatus = false;
            // api call 
            axios.get("http://localhost:1234/vendor")
            .then(response =>{
               for(var i=0; i<response.data.length; i++){
                      var semail = response.data[i].email; 
                      var spass = response.data[i].password; 
                      if(username == semail && pass == spass){
                        userStatus = true;
                        updateMsg("Success : Please wait redirection...");
                        localStorage.setItem("vendorid", response.data[i].id);
                        localStorage.setItem("vendorname", response.data[i].name);
                        window.location.href="http://localhost:3000/#/dashboard";
                        window.location.reload();
                        break;
                      }
                      
               } // for loop end 

               if(userStatus==false){
                    updateMsg("Fail : Account Invalid or Not Exists");
                }

            }) // api call end
       } // else end here
   }

    return(
        <>
            <Mainheader/>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-4 offset-4'>
                        <h3 className='text-center text-primary'> Vendor Login </h3>
                        <p className='text-center'>{msg}</p>
                        
                        <div className='mb-3'>
                            <label>e-Mail Id</label>
                            <input type="email" 
                            className='form-control'
                            onChange={obj=>pickEmail(obj.target.value)}/>
                        </div>

                        <div className='mb-3'>
                            <label>Password</label>
                            <input type="password" className='form-control'
                            onChange={obj=>pickPassword(obj.target.value)}/>
                        </div>

                        <div className='text-center'>
                            <button 
                                className='btn btn-primary' 
                                onClick={loginCheck}> Login 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;