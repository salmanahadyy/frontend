import Marquee from "react-fast-marquee";

export default function TeamPage() {
  return (
    <div className="mt-[80px]">
      <h1 className="font-bold text-xl ml-8 md:ml-12 lg:ml-16 text-center md:text-left">
        MEET OUR TEAM
      </h1>
      <Marquee className="mt-8 mb-20 md:mt-14 md:mb-32" gradient={false}>
        <div className="bg-green-500 w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px] mx-4 sm:mx-6 md:mx-8 lg:mx-10 rounded-3xl p-5">
          <div className="flex justify-center w-[150px] bg-red-600 h-[150px] mx-auto rounded-full ">
            hello world
          </div>
        </div>
        <div className="bg-green-500 w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px] mx-4 sm:mx-6 md:mx-8 lg:mx-10 rounded-3xl p-5">
          <div className="flex justify-center w-[150px] bg-red-600 h-[150px] mx-auto rounded-full">
            hello world
          </div>
        </div>
        <div className="bg-green-500 w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px] mx-4 sm:mx-6 md:mx-8 lg:mx-10 rounded-3xl p-5">
<div className="flex justify-center w-[150px] bg-red-600 h-[150px] mx-auto rounded-full">

</div>
        </div>
        <div className="bg-green-500 w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px] mx-4 sm:mx-6 md:mx-8 lg:mx-10 rounded-3xl p-5">
<div className="flex justify-center w-[150px] bg-red-600 h-[150px] mx-auto rounded-full">

</div>
        </div>
        <div className="bg-green-500 w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px] mx-4 sm:mx-6 md:mx-8 lg:mx-10 rounded-3xl p-5">
<div className="flex justify-center w-[150px] bg-red-600 h-[150px] mx-auto rounded-full">

</div>
        </div>
      </Marquee>
    </div>
  );
}
