import Marquee from "react-fast-marquee";

export default function TeamPage() {
  return (
      <div className="mt-[80px]">
<h1 className="font-bold text-xl ml-8">MEET OUR TEAM</h1>
      <Marquee className="mt-14">
        <div className="bg-red-600 w-[350px] h-[500px] mx-10"></div>
        <div className="bg-yellow-400 w-[350px] h-[500px] mx-10"></div>
        <div className="bg-teal-500 w-[350px] h-[500px] mx-10"></div>
        <div className="bg-green-500 w-[350px] h-[500px] mx-10"></div>
        <div className="bg-sky-600 w-[350px] h-[500px] mx-10"></div>
        
      </Marquee>
      </div>
  );
}
