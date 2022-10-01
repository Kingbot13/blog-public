export const data = (() => {
  const server = "https://polar-brook-09608.herokuapp.com";
  const storage = localStorage;

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
      const post = await res.json();
      return post;
    } catch(err) {
      console.error(err);
    }
  }

  const _formatData = async (url, form) => {
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    const formDataJson = JSON.stringify(formDataObj);
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${storage.getItem('token')}`
      },
      body: formDataJson,
      method: 'post'
    });
    const data = await res.json();
    // check if route is log in route and save token in localStorage
    if (url.split("/").find((item) => item === "log-in")) {
      storage.setItem("token", data.token);
    }
    if (!data) {
      console.log(data.message);
    }
    return data;
  }

  const logIn = async () => {
    const form = document.getElementById('log-in-form');
    await _formatData(`${server}/api/log-in`, form);
  }

  const signUp = async () => {
    const form = document.getElementById('sign-up-form');
    await _formatData(`${server}/api/signUp`, form);
  }

  const addComment = async (id) => {
    const form = document.getElementById('comment-form');
    await _formatData(`${server}/api/posts/${id}/create-comment`, form);
  }

  return { getPosts, getSinglePost, logIn, signUp, addComment };
})();
