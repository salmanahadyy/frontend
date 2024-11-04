export default function AboutUsPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/team.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[400px] mx-auto"
      ></div>
      <div className="font-bold bg-zinc-200 w-[900px] mx-auto px-12 pb-6">
        <h1 className="p-8 text-xl text-center">ABOUT US</h1>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          recusandae dolores atque similique pariatur laborum eum perferendis
          doloribus deleniti corporis.
        </p>
      </div>
      <div className="text-center font-bold mt-9 text-xl">
        <h1>IN THIS SECTION</h1>
      </div>
    </div>
  );
}
