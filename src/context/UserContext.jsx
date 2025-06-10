import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const url = import.meta.env.VITE_BACKEND_URL;
	const upcoming_contest_url = import.meta.env.VITE_CONTEST_URL;

	const [tokenCon, setTokenCon] = useState(false);
	const didSendCode = useRef(false); // <-- flag to prevent double send
	const [isLogged, setIsLogged] = useState(false);
	const token = localStorage.getItem('token');
	
	// online contest tracking
	const [contests, setContests] = useState([]);
	const [cloading, setCloading] = useState(true);
	const [cmessage, setCmessage] = useState('');

	const getContestData = async () => {
		try{

			const response = await axios.get(upcoming_contest_url);
			if(response.data)
				setContests(response.data);
			else{
				setCmessage("Error getting contest data")
			}
			setCloading(false);
		} catch (error) {
			setCmessage('Error getting contest data.');
		}

	}

	useEffect(() => {
		getContestData();
	},[]);

	// events code
	const [events, setEvents] = useState([]);
	const [eventLoading, setEventLoading] = useState(true);
	const [getEventMessage, setGetEventMessage] = useState('');

	const getAllEvents = async () => {
		try{
			const response = await axios.get(
			`${url}/event/get_all_event`,
			)

			if(response.status == 200){
				setEvents(response.data.data);
			}
			else {
				setGetEventMessage('error getting data');
			}
			setEventLoading(false);
		} catch (error){
			setEventLoading(false);
			setGetEventMessage('Error getting event data');
			console.log(error);
		}
	}

	useEffect(()=>{
		getAllEvents();
	}, [events])

	// logout handling
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
		upcoming_contest_url,
		contests, setContests,
		cmessage, setCmessage,
		cloading, setCloading,
		events, eventLoading, getEventMessage,
		setEvents, setEventLoading, setGetEventMessage
	};

	return (
		<UserContext.Provider value={value}>
			{props.children}
		</UserContext.Provider>
	);
};

export { UserContextProvider };