import Image from 'next/image';

const about = () => {
  return (
    <div className="pageContainer bg-bgAbout">
        <h1 className="mb-12 text-2xl">A little extra about myself</h1>
        <div className="flex flex-col-reverse lg:flex-row">
            <section className="relative rounded p-10 flex justify-center items-center bg-lightBg/80 lg:w-[70%] lg:mr-12 overflow-hidden">
                <div>
                    <p className="mb-6">
                        I have also built a fully featured ecommerce website with Wordpress and 
                        am now comfortable and experienced to build any kind of website with it. 
                    </p>
                    <p className="mb-6">
                        Currently, I am developing an instagram clone with Next and Firebase and am 
                        loving the journey so far.
                    </p>
                    <p>
                        I have made myself familiar with C, Java, Python, Javascript, and Typescript. 
                        However, lately I have been into projects that mostly requires Javascript and 
                        Typescript with either ReactJs or NextJs.
                    </p>
                </div>
                <span className="absolute animate-pulse w-2 h-2 block top-2 left-2 rounded-full bg-theme shadow-nailShadow"/>
                <span className="absolute w-2 h-2 top-2 right-2 rounded-full bg-theme shadow-nailShadow"/>
                <span className="absolute animate-pulse w-2 h-2 bottom-2 right-2 rounded-full bg-theme shadow-nailShadow"/>
                <span className="absolute w-2 h-2 bottom-2 left-2 rounded-full bg-theme shadow-nailShadow"/>
            </section>
            <section className="lg:w-[30%] mb-10 lg:mb-0 lg:flex lg:items-center">
                <div className="relative w-full max-w-[200px] lg:max-w-[300px] aspect-square">
                    <Image 
                        className="object-cover rounded-full p-[2px] border border-solid border-gray-400"
                        src="/images/dorji.jpg" 
                        alt="Image of Dorji Tshering"
                        fill
                        sizes="500px"
                    />
                </div>
            </section>
        </div>
    </div>
  )
}

export default about