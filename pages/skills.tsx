import TechProgress from "../components/utils/TechProgress";

const progress = TechProgress();

const skills = () => {
    return (
        <div className="pageContainer bg-bgSkills">
            <h1 className="mb-12 text-2xl">Skills and Experience</h1>
            <div className="lg:flex">
                <section className="mb-16 lg:mb-0  lg:flex-1 lg:mr-20">
                    <p className="bg-lightBg/80 p-8 rounded">
                        It’s been more than two years  since I started learning web development. 
                        Within that duration, I have equipped myself with skills and technologies. 
                        I have done multiple projects both personal and as a part of a job interview. 
                    </p>
                </section>
                <section className="lg:flex-1">
                    {
                        progress.map((tech) => (
                            <div className="mb-8" key={tech.name}>
                                <h3 className="text-xs mb-3 text-gray-400">{tech.name}</h3>
                                <div className="w-full h-[3px] bg-gray-600">
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