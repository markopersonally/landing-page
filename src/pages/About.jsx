import aboutImg from "../images/fly-w0man.png";

export default function About() {
  return (
    <section className="py-12 mx-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">100+ Projects</h3>
            <p className="text-gray-700">
              Successfully completed over 100 projects across various
              industries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">5 Years Experience</h3>
            <p className="text-gray-700">
              Over 5 years of experience in delivering quality web solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
            <p className="text-gray-700">
              Clients from over 20 countries worldwide trust our services.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center text-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={aboutImg}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
            <p className="text-gray-700 mb-4">
              We are a team of dedicated professionals focused on delivering
              high-quality services that help businesses grow and achieve their
              goals.
            </p>
            <p className="text-gray-700">
              With a strong focus on innovation and customer satisfaction, we
              pride ourselves on being a trusted partner for clients around the
              world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
