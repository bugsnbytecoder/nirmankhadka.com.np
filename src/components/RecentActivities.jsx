import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { linkedin, facebook } from "../assets"; // Assuming you have LinkedIn and Facebook icons in assets
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { activities } from "../constants";

const ActivityCard = ({
  index,
  title,
  description,
  image,
  linkedin_link,
  facebook_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='activity_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {/* LinkedIn Redirect */}
            <div
              onClick={() => window.open(linkedin_link, "_blank")}
              className='blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
            >
              <img
                src={linkedin}
                alt='linkedin post'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            {/* Facebook Redirect */}
            <div
              onClick={() => window.open(facebook_link, "_blank")}
              className='blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={facebook}
                alt='facebook post'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const RecentActivities = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Recent Activities</p>
        <h2 className={`${styles.sectionHeadText}`}>What I've Been Up To.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center items-center'>
        {activities.map((activity, index) => (
          <ActivityCard key={`activity-${index}`} index={index} {...activity} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(RecentActivities, "");
