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
                    key={project.fileName}
                    class="flex flex-col aspect-square overflow-hidden rounded shadow-lg hover:scale-110 duration-200 border-gray-200 p-3 border backdrop-filter backdrop-blur-md bg-opacity-10 bg-white"
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, easing: "ease-in-out", delay: i * .1 }}
                >
                    <div class="h-1/2 flex justify-center">
                        <img
                            src={project.imageName ? `/assets/images/${project.imageName}` : 'comming_soon.jpg'}
                            alt={project.title}
                            class="h-full"
                        />
                    </div>

                    <div class="px-6 py-4">
                        <div class="mb-2 text-xl font-bold">
                            <a href={`/projects/${project.fileName}`}>{project.title}</a>
                        </div>
                        <p class="text-base">{project.description}</p>
                    </div>
                </Motion.div>
            ))}
        </div>
    );
};

export default Projects;
