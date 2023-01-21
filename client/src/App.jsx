import { useContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Context, { UserContext } from "./Context";

function App() {
	const userObject = useContext(UserContext);

	const [data, setData] = useState(null)

	useEffect(() => {
		callBackendAPI()
		.then(res => setData({ data: res.express }))
      	.catch(err => console.log(err));
	},[])

	async function callBackendAPI() {
		const response = await fetch('/express_backend');
		const body = await response.json();
	
		if (response.status !== 200) {
		  throw Error(body.message) 
		}
		return body;
	  };


	return (
			
			<Routes>
				<Route
					path='/'
					element={<Homepage data={JSON.stringify(data)}/>}
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
