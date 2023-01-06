import Image from 'next/image';
import isMobile from '../utils/isMobile'

const About = () => {

    return (
        <div className="homeSectionContainer">
            <h1 className="text-[#222] dark:text-myCyan/90 lexend text-xl md:text-2xl tracking-normal font-[300] text-center mb-10">Few words about me.</h1>
            <div className="flex flex-col items-center relative -bottom-2 -mb-12">
                <Image 
                    className="object-cover z-20 rounded-full p-[1px] border grayscale border-solid border-theme/50 dark:border-gray-600" 
                    src="/images/dorji.jpg" 
                    alt="dorji's photo" 
                    width={200}
                    height={200}
                />
                <div className="relative">
                    <p className="pt-[110px] shadow-borderedShadow border border-t-theme
                        border-l-red-500 border-b-green-400 border-r-yellow-500
                        dark:bg-gray-700/20 rounded-lg px-6 pb-7 sm:px-10 sm:pb-9
                        dark:shadow-theme/10
                        relative -top-20 max-w-2xl text-center z-10">
                        I am a college dropout who found his way into programming out of complete passion and love of how it works and how things can become possible out of it. Been two years since I started learning web development from free resources such as online tutorial, youtube, and ebooks. I am a fast learner and over the years I have become solution-oriented developer and that mindset has really helped me in carrying out projects that actually focuses on solution instead of the technology behind it. I don't have the working experience yet but I really think I would love working with a team and I learn much much faster when I am mentored because then at least I know what to prioritize my time on. Excellent academic performance in school days has always taught me to always keep working hard and at the same time to enjoy what you do while being creative. Coding to solve problems has become my passion since I first printed HELLO WORLD. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
