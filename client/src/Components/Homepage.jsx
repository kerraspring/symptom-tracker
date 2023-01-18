import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { UserContext } from "../Context";
import axios from "axios";
import { Button, Link } from "@mui/material";

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
			<Link href='/login' underline="none">
				<Button variant="contained">Log In</Button>
			</Link>
			<Link href='/signup' underline="none">
				<Button variant="contained">Sign Up</Button>
			</Link>
			{userObject && <Button variant="contained" onClick={logout}>Logout</Button>}
		</div>
	);
};

export default Homepage;
