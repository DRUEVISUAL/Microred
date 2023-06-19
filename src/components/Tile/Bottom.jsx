import React from "react";
import Vote from "./Vote";

////////////////////////////////////////////////////////////////////////////////

const Bottom = ({ score, comments, toggleShowComments }) => {

  return (
    <div className="flex h-full max-h-10 w-full items-center justify-between rounded-md border-1 border-gray_border border-opacity-[14%] bg-gray_element_background bg-opacity-[15%] text-sm text-text_color shadow-md">
      {/* Vote */}
      <Vote score={score} />

      {/* Comments */}
      <button className="bg-50% h-full bg-comment bg-left bg-no-repeat pl-5 pr-2 text-xs font-medium text-text_color hover:bg-comment_hover hover:text-opacity-50" onClick={toggleShowComments}>
        {comments} Comments
      </button>
    </div>
  );
};

export default Bottom;
