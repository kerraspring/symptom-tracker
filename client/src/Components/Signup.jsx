import { Button, TextField } from "@mui/material";
import React from "react";

const Signup = () => {
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
			</form>
		</div>
	);
};

export default Signup;
