import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context";
import axios from "axios";

const Homepage = () => {
	const userObject = useContext(UserContext);

	const logout = () => {
		axios
			.get("http://localhost:4000/auth/logout", { withCredentials: true })
			.then((res) => {
				if (res.data === 'done') {
					window.location.href = "/";
				}
			});
	};

	return (
		<div>
			{userObject ? (
				<h1>Welcome back {userObject.firstName}</h1>
			) : (
				<h1>Welcome to symptom tracker</h1>
			)}
			<Link to='/login'>
				<button>Login</button>
			</Link>
			<button>Signup</button>
			{userObject && <button onClick={logout}>Logout</button>}
		</div>
	);
};

export default Homepage;
