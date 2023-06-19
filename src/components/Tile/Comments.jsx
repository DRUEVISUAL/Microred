import React, { useEffect, useState } from "react";
import Content from "./Content";

////////////////////////////////////////////////////////////////////////////////

const Comments = ({ subreddit, id }) => {
  const [comments, setComments] = useState(null);

  ////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    async function fetchComments() {
      const data = await fetch(
        `https://www.reddit.com/${subreddit}/comments/${id}.json`
      );
      const response = await data.json();
      setComments(response[1] ? response[1].data.children : null);
    }
    fetchComments();
  }, []);

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="my-2 h-screen w-full overflow-hidden overflow-y-scroll rounded-md border-1 border-gray_border border-opacity-[14%] bg-black bg-opacity-20 p-2 text-text_color shadow-md">
      {comments?.map((comment) => {
        return (
          <div
            className="mb-4 rounded-md bg-basecolor bg-opacity-20"
            key={comment.data.id}
          >
            <Content
              text={comment.data.body_html}
              author={comment.data.author}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
