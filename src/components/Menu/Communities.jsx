import React from "react";
import Community from "./Community";

////////////////////////////////////////////////////////////////////////////////

const Communities = () => {
  return (
    <div>
      {/* Feed title */}
      <p className="mb-2 pl-2 pt-2 text-text_color text-opacity-50">
        Communities
      </p>
      {/* Feed elements container */}
      <div className="flex flex-col gap-2">
        {/* Feed element */}
        <Community isMenuElement={true} />
      </div>
    </div>
  );
};

export default Communities;
