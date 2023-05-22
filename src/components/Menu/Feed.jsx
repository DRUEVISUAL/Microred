import React from "react";

const style = {
  home: "rounded-md bg-home_feed bg-6 bg-[center_left_.5rem] bg-no-repeat py-2 pl-10 text-lg font-medium text-text_color",
};

const Feed = () => {
  return (
    <div className="hover:bg-black hover:bg-opacity-30">
      <p className={style.home}>Home</p>
    </div>
  );
};

export default Feed;
