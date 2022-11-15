import emailjs from '@emailjs/browser';

const sendEmail = (name: string, email: string, subject: string, message: string) => {
    const templateParams = {
        from_name: name,
        reply_to: email,
        subject: subject,
        message: message
    }

    return emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, templateParams, process.env.NEXT_PUBLIC_KEY);
}

export default sendEmail