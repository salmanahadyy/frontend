"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Carousel(){
    return (
        <Swiper
          modules={[Autoplay, Pagination]}
          className="w-full h-[50vh] md:h-[75vh] lg:h-screen" // Mengatur tinggi responsif
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true // Optional untuk tampilan pagination yang lebih dinamis
          }}
          onSlideChange={() => console.log("slide change")}
        >
          {/* Slide dengan gambar */}
          <SwiperSlide className="flex justify-center items-center w-full h-full relative">
            <div className="relative h-screen w-screen">

            <Image 
              src="/home/gambarr.png" alt="gambar" fill
               
            />
            </div>
          </SwiperSlide>
    
          {/* Slide dengan gambar */}
          <SwiperSlide className="flex justify-center items-center w-full h-full relative">
            <div>

            <Image src="/home/gambarp2.webp" alt="gambar" fill  />
            </div>
          </SwiperSlide>
    
          <SwiperSlide className="flex justify-center items-center w-full h-full relative">
            <Image src="/home/gambars.jpg" alt="gambar" fill  />
          </SwiperSlide>
    
          <SwiperSlide className="flex justify-center items-center w-full h-full relative">
            <Image src="/home/gambarp3.jpg" alt="gambar" fill  />
          </SwiperSlide>
        </Swiper>
      )
}