import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";


const Signup = () => {
	const googleLogin = () => {
		window.open("http://localhost:4000/auth/google", "_self");
	};

	return (
		<div>
			<form action='#'>
				<TextField
					variant='outlined'
					label='Username'
					size='small'
				/>
				<TextField
					variant='outlined'
					label='Email'
					size='small'
				/>
				<TextField
					variant='outlined'
					label='Password'
					size='small'
				/>
				<Button variant="contained">Submit</Button>
				<Typography>Or Sign Up with</Typography>
			<Button
				variant='contained'
				color='error'
				startIcon={<GoogleIcon />}
				onClick={googleLogin}
			>
				Sign Up with Google
			</Button>
			</form>
		</div>
	);
};

export default Signup;
