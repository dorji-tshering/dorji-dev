import Link from "next/link"
import { BsGithub } from "react-icons/bs"
import { DiCode } from "react-icons/di"
import { GrTwitter } from "react-icons/gr"
import { Crimson_Text } from '@next/font/google';
import { Dispatch, SetStateAction, useEffect } from "react"; 
import rippleEffect from '../utils/RippleEffect';

const Crimson = Crimson_Text({
    weight: '400',
});

interface Props {
    showMenu: boolean 
    setShowMenu: Dispatch<SetStateAction<boolean>>
}

const MobileMenu = ({ showMenu, setShowMenu }: Props) => {
    useEffect(() =>{
        rippleEffect();
    }, [])

    return (
        <div className={`fixed z-[100] transform h-screen w-screen md:hidden
            ${!showMenu && '-translate-x-full'} ${showMenu && 'bg-black/60'} 
            transition-all duration-300 ease-in`} 
            onClick={() => setShowMenu(false)}>

            <div className={`absolute left-0 top-0 h-full overflow-y-auto flex flex-col w-48`}
                onClick={(ev) => ev.stopPropagation()}>

                {/* logo */}
                <div className="bg-darkBg px-7 py-7 text-center">
                    <Link onClick={() => setShowMenu(false)} className="text-[18px] mt-1" href='/'>
                        <span className="text-theme">Dorji</span> <span>Tshering</span>
                    </Link>
                    <p className={`${Crimson.className} text-lightGray text-xs mt-1`}>web developer</p>
                    <DiCode className="mx-auto" size={28} color="#989797"/>
                </div>
                {/* menu */}
                <div className="bg-lightBg flex-1">
                    <div className="flex flex-col text-center my-16">
                        <Link onClick={() => setShowMenu(false)} className="menuLink ripple !border-t !border-t-lightBorder" href="/">Home</Link>
                        <Link onClick={() => setShowMenu(false)} className="menuLink ripple" href="/about">About</Link>
                        <Link onClick={() => setShowMenu(false)} className="menuLink ripple" href="/projects">Projects</Link>
                        <Link onClick={() => setShowMenu(false)} className="menuLink ripple" href="/skills">Skills</Link>
                        <Link onClick={() => setShowMenu(false)} className="menuLink ripple" href="/contact">Contact</Link>
                    </div>
                    {/* social */}
                    <div className="flex justify-center">
                        <Link className="socialLink mr-3" target="_blank" href="https://twitter.com/dorjidev">
                            <GrTwitter size={24}/>
                        </Link>
                        <Link className="socialLink ml-3" target="_blank" href="https://github.com/dorji-tshering">
                            <BsGithub size={24}/>
                        </Link>
                    </div>
                    <Link 
                        className="mx-auto block w-fit my-10 text-gray-400 hover:tracking-widest
                            hover:underline hover:underline-offset-4 hover:decoration-dotted
                            transition-all duration-300 ease-out" 
                        target="_blank" 
                        href="https://nextjs.org/">
                        Made with NextJs
                    </Link>
                </div>
            </div>
       </div>
    )
}

export default MobileMenu