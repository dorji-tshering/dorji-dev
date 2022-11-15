import { DM_Sans } from "@next/font/google";
import { FormEvent, useState } from "react";
import sendEmail from '../utils/SendEmail';
import { useNoticeContext } from "../utils/NoticeContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const DMSans = DM_Sans({
    weight: '400'
});

const Contact = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false)

    const { showNotice, setNoticeMessage, isSuccess, isError } = useNoticeContext();

    const send = (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        sendEmail(name, email, subject, message).then(res => {
            setNoticeMessage('I have received your message. Thank you for reaching out. Will get back to you as soon as I can.');
            showNotice(true);
            isSuccess(true);
            setLoading(false);
        }).catch(err => {
            setNoticeMessage('Oops, something is not right. Can you try again please?');
            showNotice(true);
            isError(true);
            setLoading(false);
        });
    }
    
    return (
        <div className="homeSectionContainer bg-bgContact">
            <h3 className="text-center text-gray-300 mb-10">CONTACT ME</h3>
            <section className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between">
                <div className="sm:w-[40%] md:w-[100%] lg:w-[40%] px-6">
                    <p className="text-center sm:text-left md:text-center lg:text-left">I am interested in frontend and wordpress projects. If you you want to 
                        discuss about the project or other things for that matter, feel free to reach me via this form. 
                    </p>
                    <address className="mt-10 mb-6 sm:mb-0 md:mb-6 lg:mb-0 flex justify-center sm:block sm:text-[15px] md:flex lg:block text-xs not-italic">
                        <p className="text-gray-400 mx-2 mb-4 sm:mx-0 md:mx-3 lg:mx-0">+975-77640414</p>
                        <p className="text-gray-400 mx-2 sm:mx-0 md:mx-3 lg:mx-0">Phuentsholing, Chukha, Bhutan</p>
                    </address>
                </div>
                <form className="mx-auto sm:w-[60%] md:w-[100%] lg:w-[60%] px-6" onSubmit={send}>
                    <div className="flex flex-col md:flex-row justify-between">
                        <input 
                            className={`${DMSans.className} formInput form-input !rounded sm:mt-0 md:w-[49%]`} 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Name"
                            onChange={(ev) => setName(ev.currentTarget.value)}
                            required
                        />
                        <input 
                            className={`${DMSans.className} formInput form-input !rounded sm:mt-0 md:w-[49%]`}
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email"
                            onChange={(ev) => setEmail(ev.currentTarget.value)}
                            required
                        />
                    </div>
                    <input 
                        className={`${DMSans.className} formInput form-input !rounded w-full`}
                        type="text" 
                        placeholder="Subject"
                        onChange={(ev) => setSubject(ev.currentTarget.value)}
                        required
                    />
                    <textarea 
                        className={`${DMSans.className} formInput form-textarea !rounded w-full resize-y`} 
                        name="message" 
                        id="message" 
                        rows={6} placeholder="Message"
                        onChange={(ev) => setMessage(ev.currentTarget.value)}
                        required></textarea>
                    <button
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        disabled={isLoading ? true : false}
                        className={`!bg-theme flex items-center border-0 ml-auto ripple relative overflow-hidden rounded
                        text-white px-5 py-2 text-xs tracking-wider hover:!bg-theme/80
                        transition-all duration-300 ${isLoading ? 'cursor-not-allowed' : ''}`} type="submit">
                            SEND MESSAGE
                            {
                                isLoading && <AiOutlineLoading3Quarters
                                className="animate-spin ml-2" 
                                size={16}
                            />
                            }
                        </button>
                </form>
            </section>
        </div>
    )
}

export default Contact