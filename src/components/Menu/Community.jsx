import React from "react";

const Community = () => {
  return (
    <div className="relative rounded-sm hover:bg-black hover:bg-opacity-30 ">
      {/* Community image */}
      <div className=" absolute left-2 top-[50%] h-6 w-6 translate-y-[-50%] rounded-full bg-red"></div>
      {/* Community name */}
      <p className="rounded-md px-10 py-2 text-text_color">r/Community</p>
    </div>
  );
};

export default Community;
