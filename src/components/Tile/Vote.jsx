import React, { useState } from "react";

const style = {
  upvoteNotClicked:
    "bg-50% h-8 w-12 rotate-180 rounded-r-md bg-vote bg-center bg-no-repeat p-2 hover:bg-black hover:bg-opacity-[14%]",
  upvoteClicked:
    "bg-50% h-8 w-12 rounded-l-md bg-vote_clicked bg-center bg-no-repeat p-2 bg-black bg-opacity-[14%]",
  downvoteNotClicked:
    "bg-50% h-8 w-12 rounded-r-md bg-vote bg-center bg-no-repeat p-2 hover:bg-black hover:bg-opacity-[14%]",
  downvoteClicked:
    "bg-50% h-8 w-12 rotate-180 rounded-l-md bg-vote_clicked bg-center bg-no-repeat p-2 bg-black bg-opacity-[14%]",
};

const Vote = ({ score }) => {
  // State for the vote field
  const [vote, setVote] = useState({
    upvote: false,
    downvote: false,
  });

  // State for the score calculated by the votes (used to rerender the pages if the user votes)
  const [scoreCount, setScoreCount] = useState(score);

  function handleClickVote(e) {
    if (e.target.value === "upvote" && vote.upvote === false) {
      setVote({ upvote: true, downvote: false });
      setScoreCount(scoreCount + 1);
    } else if (e.target.value === "upvote" && vote.upvote === true) {
      setVote({ upvote: false, downvote: false });
      setScoreCount(scoreCount - 1);
    } else if (e.target.value === "downvote" && vote.downvote === false) {
      setVote({ upvote: false, downvote: true });
      setScoreCount(scoreCount - 1);
    } else if (e.target.value === "downvote" && vote.downvote === true) {
      setVote({ upvote: false, downvote: false });
      setScoreCount(scoreCount + 1);
    } else {
      return;
    }
  }

  return (
    <div className="flex h-full items-center justify-center font-mono">
      <button
        value="upvote"
        className={vote.upvote ? style.upvoteClicked : style.upvoteNotClicked}
        onClick={handleClickVote}
        aria-label="upvote button"
      ></button>
      <div className="min-w-12 w-max border-x-1 border-gray_border border-opacity-[14%] p-2 text-center text-xs">
        {scoreCount}
      </div>
      <button
        value="downvote"
        onClick={handleClickVote}
        className={
          vote.downvote ? style.downvoteClicked : style.downvoteNotClicked
        }
        aria-label="downvote button"
      ></button>
    </div>
  );
};

export default Vote;
