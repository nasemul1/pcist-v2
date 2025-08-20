import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const url = import.meta.env.VITE_BACKEND_URL;
	const upcoming_contest_url = "https://clist.by/api/v4/contest/";
	const clistApiKey = import.meta.env.VITE_CLIST_API_KEY;

	const [tokenCon, setTokenCon] = useState(false);
	const didSendCode = useRef(false); // <-- flag to prevent double send
	const [isLogged, setIsLogged] = useState(false);
	const token = localStorage.getItem('token');
	
	// online contest tracking
	const [contests, setContests] = useState([]);
	const [cloading, setCloading] = useState(true);
	const [cmessage, setCmessage] = useState('');

	// Updated getContestData for XML
	const getContestData = async () => {
		try {
			const nowIso = new Date().toISOString();
			const params = {
			start__gt: nowIso,
			order_by: 'start',
			limit: 40
			};

			const response = await axios.get(upcoming_contest_url, {
			headers: {
				'Authorization': clistApiKey
			},
			params
			});

			const contestList = response.data.objects || [];

			const mappedContests = contestList.map(c => ({
			title: c.event,
			site: c.resource?.toLowerCase() || '',
			startTime: c.start,
			url: c.href,
			duration: c.duration
			}));

			setContests(mappedContests);
			setCloading(false);

		} catch (error) {
			setCmessage('Error getting contest data. Make sure your API key and username are correct.');
			setCloading(false);
			console.error(error);
		}
	};

	useEffect(() => {
		getContestData();
	},[]);

	// events code
	const [events, setEvents] = useState([]);
	const [soloEvents, setSoloEvents] = useState([]);
	const [teamEvents, setTeamEvents] = useState([]);
	const [eventLoading, setEventLoading] = useState(true);
	const [getEventMessage, setGetEventMessage] = useState('');

	const getAllEvents = async () => {
		try {
			const response = await axios.get(`${url}/event/get_all_event`);

			if (response.status === 200) {
			// merge soloEvents and teamEvents into one array
			const allEvents = [
				...response.data.soloEvents,
				...response.data.teamEvents,
			];

			setEvents(allEvents);
			setSoloEvents(response.data.soloEvents);
			setTeamEvents(response.data.teamEvents);
			// console.log(allEvents);
			} else {
			setGetEventMessage("Error getting data");
			}
			setEventLoading(false);
		} catch (error) {
			setEventLoading(false);
			setGetEventMessage("Error getting event data");
			console.log(error);
		}
	};

	useEffect(()=>{
		getAllEvents();
	}, [])

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
		getAllEvents,
		events, eventLoading, getEventMessage, soloEvents, teamEvents,
		setEvents, setEventLoading, setGetEventMessage
	};

	return (
		<UserContext.Provider value={value}>
			{props.children}
		</UserContext.Provider>
	);
};

export { UserContextProvider };