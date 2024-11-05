import Image from "next/image";

export default function Profile(){
    return(
        <div className="bg-base-200">
        <div className="hero bg-base-200 min-h-screen">
                <div className=" bg-teal-700 w-[200px] h-[200px] rounded-full mb-[80px]" style={{
                    backgroundImage:'url(/profil.jpg)',
                    backgroundSize: 'cover'
                    }}>
                    
                </div>
            <div className="hero-content flex-col lg:flex-row-reverse mt-[340px]">
              <div>
                <h1 className="text-4xl font-bold">Welcome To My Profile!</h1>
                <p className="py-6">I'm Salman Ahady, a web developer</p>
                <button className="btn btn-primary bg-green-700 border-green-700 hover:bg-black text-white hover:text-white hover:border-black ">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mx-12 my-16">
            <div className="bg-green-700 h-[190px] w-[600px] my-50 mx-auto rounded-xl flex-1">
              <h2 className="text-center p-3 font-bold mt-1">About Me</h2>
              <p className="text-xs mx-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                optio unde at consectetur? Repellendus magni fugit et at aperiam
                provident accusamus debitis aliquid ullam rerum voluptate deserunt
                ipsum, fugiat iusto quod minima voluptas asperiores, sint omnis
                sequi reprehenderit rem. Vitae perspiciatis, molestiae ab, culpa
                dignissimos sequi tenetur cumque consequatur doloremque atque
                eligendi reiciendis voluptatum accusamus temporibus minus nulla.
                Aut illum, vel sit rerum, sapiente voluptatum qui molestiae
                recusandae id minima consequatur. Distinctio quia aliquam sed,
                vitae in eligendi eos minima!
              </p>
            </div>
            <div className="bg-white h-[130px] w-[600px] my-50 mx-auto rounded-xl flex-1 text-center text-green-700">
              <h2 className="p-3">Details</h2>
              <div className="flex">
                <div className="flex-1">
                  <h4>Name:</h4>
                  <p>Salman Ahady</p>
                </div>
                <div className="flex-1">
                  <h4>Age:</h4>
                  <p>18 years</p>
                </div>
                <div className="flex-1">
                  <h4>Location:</h4>
                  <p>Bogor, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
  
          <footer className="footer bg-base-200 text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="black"
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
              <p className="text-black">
                Copyright © {new Date().getFullYear()} - All right reserved
              </p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <Image src='/instagram.png' alt='logo' width={30} height={24} className="mt-4" />
              <Image src='/linkedin.png' alt="logo" width={30} height={24} className="mt-2" />
            </nav>
          </footer>
      </div>
    )
}