import { useState } from "react";
import search from "../assets/icons/search.svg";

function Navbar() {
  const [input, setInput] = useState("");
  return (
    <nav className="w-full p-3 flex justify-between items-center">
      <h1 className="font-bold tracking-wide text-black text-3xl">
        Weather App
      </h1>
      <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center  p-2 gap-2 ">
        <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem] " />
        <input
          type="text"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              //submit the form
            }
          }}
          className="focus:outline-none w-full text-[#212121] text-lg "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
