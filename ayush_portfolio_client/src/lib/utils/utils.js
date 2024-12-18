import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// console.log(__dirname);
// const postsDirectory = path.join(__dirname, '../posts');

// const postsDirectory = path.join(__dirname, '../projects');
// console.log(postsDirectory, '----');
// const postsDirectory = path.resolve('C:/temp/ayush-markdown');

const postsDirectory = path.resolve(
	'\\\\192.168.50.1\\homestorage\\Ayush Prashant Nair\\ayush-markdown'
);

const aboutMeDirectory = path.resolve(
	'\\\\192.168.50.1\\homestorage\\Ayush Prashant Nair\\about_me_markdown'
);

const contactDirectory = path.resolve(
	'\\\\192.168.50.1\\homestorage\\Ayush Prashant Nair\\contact_markdown'
);

export async function fetchMarkdownProjects() {
	const files = fs.readdirSync(postsDirectory);
	// console.log(files);
	return files
		.filter((file) => file.endsWith('.md'))
		.map((file) => {
			const filePath = path.join(postsDirectory, file);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data, content } = matter(fileContent);
			// console.log(data);
			return {
				slug: file.replace('.md', ''),
				title: data.title,
				date: data.date,
				excerpt: data.excerpt,
				imageName: data.imagename,
				content: content
			};
		})
		.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPost(slug) {
	// console.log(slug);
	try {
		const filePath = path.join(postsDirectory, `${slug}.md`);
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		const { data, content } = matter(fileContent);
		return {
			slug,
			title: data.title,
			date: data.date,
			content: marked(content),
			imageName: data.imagename
		};
	} catch (err) {
		return null;
	}
}

export async function fetchMarkdownAboutMe() {
	try {
		const filePath = path.join(aboutMeDirectory, `about_me.md`);
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		const { data, content } = matter(fileContent);
		console.log(content);
		return {
			// slug,
			title: data.title,
			// date: data.date,
			content: marked(content)
			// imageName: data.imagename
		};
	} catch (err) {
		return null;
	}
}

export async function fetchMarkdownContact() {
	try {
		const filePath = path.join(contactDirectory, `contact.md`);
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		const { data, content } = matter(fileContent);
		console.log(content);
		return {
			// slug,
			title: data.title,
			// date: data.date,
			content: marked(content)
			// imageName: data.imagename
		};
	} catch (err) {
		return null;
	}
}
