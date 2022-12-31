import ContactForm from "../ContactForm";

const Contact = () => {
    
    return (
        <div className="homeSectionContainer">
            <h1 className="lexend text-[#222] dark:text-myGreen/90 text-xl md:text-2xl tracking-normal font-[300] text-center mb-10">I love being reached out!</h1>
            <section className="flex flex-col md:flex-col lg:flex-row justify-between">
                <div className="sm:w-[40%] md:w-[100%] lg:w-[40%]">
                    <p className="text-center lg:text-left lg:mr-5">I am interested in frontend and wordpress projects. If you you want to 
                        discuss about the project or other things for that matter, feel free to reach me via this form. 
                    </p>
                    <address className="mt-10 mb-6 sm:mb-0 md:mb-6 lg:mb-0 flex justify-center sm:block sm:text-[15px] md:flex lg:block text-xs not-italic">
                        <p className="text-gray-500 dark:text-gray-400 mx-2 mb-4 sm:mx-0 md:mx-3 lg:mx-0">+975-77640414</p>
                        <p className="text-gray-500 dark:text-gray-400 mx-2 sm:mx-0 md:mx-3 lg:mx-0">Phuentsholing, Chukha, Bhutan</p>
                    </address>
                </div>
                <ContactForm/>
            </section>
        </div>
    )
}

export default Contact