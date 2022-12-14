import { DelayChar } from "../TextAnimations"
import { TiArrowSortedDown } from 'react-icons/ti'
import { motion, useInView } from 'framer-motion'
import { useRef } from "react"

const Landing = () => {
    const ref = useRef<any>()

    return (
        <div className="homeSectionContainer flex flex-col justify-center items-center 
            relative h-[calc(100vh-100px)] md:h-[calc(100vh-40px)]">
            <p className="text-theme font-bold mb-8 lg:mb-10">Hello, I am</p>
            <h1 className="text-3xl font-[700] sm:text-4xl md:text-5xl
                lg:text-7xl mb-6 lg:mb-8 ubuntu">DORJI TSHERING</h1>
            <h4 className="text-xs md:text-sm md:tracking-widest font-['mali']">
                <DelayChar text='FRONTEND / WORDPRESS DEVELOPER' staggerChild={.04}/>
            </h4>
            <p className="hidden md:block absolute top-6 right-10 text-xs">Be Curious</p>
            <div className='mt-20'>
                <img src="/images/programmer.svg" 
                    alt="programmer" 
                    className='w-[200px] md:w-[300px] drop-shadow-svgGlow'/>
            </div>
            <a className="text-sm mt-10 font-[500]"
                href="https://github.com/dorji-tshering/ig-clone" 
                target="_blank">Current Project: <span className='text-theme'>Instagram Clone</span>
            </a>
            <div className='mt-6'>
                <motion.span 
                    initial={{opacity: 1}}
                    whileInView={{opacity: 0}}
                    viewport={{once: false, margin: "0px 0px -300px 0px"}}
                    className='animate-bounce block text-gray-600' ref={ref}>
                    <TiArrowSortedDown size={34}/>
                </motion.span>
            </div>
        </div>
    )
}

export default Landing