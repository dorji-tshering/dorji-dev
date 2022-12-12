import { motion } from 'framer-motion'

const TechStack = () => {
    return (
        <div className="homeSectionContainer">
            <h3 className="text-center text-xl mb-10 font-[600] text-white">MY TECH STACKS</h3>
            <p className="mb-10 text-center text-gray-100">Languages, frameworks, libraries, and technologies  I have experience with.</p>
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