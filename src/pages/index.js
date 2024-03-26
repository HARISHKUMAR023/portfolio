import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";

import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avator";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { MyApp } from "./_app";
function Home() {
  return (
    <main className="bg-primary/60 h-full">
      <div className=" w-full h-full bg-gradient-to-r from-primary/60 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1  variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden" className="h1">
            Harishkumar N - Software Developer <br /> Crafting{" "}
            <span className="text-red-500">Innovative Digital Solutions</span>
          </motion.h1>

          <motion.p  variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-14">
            A dedicated software
            developer with a passion for problem-solving and technology.focusing on
            robustness, security, and user experience. With a strong foundation
            in various programming languages and frameworks, Let`s transform your
            ideas into digital reality together!


            {/* I m always ready to
            tackle new challenges and create innovative solutions. Explore my
            portfolio to see the projects I ve worked on and the skills I ve
            developed throughout my journey as a developer. */}
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden  xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bf-cover xl:bg-right xl:bg-no-repeat w-full h-full  absolute mix-blend-color-dodge translate-z-0">

        </div>
        <ParticlesContainer/>
        {/* -bottom-32 lg:bottom-0 lg:right-[0%] */}
        <motion.div  variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden" 
            transition={{ duration: 1, ease:'easeInOut' }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute  lg:right-0 lg:bottom-0 ">
          <Avatar />
        </motion.div>
        {/* <Image alt="profile" src="/avatar1.png" width={200} height={200}/> */}
       
      </div>
    </main>
  );
}
export default Home;
