import { useParams } from "@solidjs/router";
import axios from 'axios';
import { onMount, createSignal } from "solid-js";

const Project = () => {
    const params = useParams();
    const apiUrl = import.meta.env.VITE_API_URL;
    const [project, setProject] = createSignal({});

    onMount(async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/project/${params.id}`);
        setProject(data)
    })
    return (
        <div class="h-full flex justify-center items-center p-3">
            <div class="card glass w-[80%] h-full md:flex-row p-3">
                <figure class='p-3 h-full overflow-auto'>
                    <img
                        src={project().imageName ? `/${project().imageName}` : 'comming_soon.jpg'}
                        class='p-3 aspect-square' />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{project().title}</h2>
                    <p>{project().description}</p>
                    <div class="card-actions justify-end">
                        <a href="/projects" class="btn btn-primary">Back</a>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Project