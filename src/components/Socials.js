import Link from "next/link";

import {RiYoutubeLine , RiGithubLine , RiLinkedinLine } from "react-icons/ri";

const Socials = () => {
    return <div className="flex items-center gap-x-5 text-lg">

        <Link href='https://www.youtube.com/@DeveloperHarish/videos' className="hover:text-accent transition-all duration-300">
            <RiYoutubeLine/>
        </Link>

        <Link href='https://github.com/HARISHKUMAR023' className="hover:text-accent transition-all duration-300">
            <RiGithubLine/>
        </Link>
        <Link href='https://www.linkedin.com/in/harishkumar023/' className="hover:text-accent transition-all duration-300">
            <RiLinkedinLine/>
        </Link>
        

    </div>;
  };
  
  export default Socials;