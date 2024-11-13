import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Card() {
  const data: IBlog[] = await getBlogs();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-10">
      {data.map((item, idx) => (
        <Link
          key={idx} data-cy="blog-item"
          href={`/${item.fields.slug}`}
          className="border shadow-xl rounded-2xl flex flex-col items-center p-4 bg-white transition-transform transform hover:scale-105"
        >
          <div className="w-full h-[200px] relative rounded-xl overflow-hidden mb-4">
            <Image
              src={`https:${item.fields.thumbnail.fields.file.url}`}
              alt={item.fields.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          
          <div className="text-lg font-bold text-center mb-3 w-full px-4">
            {item.fields.title}
          </div>

          <div className="flex items-center gap-4 px-4 mb-4 w-full">
            <Image
              src={`https:${item.fields.author.fields.avatar.fields.file.url}`}
              alt={item.fields.author.fields.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-sm">
              <div className="font-semibold">{item.fields.author.fields.name}</div>
              <div className="text-gray-500">{item.fields.author.fields.email}</div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-auto">
            <button className="btn btn-primary bg-black border-black text-white h-8 px-4 rounded-full">
              Read more
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

