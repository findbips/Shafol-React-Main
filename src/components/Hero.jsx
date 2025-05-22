const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white pt-32">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">One <span className="text-red-500">World</span>, Many <span className="text-purple-500">Stories</span></h1>
        <p className="text-xl text-gray-400 mb-8">Stories of ambition, grit, and triumph.</p>
        <div className="flex justify-center gap-4">
          <a href="#stories" className="bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 rounded-full">Explore Stories</a>
          <a href="#submit" className="border border-purple-500 px-6 py-3 rounded-full">Submit a Story</a>
        </div>
      </div>
    </section>
  );
};
export default Hero;