import { RandomUser } from "@/libs/randomuser";
import { IUser } from "@/types/user";
import Image from "next/image";

export default async function UserRandom() {
  const { results }: { results: IUser[] } = await RandomUser();
  console.log(results);
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {results.map((item, idx) => (
        <div
          key={idx}
          className="bg-emerald-500 flex-shrink-0 w-[250px] h-[320px] mx-4 my-6 rounded-2xl p-6 flex flex-col items-center shadow-lg transition-transform duration-300 hover:scale-105"
        >
          {/* Foto Profil dengan Border */}
          <div className="flex justify-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
            <Image
              src={item.picture.large}
              alt={item.name.first}
              width={140}
              height={140}
              className="object-cover rounded-full"
              priority // Keep only if above-the-fold
              quality={75} // Optional: balance between quality and load time
              sizes="(max-width: 768px) 120px, 140px" // Adjust image size based on viewport
            />
          </div>

          {/* Nama */}
          <div className="mt-4 text-center text-xl font-semibold text-gray-900">
            <p>
              {item.name.title}. {item.name.first} {item.name.last}
            </p>
          </div>

          {/* Email dan Phone */}
          <div className="mt-2 text-center text-sm text-gray-600">
            <p>{item.email}</p>
            <p>{item.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
