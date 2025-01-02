import axios from 'axios';

export const load = async () => {
	const apiUrl = import.meta.env.VITE_API_URL;
	console.log(apiUrl);
	
	const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/project`);
	return {
		data
	};
};
