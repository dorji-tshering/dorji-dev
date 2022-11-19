import { IoMdArrowBack } from "react-icons/io";
import TechProgress from "../components/utils/TechProgress";
import { useRouter } from 'next/router';

const progress = TechProgress();

const skills = () => {
    const router = useRouter();

    return (
        <div className="pageContainer">
            <div className="relative">
                <h1 className="mb-12 text-2xl font-[600] pr-11">Skills and Experience</h1>
                <button 
                    className="absolute right-0 top-[6px] text-xl text-gray-300 h-8
                        w-8 md:h-10 md:w-10 flex justify-center items-center rounded-full bg-lightBg
                        hover:bg-gray-700 transition-all duration-300"
                    onClick={() => router.back()}><IoMdArrowBack /></button>
            </div>
            <div className="lg:flex">
                <section className="mb-16 lg:mb-0  lg:flex-1 lg:mr-20">
                    <p className="bg-lightBg p-6 sm:p-10 rounded">
                        It’s been more than two years  since I started learning web development. 
                        Within that duration, I have equipped myself with skills and technologies. 
                        I have done multiple projects both personal and as a part of a job interview. 
                        The percentage ratings of the languages and frameworks depict my experience and knowledge
                        of the particular technology which is solely based on the projects I have done over the years 
                        and the confident I feel going forward.
                    </p>
                </section>
                <section className="lg:flex-1 px-8 pt-8 pb-2 rounded border border-solid border-gray-500">
                    {
                        progress.map((tech) => (
                            <div className="mb-8" key={tech.name}>
                                <h3 className="text-[13px] mb-3 text-gray-300 font-[400]">{tech.name}
                                    <span className="ml-2 text-gray-400">{tech.rating}%</span>
                                </h3>
                                <div className="w-full h-[4px] bg-gray-600">
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

export default skills