import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex justify-center items-center h-[60px] bg-teal-500 gap-4">
            <Link className="hover:text-white" href={'/'}>Home</Link>
            <Link className="hover:text-white" href={'/about'}>About</Link>
            <Link className="hover:text-white" href={'/user'}>User</Link>
        </div>
    )
}