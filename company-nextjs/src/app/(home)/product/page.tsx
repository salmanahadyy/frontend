import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage() {
    const data: IBlog[] = await getBlogs();
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-10">

        {data.map((item, idx) => (
          <Link
            key={idx}
            href={`/product/${item.fields.slug}`}
            className="border shadow-xl rounded-2xl flex flex-col items-center p-4 bg-white transition-transform transform hover:scale-105"
          >
            <div className="w-full h-[200px] relative rounded-xl overflow-hidden mb-4">
              <Image
                src={`https:${item.fields.thumbnail.fields.file.url}`}
                alt={item.fields.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            
            <div className="text-lg font-bold text-center mb-3 w-full px-4">
              {item.fields.title}
            </div>
  
            <div className="w-full flex justify-center mt-auto">
              <button className="btn btn-primary bg-green-500 text-white h-8 px-4 rounded-full">
                Read more
              </button>
            </div>
          </Link>
        ))}
      </div>
    );
  }