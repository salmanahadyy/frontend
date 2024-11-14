import Image from "next/image";

export default function Testimonials(){
    return(
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 mt-14">
        <div className="max-w-4xl mx-auto text-black">
          <h2 className="sm:text-3xl font-bold mb-12 text-center max-w-[400px] max-sm:w-[200px] max-sm:text-2xl mx-auto">What Our Customers Say About Yasalim House</h2>
          
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image 
                  src="/avatar.jpg" 
                  alt="Dini" 
                  width={60} 
                  height={60} 
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Dini</p>
                  <p className="text-sm text-gray-600">Customer</p>
                </div>
              </div>
              <p className="mb-4 italic">&quot;The product is very useful; it&apos;s really awesome. The seller responds well and quickly, the shipping was fast with neat packaging, and the product arrived in good condition and as ordered. I&apos;ve shopped here multiple times—thank you!&quot;</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image 
                  src="/avatar2.png" 
                  alt="Haryjoyo" 
                  width={50} 
                  height={60} 
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Haryjoyo</p>
                  <p className="text-sm text-gray-600">Customer</p>
                </div>
              </div>
              <p className="mb-4 italic">&quot;All Ya Salim House products are perfect for me, as I have sensitive skin.&quot;</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image 
                  src="/avatar.webp" 
                  alt="s" 
                  width={50} 
                  height={60} 
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Yuni</p>
                  <p className="text-sm text-gray-600">Customer</p>
                </div>
              </div>
              <p className="mb-4 italic">&quot;I just tried it once, and I can already feel the difference... These Ya Salim products are amazing... 😍😍&quot;</p>
            </div>
          </div>
        </div>
      </section>
    )
}
