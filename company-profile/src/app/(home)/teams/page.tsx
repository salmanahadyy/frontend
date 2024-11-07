import Marquee from "react-fast-marquee";

export default function TeamPage() {
  return (
      <div className="mt-[80px]">
<h1 className="font-bold text-xl ml-8">MEET OUR TEAM</h1>
      <Marquee className="mt-14 mb-32">
        <div className="bg-green-500 w-[350px] h-[300px] mx-10 rounded-3xl"></div>
        <div className="bg-green-500 w-[350px] h-[300px] mx-10 rounded-3xl"></div>
        <div className="bg-green-500 w-[350px] h-[300px] mx-10 rounded-3xl"></div>
        <div className="bg-green-500 w-[350px] h-[300px] mx-10 rounded-3xl"></div>
        <div className="bg-green-500 w-[350px] h-[300px] mx-10 rounded-3xl"></div>
        
      </Marquee>
      </div>
  );
}
