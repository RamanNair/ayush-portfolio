import axios from 'axios';

export const load = async () => {
	const { data } = await axios.get('http://202.177.41.198:9091/api/project');
	return {
		data
	};
};
