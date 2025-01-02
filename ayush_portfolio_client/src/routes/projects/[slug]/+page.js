// import { getPost } from '$lib/utils/utils';

import axios from 'axios';

// export async function load({ params }) {
// const postData = getPost(params.slug);
// return { postData };
// console.log(params);
// return null;
// }
// import { getPost } from '$lib/utils/utils';

export const load = async ({ url, searchParams, params }) => {
	console.log(params.slug, '---------');
	// const posts = []; //await getPost(url.pathname.split('/')[2]);
	// const { data } = await axios.get(`http://202.177.41.198:9091/api/project/${params.slug}`);
	const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/project/${params.slug}`);

	return {
		data
	};
};

// import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
// 	if (params.slug === 'hello-world') {
// 		return {
// 			title: 'Hello world!',
// 			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
// 		};
// 	}

// 	error(404, 'Not found');
// }
