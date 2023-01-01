import { motion } from 'framer-motion'
import Link from 'next/link';

type Props = {
    project: {
        id: string;
        title: string;
        repoName: string;
        description: string;
        features: string[];
        category: string;
        featured: boolean;
        github: string;
        hostedLink: string;
        techStacks: string[];
        prioritize: boolean;
    },
    animeVariant?: any
}

const ProjectCard = ({project, animeVariant}: Props) => {
    return (
        <motion.div 
            variants={animeVariant}
            className="rounded p-6 my-4 lg:mx-4 hover:border-transparent hover:bg-slate-50 shadow-borderedShadow
            dark:border dark:border-gray-700/50 dark:hover:bg-gray-700/30 group 
            dark:shadow-sm dark:hover:shadow-md dark:shadow-black dark:bg-gray-700/20" 
            key={project.id}>
            <div className="flex justify-between mb-5">
                <h4 className="my-0 tracking-normal dark:text-white lexend">{ project.title }</h4>
                <Link className="text-gray-400 group-hover:text-theme" href={`/projects/${project.id}`}>View
                </Link>
            </div>
            <p className="text-gray-600 dark:text-gray-500 line-clamp-2">{ project.description }</p>
            <div className="flex justify-between mt-6">
                <p className="text-gray-400 text-sm">{ project.category }</p>
                <Link 
                    className="text-gray-400 text-sm group-hover:text-theme transition-all" 
                    href={project.github}
                    target="_blank">Github</Link>
            </div>
        </motion.div>
    )
}

export default ProjectCard