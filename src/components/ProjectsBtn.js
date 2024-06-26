import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";
const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href="/work" className="relative w-[185px] flex justify-center bg-circleStar bg-cover bg-center bg-no-repeat group"> 
      <Image
        src={"/rounded-text.png"}
        width={141}
        height={148}
        alt="round-text"
        className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
      />
    <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
