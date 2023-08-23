import { Routes, Route } from "react-router-dom";

import Clientlayout from "./layouts/Clientlayout";
import Listproducts from "./pages/Listproducts";
import HomePage from "./pages/HomePage";
import Demo from "./pages/AddProducts";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Clientlayout />}>
				<Route path="products" element={<Listproducts />} />
				<Route path="/" element={<Demo />} />
			</Route>
		</Routes>
	);
}

export default App;
