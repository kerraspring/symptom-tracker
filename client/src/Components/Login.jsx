import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
	const googleLogin = () => {
		window.open("http://localhost:4000/auth/google", "_self");
	};

	return (
		<div>
			<Button
				variant='contained'
				color='error'
				startIcon={<GoogleIcon />}
				onClick={googleLogin}
			>
				Log in with Google
			</Button>
		</div>
	);
};

export default Login;
