import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="pb-36"> 
      <div
        style={{
          backgroundImage: "url(/team.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[300px] sm:h-[400px] mx-auto w-full"
      ></div>
      <div className="font-bold bg-zinc-200 w-[90%] md:w-[700px] lg:w-[900px] mx-auto px-4 md:px-8 lg:px-12 pb-6 mt-6">
        <h1 className="p-4 sm:p-8 text-lg sm:text-xl text-center underline decoration-red-600">
          ABOUT US
        </h1>
        <p className="text-center text-sm sm:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          recusandae dolores atque similique pariatur laborum eum perferendis
          doloribus deleniti corporis.
        </p>
      </div>
      <div className="font-bold text-center mt-10 text-lg sm:text-xl">
        <h1>IN THIS SECTION</h1>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col md:flex-row gap-6 justify-center mt-6 px-4"
      >
        <div className="relative w-full md:w-[45%] lg:w-[400px] mx-auto">
          <Image
            src="/home/gambarp.avif"
            alt="gambar"
            width={400}
            height={250}
            className="w-full h-auto rounded-lg"
          />
          <div className="font-bold bg-green-500 h-auto mt-4 md:mt-0 text-lg p-4 absolute w-full md:w-[85%] top-48 md:top-44 left-0 mx-auto rounded-lg">
            <Link
              href="/about-us/value"
              className="hover:text-red-600 underline"
            >
              OUR VALUE
            </Link>
            <p className="text-sm pt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              illo quo? Vel numquam earum unde maxime dolorum voluptate
              excepturi consequuntur.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-[45%] lg:w-[400px] mx-auto">
          <Image
            src="/home/gambars.jpg"
            alt="gambar"
            width={400}
            height={250}
            className="w-full h-auto rounded-lg"
          />
          <div className="font-bold bg-green-500 h-auto mt-4 md:mt-0 text-lg p-4 absolute w-full md:w-[85%] top-48 md:top-44 left-0 mx-auto rounded-lg">
            <Link
              href="/about-us/history"
              className="hover:text-red-600 underline"
            >
              OUR STORY
            </Link>
            <p className="text-sm pt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              illo quo? Vel numquam earum unde maxime dolorum voluptate
              excepturi consequuntur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

