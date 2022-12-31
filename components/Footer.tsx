import { AiOutlineCopyright } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="py-6 flex justify-center items-center flex-col text-xs text-gray-600
            border-t border-dashed border-gray-300 dark:border-gray-700 font-[500]">
            <p className="mb-1">Built with <a className="text-[#0070f3] font-[500]" href="https://nextjs.org" target="_blank">NextJs</a>
                <span className="mx-1">+</span>
                <a href="https://tailwindcss.com/" target="_blank" className='font-[500] text-[#0ea5e9]'>Tailwind</a>
            </p>
            <div className='flex flex-col items-center sm:flex-row'>
                <p className='flex items-center flex-wrap'>Copyright 
                    <AiOutlineCopyright size={12} className='inline mx-1'/>
                    2022 Dorji Tshering.
                </p>
                <p className='sm:ml-1'>All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer