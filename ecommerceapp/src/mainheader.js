import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const Mainheader = () => {
    return (
        <> 
        <nav className = "navbar navbar-expand-sm navbar-dark bg-dark" >
           <div className="container-fluid">
            <a className="navbar-brand text-warning">
                <i className='fa fa-shopping-bag'></i>
                React Shopping App</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className="fa fa-home"></i>
                            Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className="fa fa-shopping-cart"></i>
                            Shopping</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            <i className="fa fa-cart-plus"></i>
                            My Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            <i className="fa fa-lock"></i>
                            Vendor Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">
                            <i className="fa fa-user-plus"></i>
                            Vendor Create Account</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Search"/>
                    <button className="btn btn-primary" type="button">Search</button>
                </form>
            </div>
        </div> 
        </nav>
        </>
    )
}

export default Mainheader;