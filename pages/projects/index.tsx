import Link from "next/link";
import Projects from "../../components/utils/Project"

const projects = Projects();

const ProjectHome = () => {
    return (
        <div className="pageContainer bg-bgProject">
            <h1 className="text-2xl mb-8 lg:mb-12">{projects.length} Projects</h1>
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {
                    projects.map((project) => (
                        <div className="bg-lightBg rounded p-6 my-3 lg:mx-2 group overflow-hidden relative" key={project.id}>
                            <div className="flex justify-between mb-5">
                                <h4 className="my-0">{ project.title }</h4>
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