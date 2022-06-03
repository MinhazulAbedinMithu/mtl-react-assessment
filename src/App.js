import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./Routes";

function App() {
	return (
		<div>
			<Header />
			<div>
				<AppRoutes />
			</div>
			<Footer />
		</div>
	);
}

export default App;
