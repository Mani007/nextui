import React, {useEffect,useRef} from 'react'
import {motion, useInView, useAnimation} from 'framer-motion'
interface Props {
    children: JSX.Element,
    //width?: "fit-content"|"100%"
}

function Ani({children,}:Props) {
  const ref = useRef(null)
  const inView = useInView(ref,{once: true})
  const controls = useAnimation()
  useEffect(
    () => {
      if(inView) {
        controls.start("visible")
      }

    },[inView])
  return (
    <>
    <div ref={ref} className=''>
        <motion.div
        variants={{
            hidden: {opacity:0, y: 75},
            visible: {opacity:1, y: 0},
        }}
        initial='hidden'
        animate={controls}
        transition={{duration: 0.5, delay: 0.25}}
        >
            {children}
        </motion.div>

    </div>
    </>
  )
}

export default Ani