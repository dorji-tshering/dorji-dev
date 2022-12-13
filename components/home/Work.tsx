import Link from 'next/link'
import { GoPrimitiveDot } from 'react-icons/go'
import Projects from '../utils/Project'
import { motion } from 'framer-motion'
import ProjectCard from '../ProjectCard'

// project animation variants
const projectsWrapper = {
    initial: {
        transition: {
            staggerChildren: .2,
        }
    },
    whileInView: {
        transition: {
            staggerChildren: .2,
        }
    }
}

const projectVariant = {
    initial: {
        opacity: 0,
        scale: .6
    },
    whileInView: {
        opacity: 1, 
        scale: 1
    }
}

const Work = () => {
    const featuredProject = Projects().filter((project) => project.featured === true )[0];
    const prioritizedProjects = Projects().filter((project) => project.prioritize === true);

    return (
        <div className="homeSectionContainer">
            <h3 className="text-center text-xl mb-10 font-[600] text-white">MY WORK</h3>
            <p className="text-center mb-10">A list of my projects that I have done over the years.</p>
            {/* Featured Project */}
            <section>
                <h4 
                    className={` text-center text-xs font-bold italic text-red-500 tracking-widest mb-10`}>
                    FEATURED PROJECT
                </h4>
                <div className="relative rounded group bg-theme/10 max-w-[450px] border border-theme/80 transition-all
                        mx-auto py-8 px-9 overflow-hidden shadow-sm shadow-black hover:shadow-xl hover:shadow-black">
                    <div className="flex justify-between mb-5">
                        <h4 className="my-0 font-[500]">{ featuredProject.title }</h4>
                        <Link className="text-gray-500 group-hover:text-theme" href={`/projects/${featuredProject.id}`}>View
                        </Link>
                    </div>
                    <p className="text-gray-300 line-clamp-2">{ featuredProject.description }</p>
                    <div className="flex justify-between mt-6">
                        <p className="text-gray-400 text-sm">{ featuredProject.category }</p>
                        <Link className="text-gray-500 text-sm transition-all group-hover:text-theme" href={featuredProject.github}>Github</Link>
                    </div>
                    <GoPrimitiveDot className="absolute top-1 left-1 text-gray-600"/>
                    <GoPrimitiveDot className="absolute top-1 right-1 text-gray-600"/>
                    <GoPrimitiveDot className="absolute bottom-1 right-1 text-gray-600"/>
                    <GoPrimitiveDot className="absolute bottom-1 left-1 text-gray-600"/>
                </div>
            </section>
            <span className="block h-[1px] w-[80%] my-16 mb-14 mx-auto
                bg-gradient-to-r from-black via-gray-400 to-black">
            </span>
            {/* Prioritized Projects */}
            <motion.section
                initial='initial'
                whileInView='whileInView'
                variants={projectsWrapper}
                viewport={{ once: false}}
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                {
                    prioritizedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} animeVariant={projectVariant}/>
                    ))
                }
            </motion.section>
            <Link className="text-theme block mx-auto w-fit mt-10 
              hover:text-theme/75 transition-all duration-300 ease-out" href="/projects">View all projects
            </Link>
        </div>
    )
}

export default Work