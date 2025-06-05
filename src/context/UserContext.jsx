import { createContext, useRef, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const url = import.meta.env.VITE_BACKEND_URL;
	const upcoming_contest_url = import.meta.env.VITE_CONTEST_URL;

	const [tokenCon, setTokenCon] = useState(false);
	const didSendCode = useRef(false); // <-- flag to prevent double send
	const [isLogged, setIsLogged] = useState(false);
	const token = localStorage.getItem('token');

	const handleLogout = () => {
		localStorage.removeItem('slug');
		localStorage.removeItem('token');
		setIsLogged(false);
	}


	const value = {
		url, tokenCon, didSendCode,
		setTokenCon,
		handleLogout,
		isLogged, setIsLogged,
		token,
		upcoming_contest_url
	};

	return (
		<UserContext.Provider value={value}>
			{props.children}
		</UserContext.Provider>
	);
};

export { UserContextProvider };