import { AiOutlineClose } from 'react-icons/ai'
import { VscPassFilled } from 'react-icons/vsc'
import { useNoticeContext } from '../components/utils/NoticeContext'
import { motion } from 'framer-motion'

interface Props {
    message: string;
    success?: boolean;
    error?: boolean;
}

const Notice = ({ message, success, error }: Props) => {
    const { showNotice } = useNoticeContext();

    return (
        <motion.div 
            initial={{y: -100}}
            animate={{y: 0}}
            className="fixed z-[100] w-[96%] flex mx-auto justify-center md:w-[500px]
            left-0 right-0 top-5">
            <div className={`${success && 'bg-theme'} ${error && 'bg-red-500'} flex 
                items-center text-[15px] rounded w-fit mx-3
                py-4`}
                >
                <span className="px-3"><VscPassFilled size={20}/></span>
                <p className="text-gray-100">{ message }</p>
                <button onClick={() => showNotice(false)} className="px-4"><AiOutlineClose size={20}/></button>
            </div>
        </motion.div>
    )
}

export default Notice