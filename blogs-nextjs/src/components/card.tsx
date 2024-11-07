import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Card()  {
  const data: IBlog[] = await getBlogs();
  return (
    <div className="flex flex-row gap-20 p-10 rounded-xl justify-center">
      {data.map((item, idx) => {
        return (
          <Link
            key={idx}
            href={`/${item.fields.slug}`}
            className="border shadow-xl rounded-2xl"
          >
            <div className="flex justify-center items-center rounded-xl overflow-hidden p-4">
              <Image
                src={`https:${item.fields.thumbnail.fields.file.url}`}
                alt={item.fields.title}
                width={260}
                height={100}
              />
            </div>
            <div className="text-lg w-[300px] font-bold mx-5">
              {item.fields.title}
            </div>
            <div className="flex gap-5 p-3 rounded-full">
              <Image
                src={`https:${item.fields.author.fields.avatar.fields.file.url}`}
                alt={item.fields.author.fields.name}
                width={40}
                height={50}
              />
              <div>
                <div>{item.fields.author.fields.name}</div>
                <div>{item.fields.author.fields.email}</div>
              </div>
            </div>
            <div>
              <button className="btn btn-primary bg-black border-black text-white h-6">
                <div>read more</div>
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
