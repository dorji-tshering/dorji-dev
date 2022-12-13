import { motion, useInView } from "framer-motion"
import { MdOutlineWorkOutline } from 'react-icons/md'
import { IoPersonOutline, IoCallOutline } from 'react-icons/io5'
import { ImStack } from 'react-icons/im'

const wrapper = {
    initial: {
        transition: {
            ease: 'ease-out',
            staggerChildren: .1,
        }
    },
    whileInView: {
        transition: {
            staggerChildren: .1,
        }
    }
}

const itemVertical = {
    initial: {
        height: 0,
        opacity: 0
    },
    whileInView: {
        height: 100,
        opacity: 1
    }
}

const itemHorizontal = {
    initial: {
        width: 0,
        opacity: 0
    },
    whileInView: {
         width: "49%",
         opacity: 1, 
         transition: {
            delay: .2
         }
    }
}

const iconVariant = {
    initial: {
        opacity: 0
    },
    whileInView: {
        opacity: 1
    }
}


const HomeSectionSeparator = ({icon}: {icon: string}) => {

    return (
        <motion.div 
            initial='initial'
            whileInView='whileInView'
            variants={wrapper}
            viewport={{once: false, margin: "-250px"}}
            className='h-[200px] flex flex-col items-center justify-center'>
            <motion.span 
                variants={itemVertical}
                className='w-1 bg-red-500'
            />
            <div 
                className='w-full flex justify-center items-center'>
                <motion.span
                    variants={itemHorizontal}
                    className='h-1 bg-yellow-500 block'
                />
                <motion.span
                    variants={iconVariant}
                    className='block w-fit'>
                    {
                        icon === 'work' && <MdOutlineWorkOutline/> ||
                        icon === 'about' && <IoPersonOutline/> ||
                        icon === 'stack' && <ImStack/> ||
                        icon === 'contact' && <IoCallOutline/> 
                    }
                </motion.span>
                <motion.span
                    variants={itemHorizontal}
                    className='h-1 bg-green-500 block'
                />
            </div>

            <motion.span
                variants={itemVertical}
                className='w-1 bg-theme'
            />
        </motion.div>
    )
}

export default HomeSectionSeparator