import React, { useEffect, useState } from "react";
import { decode } from "html-entities";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

////////////////////////////////////////////////////////////////////////////////

const Content = ({ image, video, text, author, thumbnail, domain, thumbnailHeight, commentId }) => {
  const [textContent, setTextContent] = useState("");
  const [icon, setIcon] = useState("");

  //Image element for the post
  const imageElement = (
    <img
      src={image}
      alt=""
      className="mx-auto h-max max-h-[31rem] rounded-md object-contain"
    />
  );

  // Video element for the post
  const videoElement = (
    <ReactPlayer
      controls
      className={"mx-auto max-h-[32rem] max-w-fit rounded-md object-contain"}
      url={video}
    />
  );

  const hypertextElement = (
    <a className="flex items-center justify-start gap-4" href={image}>
      <img
        src={thumbnail}
        alt=""
        style={{ height: `${thumbnailHeight}px` }}
        className="rounded-md"
      />
      <p className="h-8 w-8 text-xl font-medium hover:underline">{domain}</p>
    </a>
  );

  ////////////////////////////////////////////////////////////////////////////////

  function postLogic() {
    return text
      ? textContent
      : video
      ? videoElement
      : image.match("i.redd.it")
      ? imageElement
      : hypertextElement;
  }

  function commentLogic() {
    return text ? textContent : video ? videoElement : imageElement;
  }

  // Parsing rich text for post
  function parsedTextElement() {
    if (!text) {
      return;
    }

    // Shortening if its longer than 600 characters and the remainder is bigger than 100
    if (text.length > 600 && text.length - 600 > 100) {
      setTextContent(
        <>
          {parse(decode(text).slice(0, 600).concat("..."))}
          <button
            className="w-full text-right font-bold hover:underline"
            onClick={() =>
              setTextContent(
                <>
                  {parse(decode(text))} {imageElement}
                </>
              )
            }
          >
            Read more
          </button>
        </>
      );
    } else {
      setTextContent(
        <>
          {parse(decode(text))} {imageElement}
        </>
      );
    }
  }

  useEffect(() => {
    parsedTextElement();

    // Fetching user icon for comments
    async function fetchUserIcon() {
      if (author) {
        const data = await fetch(
          `https://www.reddit.com/user/${author}/about.json`
        );
        const response = await data.json();
        const iconImg = await response.data;
        await setIcon({
          image1: iconImg.icon_img,
          image2: iconImg.snoovatar_img,
        });
      }
    }

    fetchUserIcon();
  }, []);

  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="my-2 h-max w-full overflow-hidden rounded-md border-1 border-gray_border border-opacity-[14%] bg-black bg-opacity-[15%] p-2 text-text_color text-opacity-90 shadow-md">
      {commentId ? (
        <Link to={`https://www.reddit.com/user/${author}`}>
          <div className="flex h-max w-full items-center justify-start gap-2 text-center">
            <img
              src={!icon.image2 ? icon.image1 : icon.image2}
              alt={`${author}'s profile picture`}
              className="mb-2 h-6 w-6 rounded-full bg-white object-contain"
            />
            <h2 className="text-md mb-1 font-bold hover:underline">{author}</h2>
          </div>
        </Link>
      ) : null}
      {commentId ? commentLogic() : postLogic()}
    </div>
  );
};

export default Content;
