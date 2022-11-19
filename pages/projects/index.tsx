import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import Projects from "../../components/utils/Project";
import { useRouter } from 'next/router';

const projects = Projects();

const ProjectHome = () => {
    const router = useRouter();

    return (
        <div className="pageContainer">
            <div className="relative">
                <h1 className="text-2xl mb-8 lg:mb-12 font-[600] pr-11 text-white">My Projects</h1>
                <button 
                    className="absolute right-0 top-[6px] text-xl text-gray-300 h-8
                        w-8 md:h-10 md:w-10 flex justify-center items-center rounded-full bg-lightBg
                        hover:bg-gray-700 transition-all duration-300"
                    onClick={() => router.back()}><IoMdArrowBack /></button>
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:-mx-2">
                {
                    projects.map((project) => (
                        <div className="bg-lightBg shadow-sm shadow-black rounded p-6 my-3 lg:mx-2 
                            group overflow-hidden relative hover:shadow-md hover:shadow-black transition-all" key={project.id}>
                            <div className="flex justify-between mb-5">
                                <h4 className="my-0 font-[500]">{ project.title }</h4>
                                <Link className="text-gray-500 group-hover:text-theme" href={`/projects/${project.id}`}>View
                                </Link>
                            </div>
                            <p className="text-gray-300 line-clamp-2 leading-6">{ project.description }</p>
                            <div className="flex justify-between mt-6">
                                <p className="text-gray-400 text-sm">{ project.category }</p>
                                <Link 
                                    className="text-gray-500 text-sm group-hover:text-theme transition-all" 
                                    href={project.github}
                                    target="_blank">Github
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default ProjectHome