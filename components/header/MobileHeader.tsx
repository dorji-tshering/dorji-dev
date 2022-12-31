import { MouseEventHandler } from 'react'
import { IoMdMenu } from 'react-icons/io'
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle'

interface Props {
    onMenuClick: MouseEventHandler
}

const Header = ({ onMenuClick }: Props) => {

    return (
        <header className="md:hidden fixed top-0 right-0 shadow-sm dark:shadow-black left-0 flex justify-between 
            items-center py-3 px-4 z-30 bg-white/50 dark:bg-mainBg/50 backdrop-blur-sm">
            <Link href="/" className="text-[16px] font-[600] ubuntu"><span className="text-theme">Dorji</span> <span>Tshering</span></Link>
            <div className='flex'>
                <div className='mr-4'>
                    <ThemeToggle/>
                </div>
                <button onClick={onMenuClick} className="bg-darkBg border-none dark:text-white"><IoMdMenu size={24}/></button>
            </div>
        </header>
    )
}

export default Header