import Carousel from "@/components/carousel";
import Link from "next/link";
import { Button } from "flowbite-react";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-800 overflow-hidden">
        <div className="relative h-[60vh] sm:h-[80vh] md:h-[100vh]">
          <Image
            src="/home/gambarp.avif"
            alt="Company hero image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
            priority
          />
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center text-white bg-black/40">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Welcome to
              </span>
              <span className="block mt-2 text-white">Yasalim House</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-emerald-200 max-w-2xl mx-auto">
              We provide products that help mothers care for their families with
              mineral nutrition and natural ingredients.
            </p>
            <Button
              size="lg"
              gradientDuoTone="greenToBlue"
              className="px-6 py-3"
            >
              <Link
                href="https://www.tokopedia.com/yasalimhouse"
                target="_blank"
              >
                Shop Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto pt-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Best Seller Products
        </h2>
      </div>
      <Carousel />
      <div className="text-center mt-8 mx-auto">
        <Button size="xl" gradientDuoTone="greenToBlue">
          <Link href="/product">FIND OUT MORE</Link>
        </Button>
      </div>
      <Testimonials />

      {/* Company Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center underline decoration-green-500">
            Our Company
          </h2>
          <p className="text-lg mb-6">
            Founded in 2015, Ya Salim House began as a personal mission to find
            natural solutions for family health and household care. Starting
            with small experiments in the kitchen, the journey led to remarkable
            results and inspired the establishment of a wellness-focused
            company. Over time, Ya Salim House has grown into a trusted brand,
            known for mineral-based products that support a healthy,
            eco-friendly lifestyle. Today, it continues to empower families with
            safe, natural solutions, staying true to the founder’s vision of
            health and sustainability.
          </p>
          <p className="text-lg mb-6">
            Our culture is to never stop dreaming and to take actions that bring
            us one step closer to our goals.
          </p>
          <div className="text-center">
            <Button gradientDuoTone="greenToBlue">
              <Link href="/about-us">About Us</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center underline decoration-green-500">
            Founder Yasalim House
          </h2>
          <div className="flex justify-center gap-10 mt-10">
            {/* Founder Dina A Wulandari */}
            <div className="bg-green-500 w-96 h-80 flex flex-col items-center justify-center rounded-lg">
              <div className="bg-white w-[170px] h-[120px] overflow-hidden">
                <Image
                  src="/woman.avif"
                  alt="gambar"
                  width={170}
                  height={120}
                  objectFit="cover"
                />
              </div>
              <h2 className="font-bold mt-4">Dina A Wulandari</h2>
              <h2 className="font-bold">Founder</h2>
            </div>

            {/* Co-founder Yasmin Kania Fatiha */}
            <div className="bg-green-500 w-96 h-80 flex flex-col items-center justify-center rounded-lg">
              <div className="bg-white w-[170px] h-[120px] overflow-hidden">
                <Image
                  src="/woman2.jpg"
                  alt="gambar"
                  width={170}
                  height={120}
                  objectFit="cover"
                />
              </div>
              <h2 className="font-bold mt-4">Yasmin Kania Fatiha</h2>
              <h2 className="font-bold">Co-founder</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
