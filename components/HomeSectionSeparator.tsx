import { motion } from "framer-motion"

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
        opacity: 0
    },
    whileInView: {
        height: 70,
        opacity: 1,
    }
}

const itemHorizontal = {
    initial: {
        width: 0,
        opacity: 0
    },
    whileInView: {
         width: "100%",
         opacity: 1, 
         transition: {
            delay: .2,
            duration: 1
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


const HomeSectionSeparator = ({header}: {header: string}) => {

    return (
        <motion.div 
            initial='initial'
            whileInView='whileInView'
            variants={wrapper}
            viewport={{once: false, margin: "-200px"}}
            className='h-[200px] flex flex-col items-center justify-start'>
            <motion.span 
                variants={itemVertical}
                className='w-[3px] bg-gradient-to-b from-transparent to-theme rounded-br-sm rounded-bl-sm'
            />
            <div 
                className='w-full flex justify-center items-center'>
                <motion.span
                    variants={itemHorizontal}
                    className='h-[3px] bg-gradient-to-r from-transparent to-theme rounded-tr-sm rounded-br-sm block'
                />
                <motion.span
                    variants={iconVariant}
                    className='block w-fit text-theme whitespace-nowrap font-bold mx-2'>
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
                className='w-[3px] bg-gradient-to-t from-transparent to-theme rounded-br-sm rounded-bl-sm
                    rounded-tl-sm rounded-tr-sm'
            />
        </motion.div>
    )
}

export default HomeSectionSeparator