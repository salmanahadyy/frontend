'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import { dataProducts } from "./data";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

export default function CarouselProducts() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true} 
        breakpoints={{
          320: { // For very small screens
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          480: { // For small screens (e.g., mobile)
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          640: { // For slightly larger screens (e.g., small tablets)
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          768: { // For tablets in portrait orientation
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1024: { // For desktops and larger tablets in landscape orientation
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
      >
        {dataProducts.map((product, idx) => {
          return (
            <SwiperSlide key={idx} className="swp">
              <Link href={product.href} className="group flex flex-col items-center gap-4" target="_blank">
                <div className="relative h-36 w-48">
                  <Image src={product.image} alt={product.alt} fill priority />
                </div>
                <span className="text-xl text-center group-hover:border-b-2 border-red-500 group-hover:text-red-500 transition ease-linear">{product.title}</span>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}



