export const data = (() => {
  const server = "https://polar-brook-09608.herokuapp.com";

  // get posts
  const getPosts = async () => {
    try {
      const res = await fetch(`${server}/api/posts`);
      const posts = await res.json();
      return posts;
    } catch (err) {
      console.error(err);
    }
  };
  // get single post
  const getSinglePost = async (id) => {
    try {
      const res = await fetch(`${server}/api/posts/${id}`);
      const post = res.json();
      return post;
    } catch(err) {
      console.error(err);
    }
  }
  return { getPosts, getSinglePost };
})();
