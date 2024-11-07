import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/team.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[400px] mx-auto"
      ></div>
      <div className="font-bold bg-zinc-200 w-[900px] mx-auto px-12 pb-6">
        <h1 className="p-8 text-xl text-center underline decoration-red-600">
          ABOUT US
        </h1>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          recusandae dolores atque similique pariatur laborum eum perferendis
          doloribus deleniti corporis.
        </p>
      </div>
      <div className="font-bold text-center mt-10 text-xl">
        <h1>IN THIS SECTION</h1>
      </div>

      <div data-aos="fade-up" data-aos-duration="3000" className="flex gap-6 justify-center mt-6">
        <div className="relative">
          <Image
            src="/home/gambarp.avif"
            alt="gambar"
            width={400}
            height={100}
          />
          <div className="font-bold bg-green-500 h-48 mx-4 text-xl p-4 absolute w-[370px] top-44 rounded-lg">
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
        <div className="relative">
          <Image
            src="/home/gambars.jpg"
            alt="gambar"
            width={400}
            height={100}
          />
          <div className="font-bold bg-green-500 h-48 mx-4 text-xl p-4 absolute w-[370px] top-44 rounded-lg">
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
