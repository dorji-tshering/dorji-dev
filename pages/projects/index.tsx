import Link from "next/link"
import { IoMdArrowBack } from "react-icons/io"
import Projects from "../../components/utils/Project"
import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from "../../components/ProjectCard"

const projects = Projects();

// animation variants
const projectsWrapper = {
    initial: {
        transition: {
            staggerChildren: .2,
        }
    },
    animate: {
        transition: {
            staggerChildren: .2
        }
    }
}

const projectVariant = {
    initial: {
        opacity: 0,
        scale: .6
    },
    animate: {
        opacity: 1, 
        scale: 1
    }
}

const ProjectHome = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Dorji &bull; Projects</title>
                <meta key='index' name='description' content='A list of the projects that I have done over the years with tech stack and language usage for each.' />
            </Head>
            <motion.div
                exit={{
                    opacity: 0,
                    transition: { delay: .6, duration: 0.3 }
                }}
                className="pageContainer">
                <div className="relative">
                    <h1 className="text-2xl ubuntu mb-8 lg:mb-12 font-[600] pr-11 text-white">My Projects</h1>
                    <button 
                        className="absolute right-0 top-[6px] text-xl text-gray-300 h-8
                            w-8 md:h-10 md:w-10 flex justify-center items-center rounded-full bg-lightBg
                            hover:bg-gray-700 transition-all duration-300"
                        onClick={() => router.back()}><IoMdArrowBack /></button>
                </div>
                <motion.section 
                    initial='initial'
                    whileInView='animate'
                    variants={projectsWrapper}
                    className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:-mx-2">
                    {
                        projects.map((project) => (
                            <ProjectCard key={project.id} project={project} animeVariant={projectVariant}/>
                        ))
                    }
                </motion.section>
            </motion.div>
        </>
    )
}

export default ProjectHome