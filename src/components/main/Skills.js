import { motion } from 'framer-motion'

export default function Skills (controls) {
  return (
    <motion.div
      id='skills'
      className='h-screen flex items-center bg-[#181d1a] border-y border-[#36453c] rounded-2xl'
      animate={controls}
    >
      {/* skills text box */}
      <motion.div className='w-2/3 hidden xl:block m-36 text-stone-400 text-[15px] rounded-2xl border-[#36453c] border-y-[1px] p-10 2xl:h-2/3 2xl:text-[1.7rem]' whileHover={{borderRadius: "0rem", transition: {duration: 0.1}}}>
        <div className='ml-[10%]'>
          <p> C++ </p>
          <br></br>
          <p> Java </p>
          <br></br>
          <p> Python </p>
          <br></br>
          <p> HTML5/CSS/Javascript </p>
          <br></br>
          <p> Github </p>
        </div>
      </motion.div>
      {/* About Title */}
      <div className='hidden xl:block'>
        <div className='mb-30 ml-16 text-[10vh] text-stone-400'>Skills</div>
        <div className='w-[50vh] mr-[20vh] mb-36 border-t-[8px] border-t-[solid] border-t-stone-400 rounded-[5px]'></div>
      </div>

      <div className='text-white block xl:hidden ml-12 mr-12 border-[#36453c] border-y-[1px] p-10'>
        <div className=' text-[6vh] text-white'>Skills</div>
        <div className='w-[30vh] border-t-[8px] border-t-[solid] border-t-[white] rounded-[5px]'></div>
        <p> C++ </p>
        <br></br>
        <p> Java </p>
        <br></br>
        <p> Python </p>
        <br></br>
        <p> HTML5/CSS/Javascript </p>
        <br></br>
        <p> Github </p>
      </div>
    </motion.div>
  )
}
