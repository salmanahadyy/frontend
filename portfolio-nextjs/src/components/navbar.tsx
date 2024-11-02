import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <p>
                <Link href="/">Home</Link>
              </p>
            </li>
            <li>
              <a> About Me</a>
              <ul className="p-2">
                <li>
                  <p>
                    <Link href="/profile">Profile</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/MySkills"> My Skills</Link>
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <Link href="/contact">Contact</Link>
              </p>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">My Portfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p>
              <Link href="/">Home</Link>
            </p>
          </li>
          <li>
            <details>
              <summary>About Me</summary>
              <ul className="p-2">
                <li>
                  <p>
                    <Link href="/profile">Profile</Link>
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    <Link href="/MySkills"> My Skills</Link>
                  </p>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <p>
              <Link href="/contact">Contact</Link>
            </p>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
