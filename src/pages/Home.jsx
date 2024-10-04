import mainPage from "../images/fantasy-art.png";

export default function Home() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url('${mainPage}')` }}
    >
      <h1 className="text-4xl text-white font-bold mb-4">Welcome ...</h1>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
        Explore More
      </button>
    </div>
  );
}
