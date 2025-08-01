import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { computer } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex items-center`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center lg:items-start gap-5`}
      >
        {/* Left Section: Gradient Line and Text */}
        <div className="flex flex-row items-start gap-5 w-full lg:w-auto">
          {/* Gradient Line */}
          <div className="flex flex-col justify-center items-center">
            <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-32 sm:h-80 violet-gradient" />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className={`${styles.heroHeadText} text-white text-center lg:text-left`}>
              Hi, I'm <span className="text-[#915EFF]">Nirman</span> <br />
              <span className="text-[#915EFF]">Khadka.</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 text-center lg:text-left`}>
              I build software backends with <br/>Django in Python, <br className="sm:block hidden" />
              but can adapt to anything.
            </p>
          </div>
        </div>

        {/* Right Section: Moving Image */}
        <motion.div
          className="flex justify-center items-center mt-10 lg:mt-0"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <img
            src={computer}
            alt="Computer"
            className="w-[200px] sm:w-[400px] h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>

  );
};

export default Hero;
