import { DelayChar } from "../TextAnimations"
import { TiArrowSortedDown } from 'react-icons/ti'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Landing = () => {
    const router = useRouter()

    return (
        <div className="xs:px-4 py-10 sm:px-10 mt-[67px] md:mt-0  text-center flex flex-col justify-center items-center 
            relative h-[calc(100vh-100px)] md:h-[calc(100vh-40px)] min-h-[500px] dark:bg-landingBg">
            <p className="text-theme dark:text-white font-bold mb-8 lg:mb-10">Hello, I am</p>
            <h1 className="text-4xl font-[700] sm:text-4xl md:text-5xl text-black dark:text-white
                lg:text-7xl mb-6 lg:mb-8 lexend">Dorji Tshering</h1>
            <h4 className="text-xs md:text-sm md:tracking-widest font-['mali']">
                <DelayChar text='FRONTEND / WORDPRESS DEVELOPER' staggerChild={.04}/>
            </h4>
            <div className='mt-10'>
                <img src="/images/programmer.svg" 
                    alt="programmer" 
                    className='w-[150px] md:w-[250px] drop-shadow-svgGlow'/>
            </div>
            <style jsx>{`
                .cta {
                    font-size: 16px;
                    padding: 1em 3.3em;
                    transform: perspective(200px) rotateX(15deg);
                    color: white;
                    font-weight: 900;
                    border: none;
                    border-radius: 5px;
                    background: linear-gradient(0deg, rgba(63,94,251,1) 0%, rgba(70,135,252,1) 100%);
                    box-shadow: rgba(63,94,251,0.2) 0px 40px 29px 0px;
                    will-change: transform;
                    transition: all 0.3s;
                    border-bottom: 2px solid rgba(70,135,252,1);
                }
                   
                .cta:hover {
                    transform: perspective(180px) rotateX(30deg) translateY(2px);
                }
                   
                .cta:active {
                    transform: perspective(170px) rotateX(36deg) translateY(5px);
                }
            `}</style>
            <div className="mt-16">
                <button className='cta' onClick={() => router.push('/projects')}>Projects</button>
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
                    className='animate-bounce block text-gray-600'>
                    <TiArrowSortedDown size={34}/>
                </motion.span>
            </div>
            <span className="h-2 rounded-full w-[80px] bg-theme/20 absolute top-0 left-0 origin-top-left rotate-45"></span>
        </div>
    )
}

export default Landing