import Link from "next/link";
import Wrapper from "./wrapper";

export default function Navbar() {
  return (
    <div className="bg-teal-500 h-[60px] sticky top-0 z-10">
      <Wrapper>
        <Link href={"/"} className=" flex items-center gap-2">
        <img
        src='/Blogger.png'
        alt="logo blogger"
        className="h-8"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Blogger
        </span>
        </Link>
      </Wrapper>
    </div>
  );
}
