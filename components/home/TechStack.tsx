import { motion } from 'framer-motion'

const TechStack = () => {
    return (
        <div className="homeSectionContainer">
            <h1 className="mb-10 text-center font-bold text-xl text-myRed/90
                ubuntu">
                Languages, frameworks, libraries, and technologies  I have experience with.
            </h1>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: {staggerChildren: 2} }}
                viewport={{ once: false}}
                className="flex flex-wrap justify-center mx-auto max-w-[500px]">
                <div className="techStack">HTML</div>
                <div className="techStack">CSS</div>
                <div className="techStack">Javascript</div>
                <div className="techStack">Typescript</div>
                <div className="techStack">React</div>
                <div className="techStack">NextJs</div>
                <div className="techStack">Firebase</div>
                <div className="techStack">Tailwind</div>
                <div className="techStack">Styled Components</div>
            </motion.div>
        </div>
    )
}

export default TechStack