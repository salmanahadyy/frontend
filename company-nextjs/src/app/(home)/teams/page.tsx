import UserRandom from "@/components/user";
import { RandomUser } from "@/libs/randomuser";
import { IUser } from "@/types/user";
import Marquee from "react-fast-marquee";

export default async function TeamPage() {
  const data: IUser = await RandomUser();
  console.log(data);
  return (
    <div className="mt-[80px]">
      <h1 className="font-bold text-xl ml-8 md:ml-12 lg:ml-16 text-center md:text-left">
        MEET OUR TEAM
      </h1>
      <Marquee className="mt-8 mb-20 md:mt-14 md:mb-32" gradient={false}>
        <UserRandom />
      </Marquee>
    </div>
  );
}

