import React, { useEffect, useState } from "react";
import Top from "./Top";
import Content from "./Content";
import Bottom from "./Bottom";
import Comments from "./Comments";

const Tile = ({ post }) => {
  // Local state for icons to be saved after fetching
  const [icon, setIcon] = useState();
  const [showComments, setShowComments] = useState(false);

  // Fetching subreddit icon
  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const data = await fetch(
          `https://www.reddit.com/${post.subreddit_name_prefixed}/about.json`
        );
        const response = await data.json();
        const json = await response.data;
        const extractIcon = await json.community_icon.match(/.+?(?=\?)/);

        if (extractIcon) {
          setIcon(extractIcon);
        } else {
          setIcon(json.icon_img);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchIcon();
  }, []);

  function handleClickShowComments() {
    setShowComments(!showComments);
  }
  //
  return (
    <article
      className="mx-auto mb-12 flex h-min max-h-[90vh] w-full min-w-[320px] max-w-[700px] flex-col items-center justify-start rounded-md border-1 border-gray_border border-opacity-[14%] bg-basecolor bg-opacity-20 p-2 backdrop-blur-xl backdrop-brightness-50 lg:mb-16"
      data-cy="tile"
    >
      <Top
        title={post.title}
        subreddit={post.subreddit_name_prefixed}
        created={post.created}
        author={post.author}
        icon={icon}
        permalink={post.permalink}
      />
      {showComments ? (
        <Comments subreddit={post.subreddit_name_prefixed} id={post.id} />
      ) : (
        <Content
          videoHeight={post.isVideo ? post.media.reddit_video.height : null}
          videoWidth={post.isVideo ? post.media.reddit_video.width : null}
          isVideo={post.isVideo}
          video={post.media ? post.media.reddit_video.fallback_url : null}
          text={post.selftext_html}
          image={!post.isVideo ? post.url : null}
        />
      )}
      <Bottom
        score={post.score}
        comments={post.num_comments}
        toggleShowComments={handleClickShowComments}
      />
    </article>
  );
};

export default Tile;
