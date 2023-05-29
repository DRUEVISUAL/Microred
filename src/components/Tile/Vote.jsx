import React, { useState } from "react";

const style = {
  upvoteNotClicked:
    "bg-50% h-full w-12 rotate-180 rounded-r-md bg-vote bg-center bg-no-repeat p-2 hover:bg-black hover:bg-opacity-[14%] animation",
  upvoteClicked:
    "bg-50% h-full w-12 rounded-l-md bg-vote_clicked bg-center bg-no-repeat p-2 bg-black bg-opacity-[14%]",
  downvoteNotClicked:
    "bg-50% h-full w-12 rounded-r-md bg-vote bg-center bg-no-repeat p-2 hover:bg-black hover:bg-opacity-[14%]",
  downvoteClicked:
    "bg-50% h-full w-12 rotate-180 rounded-l-md bg-vote_clicked bg-center bg-no-repeat p-2 bg-black bg-opacity-[14%]",
};

const Vote = () => {
  const [vote, setVote] = useState({
    upvote: false,
    downvote: false,
  });

  function handleClickVote(e) {
    if (e.target.value === "upvote" && vote.upvote === false) {
      setVote({ upvote: true, downvote: false });
    } else if (e.target.value === "upvote" && vote.upvote === true) {
      setVote({ upvote: false, downvote: false });
    } else if (e.target.value === "downvote" && vote.downvote === false) {
      setVote({ upvote: false, downvote: true });
    } else if (e.target.value === "downvote" && vote.downvote === true) {
      setVote({ upvote: false, downvote: false });
    } else {
      return;
    }
  }

  return (
    <div className="flex h-full items-center">
      <button
        value="upvote"
        className={vote.upvote ? style.upvoteClicked : style.upvoteNotClicked}
        onClick={handleClickVote}
      ></button>
      <div className=" w-12 border-x-1 border-gray_border border-opacity-[14%] p-2 text-center text-xs">
        451
      </div>
      <button
        value="downvote"
        onClick={handleClickVote}
        className={vote.downvote ? style.downvoteClicked : style.downvoteNotClicked}
        isActive={vote.downvote}
      ></button>
    </div>
  );
};

export default Vote;
