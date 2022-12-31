import { motion } from 'framer-motion'

const wrapper = {
    initial: {
        transition: {
            staggerChildren: .2,
        }
    },
    animate: {
        transition: {
            staggerChildren: .2,
        }
    }
}

const item = {
    initial: {
        x: 10, y: 10, opacity: 0
    },
    animate: {
        x:0, y:0, opacity: 1
    }
}

const techStack = ['HTML', 'CSS', 'Javascript', 'Typescript', 'ReactJS', 'NextJs', 'Firebase', 'Tailwind',
    'HeadlessUI']

const TechStack = () => {
    return (
        <div className="homeSectionContainer">
            <h1 className="mb-10 text-center text-xl md:text-2xl tracking-normal font-[300] text-[#222] dark:text-myRed/90
                lexend">
                Languages, frameworks, libraries, and technologies  I have experience with.
            </h1>
            <motion.div 
                initial='initial'
                whileInView='animate'
                viewport={{ once: false, margin: "-100px 0px"}}
                variants={wrapper}
                className="flex flex-wrap justify-center mx-auto max-w-[500px]">
                {
                    techStack.map((tech, idx) => (
                        <motion.div 
                            variants={item}
                            key={idx} 
                            className="mx-3 mb-8 py-[6px] px-4 text-sm tracking-wider text-slate-600 dark:text-slate-200
                            text-center rounded-sm bg-theme/5 border border-theme/10 dark:bg-gray-700/30">{tech}</motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default TechStack