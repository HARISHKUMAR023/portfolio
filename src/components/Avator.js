import Image from "next/image";
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none ">
      <Image
        src={"/avatar1.png"}
        width={300}
        height={400}
        alt=""
        className="translate-z-0 lg:ml-[210px] lg:mt-[300px] "
      />
    </div>
  );
};

export default Avatar;
