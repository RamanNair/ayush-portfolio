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
        <div class="grid gap-5 md:grid-cols-5">
            {projects().map((project, i) => (
                <Motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, easing: "ease-in-out", delay: i * .1 }}
                    class="card glass flex flex-col aspect-square  overflow-hidden">
                    <div class="h-1/2 flex justify-center">
                        <figure>
                            <img
                                src={project.imageName ? `/assets/images/${project.imageName}` : 'comming_soon.jpg'}
                                alt={project.title}
                                class="h-full" />
                        </figure></div>
                    <div class="card-body">
                        <h2 class="card-title">{project.title}</h2>
                        <p class='truncate'>{project.description}</p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-primary"><a href={`/projects/${project.fileName}`}>{project.title}</a></button> */}
                       
                       
                       
                            <a  href={`/projects/${project.fileName}`} class="btn btn-primary">{project.title}</a>
                        </div>
                    </div>
                </Motion.div>
            ))}
        </div>
    );
};

export default Projects;
