import Image from "next/image";


export default function ValuePage(){
    return(
        <div className="flex flex-col justify-center relative h-[120vh]">
            <div className="relative h-[300px] w-[700px] mx-auto">
                <Image 
                src='/company.png'
                alt="logo"
                fill
                />
            </div>
            <div className="bg-teal-400 w-[600px] mx-auto px-12 pb-10 text-center -mt-7 z-10">
                <h1 className="my-3 font-bold">OUR VALUES</h1>
                <p>Detoksifikasi dan nutrisi, merupakan dua nilai utama yang menjiwai setiap produk perawatan tubuh  manusia dari Ya Salim House. </p>
            </div>
        </div>
    )
}