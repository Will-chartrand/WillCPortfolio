import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"


const elementVariants = {
  visible: { opacity: 1, scale: 1, y: ["0px", "100px", "-30px", "0px"], transition: { duration: 0.5 } },
  hidden: {}
};

export default function About(controls) {

  const textBoxControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      textBoxControls.start("visible");
    } else {
      textBoxControls.start("hidden");
    }
  }, [textBoxControls, inView]);
  
  return (
    <motion.div id='about' className='h-screen flex items-center bg-[#181d1a] border-b border-[#36453c]' animate={controls} >
      {/* About Title */}
      <div className="hidden xl:block">
        <div className="ml-[20vh] mb-30 text-[10vh] text-stone-400">About Me</div>
        <div className="w-[50vh] ml-[20vh] mb-36 border-t-[8px] border-t-[solid] border-t-stone-400 rounded-[5px]"></div>
      </div>
      {/* About text box */}
      <motion.div className="items-center hidden xl:flex xl:w-1/3 xl:ml-[20%] text-stone-400 text-[15px] border-[#36453c] rounded-2xl border-y-[1px] p-10 2xl:h-2/3 2xl:text-[20px]" whileHover={{borderRadius: "0rem", transition: {duration: 0.1}}}
        ref={ref}
        animate={textBoxControls}
        initial="hidden"
        variants={elementVariants}
      >
        <div>
          <p>
            Hi, My name's Will. I'm currently studying at Carleton University in the Computer Science B.C.S Honours program, and I am a dedicated and enthusiastic learner. I have always had a passion for acquiring knowledge and pushing myself to new heights, and I am proud to say that I have become quite proficient in this pursuit.
          </p>
          <br></br>
          <p>
            One of my greatest strengths is my aptitude for coding. I have mastered several programming languages, including C++, C, JavaScript, Java, and Python, and I am always eager to expand my skill set even further. I love exploring new technologies and discovering innovative ways to solve complex problems through coding.
          </p>
        </div>
      </motion.div>


      <div className="text-white block xl:hidden ml-12 mr-12 border-[#36453c] border-y-[1px] p-10">
        <div className=" text-[6vh] text-white">About Me</div>
        <div className="w-[30vh] border-t-[8px] border-t-[solid] border-t-[white] rounded-[5px]"></div>
        <p>
          <br></br>
          Hi, My name's Will. I'm currently studying at Carleton University in the Computer Science B.C.S Honours program, and I am a dedicated and enthusiastic learner. I have always had a passion for acquiring knowledge and pushing myself to new heights, and I am proud to say that I have become quite proficient in this pursuit.
          <br></br>
          <br></br>
          One of my greatest strengths is my aptitude for coding. I have mastered several programming languages, including C++, C, JavaScript, Java, and Python, and I am always eager to expand my skill set even further. I love exploring new technologies and discovering innovative ways to solve complex problems through coding.
        </p>
      </div>

    </motion.div>
  )
}