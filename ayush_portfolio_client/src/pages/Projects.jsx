import { createSignal, onMount } from 'solid-js';
import axios from 'axios';
import { Motion } from "solid-motionone"


const Projects = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [projects, setProjects] = createSignal([]);

    onMount(async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/project`);
        setProjects(data);
    });

    return (
        <div
            class='grid grid-cols-1 md:grid-cols-5 gap-3 w-full'>
            {projects().map((project, i) => (
                <Motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, easing: "ease-in-out", delay: i * .1 }}
                    class="card card-compact shadow-xl glass w-full">
                    <figure>
                        <img
                            src={project.imageName ? `/${project.imageName}` : 'comming_soon.jpg'}
                            alt="Image"
                            class='size-64' />
                    </figure>

                    <div class="card-body">
                        <h2 class="card-title">{project.title}</h2>
                        <p class='truncate'>{project.description}</p>
                        <div class="card-actions justify-end">
                            <a href={`/projects/${project.fileName}`} class="btn btn-primary">{project.title}</a>
                        </div>
                    </div>
                </Motion.div>
            ))}
        </div>
    )
};

export default Projects;
