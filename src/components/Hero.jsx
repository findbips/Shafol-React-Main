const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-black text-white text-center px-4 pt-32">
      <h1 className="text-5xl font-bold mb-4">
        One <span className="text-red-500">World</span>, Many{" "}
        <span className="text-purple-500">Stories</span>
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Stories of ambition, grit, and triumph.
      </p>
      <div className="flex space-x-4">
        <a
          href="#stories"
          className="bg-gradient-to-r from-red-500 to-purple-500 px-6 py-2 rounded-full text-white"
        >
          Explore Stories
        </a>
        <a
          href="#submit"
          className="border border-purple-500 px-6 py-2 rounded-full text-white"
        >
          Submit a Story
        </a>
      </div>
    </section>
  );
};

export default Hero;