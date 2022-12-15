import { IoMdArrowBack } from "react-icons/io"
import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import { useRouter } from 'next/router'

const contact = () => {
    const router = useRouter()
 
    return (
        <div className="pageContainer">
            <Head>
                <title>Dorji &bull; Contact</title>
                <meta name='description' content='If you want to discuss any frontend or wordpress projects, you can contact me at the click of a button.' />
            </Head>
            <div className="relative">
                <h3 className="mb-12 ubuntu text-2xl font-[600] text-myGreen/90">Contact Me</h3>
                <button 
                    className="absolute right-0 top-[6px] text-xl text-gray-300 h-8
                        w-8 md:h-10 md:w-10 flex justify-center items-center rounded-full
                        hover:bg-gray-700 transition-all duration-300"
                    onClick={() => router.back()}><IoMdArrowBack /></button>
            </div> 
            <section className="flex flex-col lg:flex-row justify-between">
                <div className="mb-6 md:w-[100%] lg:w-[37%]">
                    <p>I am interested in frontend and wordpress projects. If you you want to 
                        discuss about the project or other things for that matter, feel free to reach me via this form. 
                    </p>
                    <address className="mt-10 flex sm:block sm:text-[15px] md:flex lg:block text-xs not-italic">
                        <p className="text-gray-400 mr-3 mb-4 sm:mx-0 md:mr-3 lg:mx-0">+975-77640414</p>
                        <p className="text-gray-400 sm:mx-0 lg:mx-0">Phuentsholing, Chukha, Bhutan</p>
                    </address>
                </div>
                <ContactForm/>
            </section>
        </div>
    )
}

export default contact