import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="bg-black h-[60px] items-center flex gap-5 text-white text-center justify-center">
  <Link className="hover:text-blue-600" to = {"/users"}>Users</Link>
  <Link className="hover:text-blue-600" to = {"/register"}>Register</Link>
</div>
    )
}