import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdArrowBack } from 'react-icons/io';

const about = () => {
    const router = useRouter();

    return (
        <div className="pageContainer">
            <div className="relative">
                <h1 className="mb-12 text-2xl font-[600] pr-11 text-white">A little extra about myself</h1>
                <button 
                    className="absolute right-0 top-[6px] text-xl text-gray-300 h-8
                        w-8 md:h-10 md:w-10 flex justify-center items-center rounded-full bg-lightBg
                        hover:bg-gray-700 transition-all duration-300"
                    onClick={() => router.back()}><IoMdArrowBack /></button>
            </div>
            <div className="flex flex-col-reverse lg:flex-row">
                <section className="relative rounded p-6 sm:p-10 flex justify-center items-center bg-lightBg lg:w-[70%] lg:mr-12 overflow-hidden">
                    <div>
                        <p className="mb-6">
                            As for the programming languages, I have made myself familiar with C, Java, Python, Javascript, and Typescript. 
                            However, lately I have been into projects that mostly requires Javascript and 
                            Typescript with either ReactJs or NextJs.
                        </p>
                        <p className="mb-6">
                            I have built a fully featured e-commerce website using Wordpress/Woocommerce for a client which you can 
                            visit <Link className="text-gray-400 underline underline-offset-2 decoration-dotted hover:text-theme transition-all duration-500" target="_blank" href="https://tuo.shopping">here</Link> . 
                            Now I am fully confident that I can build any 
                            production-ready website with Wordpress to the customization of the client.
                        </p>
                        <p>
                            Since the start of my web development path, I have explored multiple frameworks and libraries. 
                            I have tried NestJs for backend development, React-Native for mobile application development,
                            ReactJs and NextJs for frontend development. Since now I have fully committed to frontend developement, 
                            I use mostly NextJs these days for personal projects and I have had a great developer experience along the way as well.
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
                            className="object-cover grayscale rounded-full p-[2px] border border-solid border-gray-400"
                            src="/images/dorji.jpg" 
                            alt="Image of Dorji Tshering"
                            fill
                            sizes="500px"
                            priority
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default about