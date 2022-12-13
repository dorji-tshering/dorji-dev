import { MouseEventHandler } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Link from 'next/link';

interface Props {
    onMenuClick: MouseEventHandler
}

const Header = ({ onMenuClick }: Props) => {

    return (
        <header className="md:hidden fixed top-0 right-0 shadow-sm shadow-black left-0 flex justify-between 
            items-center py-5 px-4 z-30 bg-mainBg/50 backdrop-blur-sm">
            <Link href="/" className="text-[16px] font-[600]"><span className="text-theme">Dorji</span> <span>Tshering</span></Link>
            <button onClick={onMenuClick} className="bg-darkBg border-none"><IoMdMenu color='white' size={24}/></button>
        </header>
    )
}

export default Header