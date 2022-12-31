import { IoMdArrowBack } from "react-icons/io";
import TechProgress from "../components/utils/TechProgress";
import { useRouter } from 'next/router';
import Head from "next/head";

const progress = TechProgress();

const Skills = () => {
    const router = useRouter();

    return (
        <div className="pageContainer">
            <Head>
                <title>Dorji &bull; Skills</title>
                <meta name="description" content='View my tech skills and experience I have with using it via the proficiency bar.'/>
            </Head>
            <div className="relative">
                <h1 className="mb-12 lexend text-xl md:text-2xl tracking-normal font-[300] pr-11 dark:text-myRed/90">Skills and Experience</h1>
                <button 
                    className="absolute right-0 top-[6px] text-xl dark:text-gray-300 h-8
                        w-8 md:h-10 md:w-10 flex justify-center items-center rounded-full bg-lightBg
                        hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                    onClick={() => router.back()}><IoMdArrowBack /></button>
            </div>
            <div className="lg:flex">
                <section className="mb-16 lg:mb-0  lg:flex-1 lg:mr-20">
                    <p className="p-6 sm:p-10 lg:p-6 xl:p-10 border-t border-gray-300 dark:border-gray-700 border-l rounded-tl-md">
                        It’s been more than two years  since I started learning web development. 
                        Within that duration, I have equipped myself with skills and technologies. 
                        I have done multiple projects both personal and as a part of a job interview. 
                        The percentage ratings of the languages and frameworks depict my 
                        <span className='text-theme mx-[6px] font-[500]'>experience</span>and the 
                        <span className='text-theme mx-[6px] font-[500]'>confidence</span> 
                        I feel going forward to build a any web applications
                        which is solely based on the projects I have done over the years. Please don't mistake the 
                        ratings to the knowledge I have of the technology as I believe one can't possibly
                        accurately determine one's grasp of the technology given the nature and amount of details and concepts. 
                        I learn and pick new concepts as and when I am presented with new projects and challenges. 
                    </p>
                </section>
                <section className="lg:flex-1 px-8 pt-8 pb-2 rounded-br border-b border-r border-gray-300 dark:border-gray-700">
                    {
                        progress.map((tech) => (
                            <div className="mb-8" key={tech.name}>
                                <h3 className="text-[13px] mb-3 dark:text-gray-300 font-[600]">{tech.name}
                                    <span className="ml-2 text-theme dark:text-gray-400">{tech.rating}%</span>
                                </h3>
                                <div className="w-full h-[4px] bg-theme/20 dark:bg-gray-600">
                                    <div className={`h-full ${tech.color} ${tech.progress}`}/>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </div>
        </div>
    )
}

export default Skills