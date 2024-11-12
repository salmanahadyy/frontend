import Carousel from "@/components/carousel";
import Image from 'next/image'
import Link from 'next/link'
import { Button, Card} from 'flowbite-react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <Image
          src="/home/gambarp.avif"
          alt="Company hero image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 text-black">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Welcome to Ya Salim House</h1>
          <p className="text-xl sm:text-2xl mb-4 max-w-2xl mx-auto">
            We're dedicated to revolutionizing the industry with innovative solutions.
          </p>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto italic">
            "Innovating for a Better Tomorrow" {/* Company Tagline */}
          </p>
          <Button size="xl">Learn More</Button>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Company</h2>
          <p className="text-lg mb-6">
            Founded in 2010, our company has been at the forefront of technological innovation for over a decade. 
            We've grown from a small startup to a global leader in our field, with a team of over 500 dedicated professionals.
          </p>
          <p className="text-lg mb-6">
            Our culture is built on creativity, collaboration, and a relentless pursuit of excellence. 
            We believe in empowering our employees to think big and make a real impact in the world.
          </p>
          <div className="text-center">
            <Button outline>
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>
      <Carousel />
    </div>
  )
}