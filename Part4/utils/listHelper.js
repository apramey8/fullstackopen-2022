const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.length === 0 ? 0 : blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;

  const mostLiked = blogs.reduce((previous, current) => {
    return previous.likes > current.likes ? previous : current;
  });

  return {
    title: mostLiked.title,
    author: mostLiked.author,
    likes: mostLiked.likes,
  };
};

const lodash = require("lodash");

const mostBlogs = (blogs) => {
  const blogCount = lodash.countBy(blogs, "author");

  const maxAuthor = Object.keys(blogCount).reduce((a, b) => {
    return blogCount[a] > blogCount[b] ? a : b;
  });

  return {
    author: maxAuthor,
    blogs: blogCount[maxAuthor],
  };
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs };
