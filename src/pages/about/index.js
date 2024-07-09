import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Avatar from "@/components/Avator"; // Assuming it's Avatar, not Avator
import Circles from "@/components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="adobephotoshop" />,
        ],
      },
    ],
  },
  {
    title: "sk",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="adobephotoshop" />,
        ],
      },
    ],
  }
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden  xl:flex absolute bottom-0 -left-[370px]"
      ></motion.div>
      <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-6 py-12">
       
      <h1 className="text-3xl font-bold border-b-2 border-red-500 pb-2">About Me</h1>

     <div className="mt-8 xl:mt-0 xl:w-3/4 text-left">
    <p className="text-lg mb-4">
      Hello! Im a dedicated <span className="font-semibold text-red-600">Software Engineer</span> with a passion for crafting innovative solutions in the realm of <span className="font-semibold">mobile and web applications</span>. With a robust foundation in computer science and a keen eye for detail, I ve been able to develop secure, efficient, and scalable software that meets and exceeds the demands of users and businesses alike.
    </p>
    <p className="text-lg mb-4">
      My journey has allowed me to gain extensive experience in <span className="font-semibold text-red-600">native and cross-platform mobile development</span>, creating responsive and intuitive user interfaces on Android and iOS. In the web domain, I specialize in developing dynamic, responsive web applications that offer seamless user experiences, leveraging the latest in front-end and back-end technologies.
    </p>
    <p className="text-lg mb-4">
      Im also deeply invested in the security aspect of software development, understanding the importance of <span className="font-semibold text-red-600">cybersecurity</span> in protecting data and ensuring trust. My approach includes implementing best practices in secure coding, conducting regular security assessments, and staying updated with the latest security trends and threats.
    </p>
    <p className="text-lg">
      Im always on the lookout for new challenges and opportunities to grow. If youre interested in collaborating or learning more about my work, feel free to get in touch!
    </p>
  </div>
      </div>
    </div>
  );
};

export default About;
