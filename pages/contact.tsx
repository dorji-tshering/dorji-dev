import { FormEvent, useState } from "react";
import { useNoticeContext } from "../components/utils/NoticeContext";
import sendEmail from "../components/utils/SendEmail";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from 'next/router';

const contact = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    
    const { showNotice, setNoticeMessage, isSuccess, isError } = useNoticeContext();
    const router = useRouter();

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
        <div className="pageContainer">
            <div className="relative">
                <h3 className="mb-12 text-2xl font-[600] text-white">Contact Me</h3>
                <button 
                    className="absolute right-0 top-[6px] text-xl text-gray-300 h-8
                        w-8 md:h-10 md:w-10 flex justify-center items-center rounded-full bg-lightBg
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
                <form className="w-full lg:w-[59%]" onSubmit={send}>
                    <div className="sm:flex sm:justify-between">
                        <input 
                            className={`formInput form-input !rounded w-full sm:w-[49%] lg:mt-0`} 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Name"
                            onChange={(ev) => setName(ev.currentTarget.value)}
                            required
                        />
                        <input 
                            className={`formInput form-input !rounded w-full sm:w-[49%] lg:mt-0`}
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email"
                            onChange={(ev) => setEmail(ev.currentTarget.value)}
                            required
                        />
                    </div>
                    <input 
                        className={`formInput form-input !rounded w-full`}
                        type="text" 
                        name="subject"
                        placeholder="Subject"
                        onChange={(ev) => setSubject(ev.currentTarget.value)}
                        required
                    />
                    <textarea 
                        className={`formInput form-textarea !rounded w-full resize-y`} 
                        name="message" 
                        id="message" 
                        rows={6} 
                        placeholder="Message"
                        onChange={(ev) => setMessage(ev.currentTarget.value)}
                        required></textarea>
                    <button 
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        disabled={isLoading ? true : false}
                        className={`flex items-center ml-auto ripple relative overflow-hidden rounded
                        text-theme px-4 py-2 text-sm tracking-wider mt-2 border border-theme
                        hover:!bg-theme hover:text-white
                        transition-all duration-300 font-[400] ${isLoading ? 'cursor-not-allowed' : ''}`} type="submit">
                            Send Message 
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

export default contact