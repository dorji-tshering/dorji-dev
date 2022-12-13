import { motion } from "framer-motion"
import { MdOutlineWorkOutline } from 'react-icons/md'
import { IoPersonOutline, IoCallOutline } from 'react-icons/io5'
import { ImStack } from 'react-icons/im'


const HomeSectionSeparator = ({icon}: {icon: string}) => {

    const wrapper = {
        initial: {
            transition: {
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
            height: 0
        },
        whileInView: {
            height: 100
        }
    }

    const itemHorizontal = {
        initial: {
            width: 0,
            flex: 0
        },
        whileInView: {
            width: "100%",
            flex: 1
        }
    }

    return (
        <motion.div 
            initial='initial'
            whileInView='whileInView'
            variants={wrapper}
            viewport={{once: false, margin: "-250px"}}
            className='h-[200px] flex flex-col items-center'>
            <motion.span 
                variants={itemVertical}
                className='w-2 bg-red-500'
            />

            <motion.div className='w-full flex justify-center'>
                <motion.span
                    variants={itemHorizontal}
                    className='h-1 bg-yellow-500 block'
                />
                <motion.span className='mx-auto block w-fit'>
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
            </motion.div>

            <motion.span
                variants={itemVertical}
                className='w-2 bg-theme'
            />
        </motion.div>
    )
}

export default HomeSectionSeparator