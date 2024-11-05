// import Image from "next/image";
// import Marquee from "react-fast-marquee";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Skill() {
  return (
    <div className="bg-green-700 h-[100vh] pt-28 text-3xl">
      <h1 className="font-bold text-center">My Skills</h1>
      <Marquee className="mt-[100px]">
        <Image src="/html.png" alt="logo" width={110} height={100} />
        <Image src="/CSS-Logo.png" alt="logo" width={190} height={100} />
        <Image src="/tailwind.png" alt="logo" width={100} height={100} className="mr-10" />
        <Image src="/javascript.png" alt="logo" width={100} height={100} className="mr-5" />
        <Image src="/Typescript.png" alt="logo" width={100} height={100} className="ml-5" />
        <Image src="/react.png" alt="logo" width={150} height={100} className="mr-1" />
        <Image src="/next.png" alt="logo" width={150} height={100} className="ml-5" />
      </Marquee>
    </div>
  );
}
