import { DM_Sans } from "@next/font/google";
import { FormEvent, useState } from "react";
import sendEmail from "../components/utils/SendEmail";

const DMSans = DM_Sans({
    weight: '400'
});

const contact = () => {
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
        <div className="pageContainer bg-bgContact">
            <h3 className="mb-12 text-2xl">Contact Me</h3>
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
                            className={`${DMSans.className} formInput form-input !rounded w-full sm:w-[49%] lg:mt-0`} 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Name"
                            onChange={(ev) => setName(ev.currentTarget.value)}
                        />
                        <input 
                            className={`${DMSans.className} formInput form-input !rounded w-full sm:w-[49%] lg:mt-0`}
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
                        name="subject"
                        placeholder="Subject"
                        onChange={(ev) => setSubject(ev.currentTarget.value)}
                    />
                    <textarea 
                        className={`${DMSans.className} formInput form-textarea !rounded w-full resize-y`} 
                        name="message" 
                        id="message" 
                        rows={6} 
                        placeholder="Message"
                        onChange={(ev) => setMessage(ev.currentTarget.value)}></textarea>
                    <button 
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="!bg-theme border-0 ml-auto ripple relative overflow-hidden rounded
                        text-white px-5 py-2 block cursor-pointer" type="submit">Send Message</button>
                </form>
            </section>
        </div>
    )
}

export default contact