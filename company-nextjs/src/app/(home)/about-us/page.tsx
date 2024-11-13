import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="pb-32">
      {/* Bagian Gambar Tim */}
      <div
        style={{
          backgroundImage: "url(/team.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[200px] sm:h-[250px] w-[80%] md:w-[60%] lg:w-[40%] mx-auto mt-10"
      ></div>
      
      {/* Bagian ABOUT US */}
      <div className="font-bold bg-zinc-200 w-[90%] md:w-[700px] lg:w-[900px] mx-auto px-4 md:px-8 lg:px-12 pb-6 shadow-lg rounded-lg">
        <h1 className="p-4 sm:p-6 text-lg sm:text-xl text-center underline decoration-green-500">
          ABOUT US
        </h1>
        <p className="text-center text-sm sm:text-base">
        Ya Salim House is dedicated to promoting family wellness through natural, mineral-based solutions that are safe for everyday use. What began as a personal mission to find healthy alternatives for household care has grown into a trusted brand. Our commitment to quality, health, and sustainability drives everything we do, empowering families to lead healthier, more eco-friendly lives.
        </p>
      </div>

      {/* Bagian Section */}
      <div className="font-bold text-center mt-12 text-xl sm:text-xl">
        <h1>IN THIS SECTION</h1>
      </div>

      {/* Bagian OUR VALUE dan OUR STORY */}
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col md:flex-row gap-6 justify-center mt-6 px-4"
      >
        {/* OUR VALUE */}
        <div className="w-full md:w-[45%] lg:w-[400px] mx-auto bg-gradient-to-r from-green-400 to-green-500 p-6 rounded-lg mb-6 md:mb-0 shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl">
          <Image
            src="/company.png"
            alt="gambar"
            width={400}
            height={250}
            className="w-full h-auto rounded-lg"
          />
          <div className="font-bold text-lg mt-4 text-center">
            <Link
              href="/about-us/value"
              className="hover:text-red-600 underline"
            >
              OUR VALUE
            </Link>
            <p className="text-sm pt-3 text-gray-200">
            The products from Ya Salim House enhance the well-being of Indonesian families through detoxification and nutrition.
            </p>
          </div>
        </div>
        
        {/* OUR STORY */}
        <div className="w-full md:w-[45%] lg:w-[400px] mx-auto bg-gradient-to-r from-green-400 to-green-500 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl">
          <Image
            src="/gambar.jpg"
            alt="gambar"
            width={400}
            height={250}
            className="w-full h-auto rounded-lg"
          />
          <div className="font-bold text-lg mt-4 text-center">
            <Link
              href="/about-us/history"
              className="hover:text-red-600 underline"
            >
              OUR STORY
            </Link>
            <p className="text-sm pt-3 text-gray-200">
            Founded in 2015, Ya Salim House began as a personal mission to create natural solutions for family health. It has since grown into a trusted brand, offering mineral-based, eco-friendly products that support wellness and sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}






