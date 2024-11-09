import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="flex items-center flex-col mt-20 md:mt-36 px-4 md:px-0 pb-20">
      
      {/* Heading Section */}
      <div className="text-2xl md:text-3xl text-center">
        <h1>OUR HISTORY</h1>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-14 w-full max-w-[90%] md:max-w-[700px]">
        <Image
          src="/gambar.jpg"
          alt="gambar team"
          width={700}
          height={300}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Quote Section */}
      <div className="font-bold text-lg md:text-3xl mt-10 md:mt-[70px] w-full max-w-[90%] md:max-w-[1000px] text-center md:text-left">
        <h1>
          "Ya Salim House adalah kisah seorang founder yang berawal dari
          keprihatinan pribadi terhadap kesehatan keluarga dan perawatan rumah
          tangga"
        </h1>
      </div>

      {/* Paragraphs */}
      <div className="mt-8 md:mt-11 text-base md:text-lg w-full max-w-[90%] md:max-w-[1000px] text-justify">
        <p>
          Di tahun 2015, Dina, founder Ya Salim House, mendirikan Komunitas
          Baking Soda Indonesia, dengan misi sederhana namun mendalam: mencari
          solusi sehat dan alami yang aman digunakan dalam kehidupan
          sehari-hari.
        </p>
      </div>
      <div className="mt-6 md:mt-8 text-base md:text-lg w-full max-w-[90%] md:max-w-[960px] text-justify">
        <p>
          Di rumahnya, ia mulai bereksperimen dengan bahan-bahan mineral yang
          mudah ditemukan dan bermanfaat. Produk-produk eksperimental yang
          diciptakan ternyata membawa dampak positif yang nyata—kesehatan
          pribadi dan keluarga meningkat, lingkungan rumah terasa lebih bersih,
          dan efek detoksifikasi mulai dirasakan.
        </p>
        <p className="mt-6">
          Berangkat dari pengalaman ini, lahirlah{" "}
          <span className="font-bold">Ya Salim House</span>, perusahaan yang
          menawarkan produk-produk berbasis mineral untuk mendukung kesehatan
          dan perawatan rumah tangga. Dari sebuah kebutuhan pribadi, kini{" "}
          <span className="font-bold">Ya Salim House</span> hadir untuk
          menginspirasi orang lain menjalani gaya hidup yang lebih sehat dan
          ramah lingkungan.
        </p>
      </div>
    </div>
  );
}
