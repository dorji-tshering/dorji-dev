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
            whileHover={{y: -5}}
            className="rounded p-6 my-4 lg:mx-4 group shadow-sm hover:shadow-md shadow-black bg-gray-700/20" 
            key={project.id}>
            <div className="flex justify-between mb-5">
                <h4 className="my-0 font-[500]">{ project.title }</h4>
                <Link className="text-gray-500 group-hover:text-theme" href={`/projects/${project.id}`}>View
                </Link>
            </div>
            <p className="text-gray-300 line-clamp-2">{ project.description }</p>
            <div className="flex justify-between mt-6">
                <p className="text-gray-400 text-sm">{ project.category }</p>
                <Link 
                    className="text-gray-500 text-sm group-hover:text-theme transition-all" 
                    href={project.github}
                    target="_blank">Github</Link>
            </div>
        </motion.div>
    )
}

export default ProjectCard