import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import AppRoutes from "../Routes";

const Layout = () => {
	return (
		<div>
			<Header />
			<div>
				<AppRoutes />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
