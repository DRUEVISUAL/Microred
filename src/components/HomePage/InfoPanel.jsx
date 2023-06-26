import React, { useState } from "react";

const style = {
  visible:
    "absolute bottom-0 h-min rounded-t-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-[14%] p-2 backdrop-blur-lg shadow-md",
  hidden:
    "absolute hidden h-min rounded-t-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-[14%] p-2 backdrop-blur-lg",
};

const InfoPanel = () => {
  const [visibility, setVisibility] = useState(true);
  return (
    <div className={visibility ? style.visible : style.hidden}>
      <button className="absolute right-4 top-4">
        <img
          src="/assets/menu_close.svg"
          alt=""
          onClick={() => setVisibility(false)}
        />
      </button>

      {/*  */}

      <div className="mb-6">
        <h2 className="mb-4 text-xl font-bold">About</h2>
        <p className="max-w-[700px] text-sm text-opacity-90">
          Welcome to my React web app showcase! This project represents
          everything I've learned on Codecademy. Explore the app to see my
          skills in action, including dynamic data rendering, responsive design
          and integration of libraries like React Router and Redux. Enjoy the
          experience!
        </p>
        <p className="mt-2 text-xs">
          Animated icons from{" "}
          <a href="https://lordicon.com" className="hover:underline">
            Lordicon.com
          </a>
        </p>
      </div>

      {/*  */}

      <div className="mb-2 flex items-center justify-evenly">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src="/assets/vitejs.svg"
            alt="ViteJS Logo"
            className="max-h-12"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/assets/react.svg" alt="React Logo" className="max-h-14" />
        </a>
        <a href="https://redux.js.org" target="_blank">
          <img src="/assets/redux.svg" alt="Redux Logo" className="max-h-12" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          {" "}
          <img
            src="/assets/tailwindcss.svg"
            alt="Tailwind CSS Logo"
            className="max-h-11"
          />
        </a>
      </div>
    </div>
  );
};

export default InfoPanel;
