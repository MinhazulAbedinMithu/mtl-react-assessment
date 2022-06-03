import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
	Cart,
	Checkout,
	Home,
	Login,
	PdDesc,
	Products,
	Register,
} from "../pages";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/products/" element={<Products />} />
				<Route path="/products/:id" element={<PdDesc />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
