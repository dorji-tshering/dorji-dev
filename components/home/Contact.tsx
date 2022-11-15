import { DM_Sans } from "@next/font/google";
import { FormEvent, useState } from "react";
import sendEmail from '../utils/SendEmail';

const DMSans = DM_Sans({
    weight: '400'
});

const Contact = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const send = (event: FormEvent) => {
        event.preventDefault();
        console.log(name, email, subject, message);
        sendEmail(name, email, subject, message).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
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
                        />
                        <input 
                            className={`${DMSans.className} formInput form-input !rounded sm:mt-0 md:w-[49%]`}
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email"
                            onChange={(ev) => setEmail(ev.currentTarget.value)}
                        />
                    </div>
                    <input 
                        className={`${DMSans.className} formInput form-input !rounded w-full`}
                        type="text" 
                        placeholder="Subject"
                        onChange={(ev) => setSubject(ev.currentTarget.value)}
                    />
                    <textarea 
                        className={`${DMSans.className} formInput form-textarea !rounded w-full resize-y`} 
                        name="message" 
                        id="message" 
                        rows={6} placeholder="Message"
                        onChange={(ev) => setMessage(ev.currentTarget.value)}></textarea>
                    <button className="!bg-theme border-0 mx-auto sm:mx-0 sm:ml-auto rounded
                      md:mx-auto lg:mx-0 lg:ml-auto text-white px-5 py-2 block cursor-pointer" type="submit">Send Message</button>
                </form>
            </section>
        </div>
    )
}

export default Contact