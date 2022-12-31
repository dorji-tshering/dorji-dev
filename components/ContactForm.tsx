import { FormEvent, useState } from "react"
import { useNoticeContext } from "./utils/NoticeContext"
import sendEmail from "./utils/SendEmail"
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const ContactForm = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(false)
    
    const { showNotice, setNoticeMessage, isSuccess, isError } = useNoticeContext()

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
                    autoComplete="off"
                />
                <input 
                    className={`formInput form-input !rounded w-full sm:w-[49%] lg:mt-0`}
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email"
                    onChange={(ev) => setEmail(ev.currentTarget.value)}
                    required
                    autoComplete="off"
                />
            </div>
            <input 
                className={`formInput form-input !rounded w-full`}
                type="text" 
                name="subject"
                placeholder="Subject"
                onChange={(ev) => setSubject(ev.currentTarget.value)}
                required
                autoComplete="off"
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
                disabled={isLoading ? true : false}
                className={`w-full flex items-center justify-center mt-5 py-5 border-t border-b hover:text-white border-t-theme border-b-theme 
                    !bg-theme/10 text-xs tracking-[2px] text-theme hover:!bg-theme hover:rounded-md font-[600]
                    transition-all duration-500 ${isLoading ? 'cursor-not-allowed' : ''}`} 
                type="submit">
                    SEND MESSAGE
                    {
                        isLoading && <AiOutlineLoading3Quarters
                            className="animate-spin ml-2" 
                            size={16}
                        />
                    }
            </button>
        </form>
    )
}

export default ContactForm