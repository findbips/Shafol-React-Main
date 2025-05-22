const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-3 backdrop-blur bg-black/80 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-3xl font-bold">Shafol</a>
        <div className="hidden md:flex space-x-8">
          <a href="#about">About</a>
          <a href="#stories">Stories</a>
          <a href="#submit">Submit</a>
          <a href="#community">Community</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;