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
            <div class="card glass w-[80%] h-full md:flex-row">
                <figure class='p-3 h-full overflow-auto'>
                    <img
                        src={project().imageName
                            ? `/assets/images/${project().imageName}`
                            : 'comming_soon.jpg'} 
                            class='p-3 aspect-square'/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{project().title}</h2>
                    <p>{project().description}</p>
                    <div class="card-actions justify-end">
                        <a href="/projects" class="btn btn-primary">Back</a>
                    </div>
                </div>
            </div>


            {/* <div class="flex flex-col sm:flex-row gap-3 h-full border-gray-200 p-12 border backdrop-filter backdrop-blur-md bg-opacity-50">
                <img
                    src={project().imageName
                        ? `/assets/images/${project().imageName}`
                        : 'comming_soon.jpg'}
                    alt=""
                    class=" h-1/2 md:h-full"
                />
                <div class=" h-1/2 overflow-hidden">
                    <div class="font-bold text-xl mb-2">{project().title}</div>
                    <p class="text-gray-700 text-base">
                        {project().description}
                    </p>
                    <span class="inline-block bg-gray-200 rounded-sm mt-3 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <a href="/projects">Back</a>
                    </span>
                </div>
            </div> */}








            {/* <div class="bg-red-400 grid grid-rows-2 md:grid-cols-2 h-full">
<div class="bg-red-300">                <img
                    src={project().imageName
                        ? `${apiUrl}/project/resizeimage800/${project().imageName}`
                        : 'comming_soon.jpg'}
                    alt=""
                    class=""
                /></div>
<div class="">2</div>
</div> */}
            {/* <div class="flex flex-col h-full border-gray-200 p-3 border backdrop-filter backdrop-blur-md bg-opacity-50">
                <img
                    src={project().imageName
                        ? `${apiUrl}/project/resizeimage800/${project().imageName}`
                        : 'comming_soon.jpg'}
                    alt=""
                    class="flex-1 h-full"
                />
                <div class="flex-1 h-full">
                    <div class="font-bold text-xl mb-2">{project().title}</div>
                    <p class="text-gray-700 text-base">
                        {project().description}
                    </p>

                    <span class="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        <a href="/projects">Back</a>
                    </span>
                </div>


            </div> */}
            {/* <div class="h-full   border-gray-200 p-3 border backdrop-filter backdrop-blur-md bg-opacity-50">
                <div class="flex flex-col md:flex-row  rounded  shadow-lg h-full p-3">
                    <img
                        src={project().imageName
                            ? `${apiUrl}/project/resizeimage800/${project().imageName}`
                            : 'comming_soon.jpg'}
                        alt=""
                        class=""
                    />

                    <div class="px-6 py-4">
                        <div>
                            <div class="font-bold text-xl mb-2">{project().title}</div>
                            <p class="text-gray-700 text-base">
                                {project().description}
                            </p>

                        </div>
                        <div class="pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <a href="/projects">Back</a></span>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}



export default Project