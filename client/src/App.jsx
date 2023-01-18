import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Loginpage from "./Components/Loginpage";
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
					element={<Loginpage />}
				/>
			</Routes>
	);
}

export default App;
