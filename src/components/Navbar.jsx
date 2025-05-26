import { useState } from "react";

const Navbar = () => {
  const [lang, setLang] = useState("EN");
  const toggleLang = () => setLang((prev) => (prev === "EN" ? "BN" : "EN"));

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shafol</h1>
        <div className="space-x-4 hidden md:flex">
          <a href="#about">About</a>
          <a href="#stories">Stories</a>
          <a href="#submit">Submit</a>
          <a href="#community">Community</a>
          <button onClick={toggleLang}>{lang}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;