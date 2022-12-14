import { AiOutlineCopyright } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="py-6 flex justify-center items-center flex-col text-xs text-gray-600
            border-t border-dashed border-gray-700 font-[500]">
            <p className="mb-1">Built with <a className="text-theme font-bold" href="https://nextjs.org" target="_blank">NextJs</a></p>
            <p className='flex items-center'>Copyright 
            <AiOutlineCopyright size={12} className='inline mx-1'/>
            2022 Dorji Tshering. All rights reserved.</p>
        </div>
    )
}

export default Footer