import React from "react";
import BackgroundRedBlur from "../components/BackgroundRedBlur";
import InfoPanel from "../components/HomePage/InfoPanel";
import InfoButton from "../components/HomePage/InfoButton";
import RedirectButton from "../components/HomePage/RedirectButton";
import Logo from "../components/Nav/Logo";

////////////////////////////////////////////////////////////////////////////////

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 overflow-hidden p-2 text-text_color">
      <div>
        <h1 className="font text- text-center text-4xl font-medium mb-4">
          Welcome on <Logo />
        </h1>
        <AllRedirectButtons />
      </div>
      <InfoPanel />
      <BackgroundRedBlur />
    </div>
  );
};

////////////////////////////////////////////////////////////////////////////////

function AllRedirectButtons() {
  const buttonsData = [
    { icon: "browse", alt: "Browse Microred" },
    { icon: "code", alt: "Source Code" },
    { icon: "feedback", alt: "Leave Feedback" },
  ];

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="flex items-center justify-between gap-8 rounded-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-[14%] p-2">
      {buttonsData.map((button) => {
        return (
          <RedirectButton
            icon={button.icon}
            alt={button.alt}
            key={button.icon}
          />
        );
      })}
    </div>
  );
}

export default Home;
