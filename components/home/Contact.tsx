import ContactForm from "../ContactForm";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
    
    return (
        <div className="homeSectionContainer">
            <h1 className="text-xl ubuntu text-myGreen/90 font-bold text-center mb-10">I love being reached out!</h1>
            <section className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between">
                <div className="sm:w-[40%] md:w-[100%] lg:w-[40%]">
                    <p className="text-center sm:text-left md:text-center lg:text-left">I am interested in frontend and wordpress projects. If you you want to 
                        discuss about the project or other things for that matter, feel free to reach me via this form. 
                    </p>
                    <address className="mt-10 mb-6 sm:mb-0 md:mb-6 lg:mb-0 flex justify-center sm:block sm:text-[15px] md:flex lg:block text-xs not-italic">
                        <p className="text-gray-400 mx-2 mb-4 sm:mx-0 md:mx-3 lg:mx-0">+975-77640414</p>
                        <p className="text-gray-400 mx-2 sm:mx-0 md:mx-3 lg:mx-0">Phuentsholing, Chukha, Bhutan</p>
                    </address>
                </div>
                <ContactForm/>
            </section>
        </div>
    )
}

export default Contact