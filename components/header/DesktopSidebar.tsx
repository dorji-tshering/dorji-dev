import Link from 'next/link';
import { DiCode } from 'react-icons/di';
import { GrTwitter } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import rippleEffect from '../utils/RippleEffect';
import { useEffect } from 'react';


const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "About", to: "/about", id: 2 },
    { name: "Projects", to: "/projects", id: 3 },
    { name: "Skills", to: "/skills", id: 4 },
    { name: "Contact", to: "/contact", id: 5 }
];

const DesktopSidebar = () => {

    useEffect(() => {
        rippleEffect();
    }, []); 

    return (
        <div className="hidden bg-mainBg overflow-y-auto md:flex md:flex-col md:w-48 lg:w-56
            shadow-md shadow-[#444]">
            {/* logo */}
            <div className="px-7 py-7 text-center">
                <Link className="text-[18px] mt-1 font-[600] ubuntu" href='/'>
                    <span className="text-theme">Dorji</span> <span>Tshering</span>
                </Link>
                <p className="font-[mali] text-xs mt-1">web developer</p>
                <DiCode className="mx-auto" size={28} color="#989797"/>
            </div>
            {/* menu link */}
            <div className="flex-1">
                <div className="flex flex-col text-center my-20">
                    <span className='menuSeparator'></span>
                    {
                        links.map(link => (
                                <div
                                key={link.id} 
                                className="ripple relative overflow-hidden">
                                    <Link 
                                        href={link.to}
                                        className="menuLink">{link.name}
                                    </Link>
                                    <span className='menuSeparator'></span>
                                </div>
                        ))
                    }
                </div>
                {/* social */}
                <div className="flex justify-center mb-10">
                    <Link className="socialLink mx-3" target="_blank" href="https://twitter.com/dorjidev">
                        <GrTwitter size={24}/>
                    </Link>
                    <Link className="socialLink mx-3" target="_blank" href="https://github.com/dorji-tshering">
                        <BsGithub size={24}/>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default DesktopSidebar