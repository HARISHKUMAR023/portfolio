import Image from "next/image";
import Link from "next/link";

import Socials from "./Socials";
const Header = () => {
  return (
    <header className=" absolute z-30 w-full flex item">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href=''>
            <Image src={"/logo.svg"} width={220} height={48} alt="" priority={true}>

            </Image>
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
