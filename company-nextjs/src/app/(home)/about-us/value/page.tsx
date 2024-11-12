import Image from "next/image";

export default function ValuePage() {
  return (
    <div className="flex flex-col justify-center items-center h-auto md:h-[120vh] px-4 md:px-0">
      
      {/* Heading Section */}
      <div className="text-center text-2xl md:text-3xl mb-2 mt-2">
        <h1>OUR VALUE</h1>
      </div>
      
      {/* Image Section */}
      <div className="relative h-[350px] w-full max-w-[90%] md:max-w-[700px] mx-auto mb-2">
        <Image 
          src='/company.png'
          alt="logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Description Section */}
      <div className="bg-green-500 w-full max-w-[90%] md:max-w-[500px] mx-auto px-6 md:px-12 py-5 text-center -mt-5 z-10 rounded-lg shadow-lg">
        <h1 className="mb-2 font-bold text-lg md:text-xl">OUR VALUES</h1>
        <p className="text-sm md:text-base">
          Detoksifikasi dan nutrisi, merupakan dua nilai utama yang menjiwai setiap produk perawatan tubuh manusia dari Ya Salim House.
        </p>
      </div>
    </div>
  );
}
