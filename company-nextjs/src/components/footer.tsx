import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    {/* Logo Section */}
                    <div className="mb-6 md:mb-0 flex justify-center md:justify-start">
                        <Link href="/" className="flex">
                            <Image src="/logo.jpeg" className="mr-3 h-10" alt="FlowBite Logo" width={40} height={40} />
                            <span className="pt-1 text-2xl font-semibold whitespace-nowrap dark:text-white">Yasalim House</span>
                        </Link>
                    </div>
                    {/* Links Section */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <Link href="/">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white hover:underline">Home Page</h2>
                            </Link>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="/teams" className="hover:underline">Teams</Link>
                                </li>
                                <li>
                                    <Link href="/product" className="hover:underline">Product</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Our store</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                    <Link href="https://shopee.co.id/yasalimhouse" target="_blank" className="hover:underline mb-4 flex">Shopee</Link>
                                    <Link href="https://www.tokopedia.com/yasalimhouse" target="_blank" className="hover:underline">Tokopedia</Link>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About us</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="/about-us/value" className="hover:underline">Our Value</Link>
                                </li>
                                <li>
                                    <Link href="/about-us/history" className="hover:underline">Our Story</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    {/* Footer Copyright */}
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex gap-1">
                        © 2024 <h1>Yasalim House.</h1> All Rights Reserved.
                    </span>
                    {/* Social Icons */}
                    <div className="flex justify-center mt-4 space-x-6 sm:justify-center sm:mt-0">
                       <Link href="https://www.tokopedia.com/yasalimhouse" target="_blank" className="pt-2">
                           <Image src="/tokopedia.png" alt="gambar" width={30} height={20} />
                       </Link>
                        <Link href="https://shopee.co.id/yasalimhouse" target="_blank" className="pt-1">
                           <Image src="/shopee2.png" alt='gambar' width={35} height={20}/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
