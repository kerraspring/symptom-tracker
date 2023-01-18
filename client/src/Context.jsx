import React, { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const UserContext = createContext({});

const Context = ({ children }) => {
	const [userObject, setUserObject] = useState();
	useEffect(() => {
		axios
			.get("http://localhost:4000/auth/getuser", { withCredentials: true })
			.then((res) => {
				if (res.data) {
					setUserObject(res.data);
				}
			});
	}, []);
	return (
		<UserContext.Provider value={userObject}>{children}</UserContext.Provider>
	);
};

export default Context;
