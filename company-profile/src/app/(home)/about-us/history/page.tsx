import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="flex items-center flex-col mt-36">
      <div className="text-3xl">
        <h1>OUR HISTORY</h1>
      </div>
      <div>
        <Image
          src="/gambar.jpg"
          alt="gambar team"
          width={700}
          height={300}
          className="mt-14"
        />
      </div>
      <div className="w-[1000px] font-bold mt-[70px]">
        <h1 className="text-3xl">
          "Ya Salim House adalah kisah seorang founder yang berawal dari
          keprihatinan pribadi terhadap kesehatan keluarga dan perawatan rumah
          tangga"
        </h1>
      </div>
      <div className="w-[1000px] mt-11">
        <p>
          Di tahun 2015, Dina, founder Ya salim House mendirikan Komunitas
          Baking Soda Indonesia, dengan misi sederhana namun mendalam: mencari
          solusi sehat dan alami yang aman digunakan dalam kehidupan
          sehari-hari.
        </p>
      </div>
      <div className="w-[960px] mr-[43px] mt-6">
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
