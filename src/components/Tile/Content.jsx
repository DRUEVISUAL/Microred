import React, { useEffect, useState } from "react";
import { decode } from "html-entities";
import parse from "html-react-parser";
import ReactPlayer from "react-player";

const Content = ({ image, video, text, author }) => {
  const [textContent, setTextContent] = useState("");

  const imageElement = (
    <img
      src={image}
      alt=""
      className="mx-auto max-h-96 rounded-md object-contain"
    />
  );

  console.log(video)

  const videoElement = (
    <video controls className="mx-auto rounded-md max-h-96">
      <source src={video}/>
    </video>
  )

  function parsedTextElement() {
    if (!text) {
      return;
    }

    if (text.length > 600) {
      setTextContent(
        <>
          {parse(decode(text).slice(0, 600).concat("..."))}
          <button
            className="w-full text-right font-bold"
            onClick={() => setTextContent(parse(decode(text)))}
          >
            Read more
          </button>
        </>
      );
    } else {
      setTextContent(parse(decode(text)));
    }
  }

  useEffect(() => {
    parsedTextElement();
  }, []);

  return (
    <div className="my-2 h-max w-full overflow-hidden rounded-md border-1 border-gray_border border-opacity-[14%] bg-black bg-opacity-[15%] p-2 text-text_color text-opacity-90 shadow-md">
      {author ? <h2 className="text-md mb-1 font-bold">{author}</h2> : null}
      {text ? textContent : video ? videoElement : imageElement}
    </div>
  );
};

export default Content;

{
  /* <button
            className="w-ful text-right font-bold hover:underline"
            onClick={parsedTextFull}
          >
            Read more
          </button> */
}
