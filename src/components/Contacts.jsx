import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { facebook, github, gmail, linkedin, phone } from "../assets"; 

const ContactDetails = () => {
  const contactInfo = [
    {
      name: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/nirman-khadka-2003s04/",
    },
    {
      name: "GitHub",
      icon: github,
      link: "https://github.com/iamnirmank",
    },
    {
      name: "Facebook",
      icon: facebook,
      link: "https://www.facebook.com/iamnirmank",
    },
    {
      name: "Email",
      icon: gmail,
      link: "mailto:contact.nirmankhadka@gmail.com",
    },
    {
      name: "Phone",
      icon: phone,
      link: "tel:+1(645)358-0602",
    },
  ];

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex flex-col justify-center items-center`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Let's Connect</p>
          <h2 className={styles.sectionHeadText}>Contact Details</h2>
        </motion.div>
      </div>
      <div className="-mt-20 pb-14 flex flex-wrap gap-10 justify-center">
        {contactInfo.map((contact, index) => (
          <motion.div
            key={contact.name}
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className="bg-black-200 p-5 rounded-full flex justify-center items-center w-28 h-28 cursor-pointer"
            onClick={() => window.open(contact.link, "_blank")}
          >
            <img 
              src={contact.icon} 
              alt={contact.name} 
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ContactDetails, "ContactDetails");
