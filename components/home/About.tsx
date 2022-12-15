import Image from 'next/image';
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="homeSectionContainer">
        <h1 className="text-myCyan/90 ubuntu text-xl text-center font-bold mb-10">Few words about me.</h1>
        <div className="flex flex-col items-center relative -bottom-2 -mb-12">
            <Image 
                className="object-cover z-10 rounded-full p-[1px] border border-solid border-gray-600" 
                src="/images/dorji.jpg" 
                alt="dorji's photo" 
                width={200}
                height={200}
            />
            <div className="relative">
                <p className="pt-[110px] px-6 pb-7 sm:px-10 sm:pb-9
                    relative -top-20 max-w-2xl text-center z-10">
                    I am a college dropout and hence a self-taught developer. I started learning
                    web development at the start of 2020. Prior to that, I have had a little bit of experience
                    coding in C language as taught in the college. Within the span of almost two years, 
                    I have made myself familiar with Frontend, Backend, Mobile Application, and Wordpress development
                    via personal projects mostly and a few client projects. However, as time went by, I have 
                    committed myself fully to the Frontend aspect of web development which I truly enjoy. 
                </p>
                <motion.div 
                    initial={{x: -50,}}
                    whileInView={{x: 0, rotate: -1}}
                    viewport={{once: false, margin: "-200px 0px"}}
                    transition={{duration: 2}}
                    className='absolute h-full bg-theme/5 -top-20 bottom-0 left-0 right-0 
                    rounded-xl border-b border-theme/90'></motion.div>
                <motion.div 
                    initial={{x: 50,}}
                    whileInView={{x: 0, rotate: 1}}
                    viewport={{once: false, margin: "100px"}}
                    transition={{duration: 2}}
                    className='absolute h-full bg-theme/5 -top-20 bottom-0 left-0 right-0 
                    rounded-xl border-b border-theme/90'></motion.div>
            </div>
        </div>
    </div>
  )
}

export default About