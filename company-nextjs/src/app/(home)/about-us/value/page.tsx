import Image from "next/image";

export default function ValuePage() {
  return (
    <div className="flex flex-col justify-center items-center h-auto md:h-[100vh] px-4 md:px-0 max-lg:pb-64 pb-5 max-sm:pt-10">

      {/* Heading Section */}
      <div className="text-center text-3xl font-bold mt-10 pb-6 text-gray-800">
        <h1 className="underline decoration-green-500 decoration-2">OUR VALUE</h1>
      </div>
      
      {/* Image Section */}
      <div className="relative h-[350px] w-full max-w-[90%] md:max-w-[700px] mx-auto max-sm:-mt-14">
        <Image 
          src='/company.png'
          alt="logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Description Section */}
      <div className="bg-gradient-to-r from-green-400 to-green-500 w-full max-w-[90%] md:max-w-[500px] mx-auto px-6 md:px-12 py-6 text-center -mt-8 z-10 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h1 className="mb-2 font-extrabold text-lg md:text-xl text-white">
          OUR VALUES
        </h1>
        <p className="text-sm md:text-base text-gray-100">
          Detoxification and nutrition are the two core values that inspire every personal care product from Ya Salim House.
        </p>
      </div>
    </div>
  );
}



