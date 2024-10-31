import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="bg-green-700 h-[60px] items-center flex gap-5 text-white text-center justify-center">
  <Link className="hover:text-black" to = {"/"}>Home</Link>
  <Link className="hover:text-black" to = {"/register"}>Register</Link>
</div>
    )
}