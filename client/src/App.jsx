import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Context, { UserContext } from "./Context";

function App() {
	const userObject = useContext(UserContext);
	return (
			<Routes>
				<Route
					path='/'
					element={<Homepage />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/signup'
					element={<Signup />}
				/>
			</Routes>
	);
}

export default App;
