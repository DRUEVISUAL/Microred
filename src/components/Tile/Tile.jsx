import React, { useEffect } from "react";
import Top from "./Top";
import Content from "./Content";
import Bottom from "./Bottom";

const Tile = ({ post }) => {
  const fetchIcon = async () => {
    const data = await fetch(
      `https://www.reddit.com/${post.subreddit_name_prefixed}/about.json`
    );
    const response = await data.json();
    const json = await response.data;
    const icon = await json.community_icon.match(/.+?(?=\?)/);
  };

  return (
    <article
      className="h-max-content mx-auto mb-12 flex max-h-[90vh] min-h-[480px] w-full min-w-[320px] max-w-[700px] flex-col items-center justify-between rounded-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-20 p-2 xs:aspect-[1/1.5] lg:mb-16"
      data-cy="tile"
    >
      <Top
        title={post.title}
        subreddit={post.subreddit_name_prefixed}
        created={post.created_utc}
        author={post.author}
      />
      <Content
        height={post.isVideo ? post.media.reddit_video.height : null}
        width={post.isVideo ? post.media.reddit_video.width : null}
        isVideo={post.isVideo}
        video={post.isVideo ? post.media.reddit_video.scrubber_media_url : null}
        image={!post.isVideo ? post.url : null}
      />
      <Bottom score={post.score} />
    </article>
  );
};

export default Tile;
