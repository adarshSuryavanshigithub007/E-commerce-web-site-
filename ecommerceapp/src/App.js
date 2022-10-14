import React from 'react';
import { HashRouter,  Routes, Route, Link } from 'react-router-dom';
import Myhome from './home';
import Cart from './cart';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';
import ManageOrder from './manageorder';
import ManageProduct from './manageproduct';

function App() {
	if(localStorage.getItem("vendorid") !=null )
	{
		return (
			<HashRouter>
				<Routes>
					<Route exact path="/" element={<Dashboard/>} />
					<Route exact path="/dashboard" element={<Dashboard/>} />
					<Route exact path="/manageproduct" element={<ManageProduct/>} />
					<Route exact path="/manageorder" element={<ManageOrder/>} />
				</Routes>
			</HashRouter>
		)	
	}else{
		return (
				<HashRouter>
					<Routes>
						<Route exact path="/" element={<Myhome/>} />
						<Route exact path="/cart" element={<Cart/>} />
						<Route exact path="/login" element={<Login/>} />
						<Route exact path="/register" element={<Register/>} />
					</Routes>
				</HashRouter>
			)
		}
}

export default App;
