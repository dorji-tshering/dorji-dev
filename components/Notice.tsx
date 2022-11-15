import { AiOutlineClose } from 'react-icons/ai';
import { VscPassFilled } from 'react-icons/vsc';
import { useNoticeContext } from '../components/utils/NoticeContext';

interface Props {
    message: string;
    success?: boolean;
    error?: boolean;
}

const Notice = ({ message, success, error }: Props) => {
    const { showNotice } = useNoticeContext();

    return (
        <div className="fixed z-[100] w-full flex justify-center md:w-[calc(100%-192px)] lg:w-[calc(100%-224px)] bottom-10">
            <div className={`${success && 'bg-green-600'} ${error && 'bg-red-500'} flex items-center text-[15px] rounded w-fit mx-3
                py-4 shadow-md shadow-gray-700`}
                >
                <span className="px-3"><VscPassFilled/></span>
                <p className="text-gray-100">{ message }</p>
                <button onClick={() => showNotice(false)} className="px-4"><AiOutlineClose size={16}/></button>
            </div>
        </div>
    )
}

export default Notice