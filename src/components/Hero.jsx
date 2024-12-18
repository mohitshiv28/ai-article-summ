import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 fixed-nav ">
        <img
          src={logo}
          alt="sumz_logo"
          className="w-28 object-contain fade-in"
        />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className="black_btn fade-in"
        >
          GitHub
        </button>
      </nav>

      <div className="content">
        <h1 className="head_text zoom-out">
          Summarize Articles with <br className="max-md:hidden" />
          <span className="blue_gradient ">OpenAI GPT-4</span>
        </h1>
        <h2 className="desc zoom-out">
          Effortlessly grasp key insights and save time by converting complex
          information into digestible summaries at the click of a button
        </h2>
      </div>
    </header>
  );
};

export default Hero;
