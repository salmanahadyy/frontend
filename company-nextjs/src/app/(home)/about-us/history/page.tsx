import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="flex items-center flex-col mt-20 md:mt-36 px-4 md:px-0 pb-20">
      
      {/* Heading Section */}
      <div className="text-2xl md:text-3xl text-center underline decoration-green-500">
        <h1>OUR HISTORY</h1>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-14 w-full max-w-[90%] md:max-w-[700px]">
        <Image
          src="/gambar.jpg"
          alt="gambar team"
          width={700}
          height={300}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Quote Section */}
      <div className="font-bold text-lg md:text-2xl lg:text-3xl mt-10 md:mt-[50px] lg:mt-[70px] w-full max-w-[90%] md:max-w-[80%] lg:max-w-[1000px] text-center lg:text-left leading-snug md:leading-relaxed">
        <h1>
          &quot;Ya Salim House is the story of a founder that began from a personal concern for family health and household care.&quot;
        </h1>
      </div>

      {/* Paragraphs */}
      <div className="mt-8 md:mt-10 lg:mt-11 text-base md:text-lg w-full max-w-[90%] md:max-w-[80%] lg:max-w-[1000px] text-justify leading-relaxed">
        <p>
          In 2015, Dina, the founder of Ya Salim House, established the Baking Soda Indonesia Community with a simple yet profound mission: to find healthy and natural solutions that are safe for everyday use.
        </p>
      </div>
      <div className="mt-6 md:mt-8 text-base md:text-lg w-full max-w-[90%] md:max-w-[80%] lg:max-w-[960px] text-justify leading-relaxed">
        <p>
          In her home, she began experimenting with easily accessible and beneficial mineral ingredients. The experimental products she created had a tangible positive impact—her personal and family health improved, the home environment felt cleaner, and detoxifying effects began to be noticed.
        </p>
        <p className="mt-6">
          From this experience, <span className="font-bold">Ya Salim House</span> was born—a company offering mineral-based products to support health and household care. What began as a personal need has now become <span className="font-bold">Ya Salim House</span>, here to inspire others to live a healthier and more eco-friendly lifestyle.
        </p>
      </div>
    </div>
  );
}


