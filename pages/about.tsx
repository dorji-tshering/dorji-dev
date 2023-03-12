import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoMdArrowBack } from 'react-icons/io'
import Head from 'next/head'

const about = () => {
    const router = useRouter();

    return (
        <div className="pageContainer">
            <Head>
                <title>Dorji &bull; About</title>
                <meta name='description' content='I am a self-taught Frontend/Wordpress developer. My tech stacks include mostly of React and Next.'/>
            </Head>
            <div className="relative">
                <h1 className="mb-12 lexend text-xl md:text-2xl tracking-normal font-[300] pr-11 dark:text-myCyan/90">A little extra about myself</h1>
                <button 
                    className="absolute right-0 top-[6px] text-xl  dark:text-gray-300 h-8
                        w-8 md:h-10 md:w-10 flex justify-center items-center rounded-full bg-lightBg
                        hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                    onClick={() => router.back()}><IoMdArrowBack /></button>
            </div>
            <div className="flex flex-col-reverse lg:flex-row">
                <section className="px-6 py-10 sm:p-10 flex justify-center
                    items-center lg:w-[70%] lg:mr-12 overflow-hidden border-t border-b border-gray-300 dark:border-gray-700">
                    <div>
                        <p className="mb-6">
                            As for the programming languages, I have made myself familiar with C, Java, Python, Javascript, and Typescript. 
                            However, lately I have been into projects that mostly requires Javascript and 
                            Typescript with either ReactJs or NextJs.
                        </p>
                        <p className="mb-6">
                            I have also built a fully featured e-commerce website using Wordpress and Woocommerce for a client.
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
                </section>
                <section className="lg:w-[30%] mb-10 lg:mb-0 lg:flex lg:items-center">
                    <div className="relative w-full max-w-[200px] lg:max-w-[300px] aspect-square">
                        <Image 
                            className="object-cover rounded-full p-[2px] grayscale border border-gray-200 dark:border-gray-700"
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
