import Image from "next/image"

export default function myContact(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg w-[1000px] max-w-4xl flex flex-col md:flex-row mt-10 mb-7">
          {/* Left Side - Contact Information */}
          <div className="bg-gradient-to-br from-green-700 to-green-700 text-white p-8 md:w-1/2 rounded-l-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-6">
              This statement reflects a dedication to customer satisfaction and a
              commitment to delivering outstanding service and support.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Image src='/maps.png' alt="logo" width={25} height={10} />
                <span>Bogor, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Image src='/wa.png' alt='logo' width={25} height={10} />
                <span>0881-0259-43417</span>
              </li>
              <li className="flex items-center space-x-3">
                <Image src='/gmail.png' alt="logo" width={25} height={10} />
                <span>ahady1105@gmail.com</span>
              </li>
            </ul>
          </div>
  
          {/* Right Side - Contact Form */}
          <div className="p-8 md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description *
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-700 text-white rounded-md shadow-lg hover:bg-black transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}