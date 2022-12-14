import Link from "next/link"
import { BsGithub } from "react-icons/bs"
import { DiCode } from "react-icons/di"
import { GrTwitter } from "react-icons/gr"
import { Cycle, motion, AnimatePresence } from 'framer-motion'

interface Props {
    open: boolean 
    cycleOpen: Cycle
}

const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "About", to: "/about", id: 2 },
    { name: "Projects", to: "/projects", id: 3 },
    { name: "Skills", to: "/skills", id: 4 },
    { name: "Contact", to: "/contact", id: 5 }
];

// motion variants
const sideVariants = {
    closed: {
        y: 20,
        transition: {
            y: { stiffness: 1000 },
            staggerChildren: 0.06,
            staggerDirection: -1
        }
    },
    open: {
        y: 0,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
            staggerChildren: 0.06,
            staggerDirection: 1
        }
    }
};

const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
};

const MobileMenu = ({ open, cycleOpen }: Props) => {
 
    return (
        <>
            <AnimatePresence>
                {
                    open && (
                        <motion.div 
                            initial={{width: 0}}
                            animate={{width: "100vw"}}
                            exit={{
                                width: 0,
                                opacity: .1,
                                transition: { delay: .6, duration: 0.3 }
                            }}
                            onClick={() => {cycleOpen()}}
                            className='fixed z-[100] h-full md:hidden bg-mainBg/50 backdrop-blur-sm'>
                            <motion.aside 
                                className='absolute left-0 top-0 h-full pb-10 overflow-y-auto flex flex-col 
                                w-48 scrollbar-hide bg-mainBg shadow-md shadow-gray-800'
                                onClick={(ev) => ev.stopPropagation()}>
        
                                {/* logo */}
                                <div className="px-7 py-7 text-center shadow-sm shadow-black">
                                    <Link onClick={() => cycleOpen()} className="text-[18px] mt-1 font-[600]" href='/'>
                                        <span className="text-theme">Dorji</span> <span>Tshering</span>
                                    </Link>
                                    <p className="text-lightGray text-xs mt-1 font-[mali]">web developer</p>
                                    <DiCode className="mx-auto" size={28} color="#989797"/>
                                </div>
                                {/* menu links */}
                                <div className="flex-1">
                                    <motion.div
                                        initial='closed'
                                        animate='open'
                                        variants={sideVariants}
                                        exit='closed'
                                        className="flex flex-col text-center my-16">
                                        <motion.span variants={itemVariants} className='menuSeparator'></motion.span>
                                        {
                                            links.map(link => (
                                                <motion.div
                                                    variants={itemVariants}
                                                    key={link.id} 
                                                    className="">
                                                    <Link 
                                                        href={link.to}
                                                        onClick={() => cycleOpen()}
                                                        className="menuLink">{link.name}
                                                    </Link>
                                                    <motion.span variants={itemVariants} className='menuSeparator'></motion.span>
                                                </motion.div>
                                            ))
                                        }
                                    </motion.div>
                                    {/* social */}
                                    <div className="flex justify-center">
                                        <Link className="socialLink mx-3" target="_blank" href="https://twitter.com/dorjidev">
                                            <GrTwitter size={24}/>
                                        </Link>
                                        <Link className="socialLink mx-3" target="_blank" href="https://github.com/dorji-tshering">
                                            <BsGithub size={24}/>
                                        </Link>
                                    </div>
                                </div>
                            </motion.aside>
                        </motion.div>)
                }
            </AnimatePresence>
        </>
    )
}

export default MobileMenu