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
            <h1 className="text-center text-myYellow/90 ubuntu text-xl font-bold mb-10">A list of my projects that I have done over the years.</h1>
            {/* Featured Project */}
            <section>
                <h4 className={` text-center text-theme/80 font-[600] text-xs mb-10 tracking-wide`}>
                    FEATURED PROJECT
                </h4>
                <motion.div
                    whileHover={{scale: 1.05}}
                    transition={{duration: .1}}
                    className="relative rounded group border bg-theme/5 border-theme max-w-[450px] transition-all
                    mx-auto p-6 overflow-hidden shadow-sm">
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
                </motion.div>
            </section>
            <span className="block h-[1px] w-[80%] my-16 mb-14 mx-auto
                bg-gradient-to-r from-black via-gray-700 to-black">
            </span>
            {/* Prioritized Projects */}
            <motion.section
                initial='initial'
                whileInView='whileInView'
                variants={projectsWrapper}
                viewport={{ once: false}}
                className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
                {
                    prioritizedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} animeVariant={projectVariant}/>
                    ))
                }
            </motion.section>
            <Link className="text-theme block mx-auto w-fit mt-10 px-4 py-2 rounded-md font-[500]
              hover:bg-theme/10 transition-all duration-300 ease-out" href="/projects">View all projects
            </Link>
        </div>
    )
}

export default Work