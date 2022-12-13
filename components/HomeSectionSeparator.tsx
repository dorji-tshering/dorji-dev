import { motion } from "framer-motion"
import classNames from 'classnames'

const wrapper = {
    initial: {
        transition: {
            ease: 'ease-out',
            staggerChildren: .2,
        }
    },
    whileInView: {
        transition: {
            staggerChildren: .2,
        }
    }
}

const itemVertical = {
    initial: {
        height: 0,
    },
    whileInView: {
        height: 132,
    }
}

const itemHorizontal = {
    initial: {
        width: 0,
    },
    whileInView: {
         width: "100%",
         transition: {
            delay: .2,
            duration: 1
         }
    }
}

const headerVariant = {
    initial: {
        opacity: 0
    },
    whileInView: {
        opacity: 1
    }
}


const HomeSectionSeparator = ({header}: {header: string}) => {

    return (
        <motion.div 
            initial='initial'
            whileInView='whileInView'
            variants={wrapper}
            viewport={{once: false, margin: "0px 0px -150px 0px"}}
            className='h-[300px] flex flex-col items-center justify-start'>
            <motion.span 
                variants={itemVertical}
                className='w-[3px] bg-gradient-to-b from-transparent to-theme rounded'
            />
            <div 
                className='w-full flex justify-center items-center'>
                <motion.span
                    variants={itemHorizontal}
                    className='h-[3px] bg-gradient-to-r from-transparent to-theme rounded-tr-sm rounded-br-sm block'
                />
                <motion.span
                    variants={headerVariant}
                    className={classNames(
                        'block w-fit whitespace-nowrap font-bold mx-2',
                        header === 'work' && 'text-[#fbc765]',
                        header === 'about' && 'text-[#f56c62]',
                        header === 'stack' && 'text-[#c766f4]',
                        header === 'contact' && 'text-[#62f4ab]'
                    )}>
                    {
                        header === 'work' && 'MY WORK' ||
                        header === 'about' && 'ABOUT ME' ||
                        header === 'stack' && 'MY TECH STACKS' ||
                        header === 'contact' && 'CONTACT ME' 
                    }
                </motion.span>
                <motion.span
                    variants={itemHorizontal}
                    className='h-[3px] bg-gradient-to-r from-theme to-transparent rounded-tl-sm rounded-bl-sm block'
                />
            </div>

            <motion.span
                variants={itemVertical}
                className='w-[3px] bg-gradient-to-t from-transparent to-theme rounded'
            />
        </motion.div>
    )
}

export default HomeSectionSeparator