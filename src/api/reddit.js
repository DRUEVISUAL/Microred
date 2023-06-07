export const Reddit = {
  async fetchFeedPosts(feed) {
    const data = await fetch(`https://www.reddit.com/r/all/${feed}.json`);
    const response = await data.json();
    return response;
  },
};
