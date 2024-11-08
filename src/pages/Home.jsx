import mainPage from "../images/fantasy-art.png";

export default function Home() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url('${mainPage}')` }}
    >
      <div className="bg-zinc-900 border-2 border-violet-500 p-10 rounded-xl">
        <h1 className="text-4xl text-violet-400 font-bold mb-4 z-10">
          Welcome to our agency!
        </h1>
        <a
          href="#services"
          className="px-6 py-3 bg-violet-500 text-white font-semibold rounded hover:bg-violet-600 transition duration-300"
        >
          Explore More
        </a>
      </div>
    </div>
  );
}
