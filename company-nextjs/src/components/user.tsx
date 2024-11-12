import { RandomUser } from "@/libs/randomuser";
import { IUser } from "@/types/user";
import Image from "next/image";

export default async function UserRandom() {
  const { results }: { results: IUser[] } = await RandomUser();
  console.log(results);
  return (
    <div className="flex gap-6">
      {results.map((item, idx) => (
        <div
          key={idx}
          className="bg-green-500 flex-shrink-0 w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[350px] mx-4 rounded-3xl p-5 flex flex-col items-center"
        >
          <div className="flex justify-center bg-red-600 w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden">
            <Image
              src={item.picture.large}
              alt={item.name.first}
              width={150}
              height={150}
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex mt-4 text-center gap-1">
            <p>{item.name.title}</p>
            <p>{item.name.first}</p>
            <p>{item.name.last}</p>
          </div>
          <div>
            <p>{item.email}</p>
          </div>
          <div>
            <p>{item.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
