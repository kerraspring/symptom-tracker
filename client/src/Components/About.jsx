import React from "react";
import { Button, Link} from "@mui/material";

const About = () => {
    return (
        <div>
			<h1>Welcome to the About Page</h1>
            <p>Here we will have information about this symptom tracker and how to use</p>
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

//are the login, sign up, logout links required on this page? Or will they be in the nav bar?

export default About;