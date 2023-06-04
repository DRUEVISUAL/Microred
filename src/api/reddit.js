export const Reddit = {
  async getBestPosts() {
    const data = await fetch('https://www.reddit.com/r/all/best.json');
    const response = await data.json();
    return response.data.children;
  }
}