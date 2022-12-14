import { motion } from 'framer-motion'

export const DelayChar = ({text, staggerChild}: {text: string, staggerChild: number}) => {
    const wrapper = {
        initial: {
            transition: {
                staggerChildren: staggerChild
            }
        },
        animate: {
            transition: {
                staggerChildren: staggerChild
            }
        }
    }

    const item = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    return(
        <motion.div 
            initial='initial' 
            animate='animate'  
            variants={wrapper} 
        >
            {
                text.split('').map((char, idx) => (
                    <motion.span key={idx} variants={item}>
                        {char}
                    </motion.span>
                ))
            }
        </motion.div>
    )
}