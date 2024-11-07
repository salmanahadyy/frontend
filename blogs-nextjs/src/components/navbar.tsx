import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-teal-500 h-[60px] sticky top-0 z-10 shadow-md">
      <Wrapper>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src="/Blogger.png"
              alt="logo blogger"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
              Blogger
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 text-white">
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </Wrapper>
    </div>
  );
}

