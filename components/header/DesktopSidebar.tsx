import Link from 'next/link';
import { DiCode } from 'react-icons/di';
import { GrTwitter } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { Crimson_Text } from '@next/font/google';
import rippleEffect from '../utils/RippleEffect';
import { useEffect } from 'react';

const Crimson = Crimson_Text({
    weight: '400',
});

const DesktopSidebar = () => {

    useEffect(() => {
        rippleEffect();
    }, []);

    return (
        <div className="hidden overflow-y-auto md:flex md:flex-col md:w-48 lg:w-56">
            {/* logo */}
            <div className="bg-darkBg px-7 py-7 text-center">
                <Link className="text-[18px] mt-1" href='/'>
                    <span className="text-theme">Dorji</span> <span>Tshering</span>
                </Link>
                <p className={`${Crimson.className} text-lightGray text-xs mt-1`}>web developer</p>
                <DiCode className="mx-auto" size={28} color="#989797"/>
            </div>
            {/* menu */}
            <div className="bg-lightBg flex-1">
                <div className="flex flex-col text-center my-20">
                    <Link className="menuLink ripple !border-t !border-t-lightBorder" href="/">Home</Link>
                    <Link className="menuLink ripple" href="/about">About</Link>
                    <Link className="menuLink ripple" href="/projects">Projects</Link>
                    <Link className="menuLink ripple" href="/skills">Skills</Link>
                    <Link className="menuLink ripple" href="/contact">Contact</Link>
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
    )
}

export default DesktopSidebar