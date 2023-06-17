const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const helper = require("../utils/test_helper");
const Blog = require("../models/blog");
beforeEach(async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(helper.initialBlogs);
});

describe("Already some blogs saved", () => {
  test("Returned blogs", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("blogs have id property named id instead of _id", async () => {
    const response = await api.get("/api/blogs");

    const ids = response.body.map((blog) => blog.id);

    for (const id of ids) {
      expect(id).toBeDefined();
    }
  });
});

describe("create a new blog", () => {
  test("Blog with valid data", async () => {
    const newBlog = {
      title: "abcd",
      author: "wxyz",
      url: "https://www.abcd.com",
      likes: 1,
    };

    await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const lastBlogs = await helper.blogsOfDatabase();
    expect(lastBlogs).toHaveLength(helper.initialBlogs.length + 1);

    const titles = lastBlogs.map((blog) => blog.title);
    expect(titles).toContain("abcd");
  });

  test("likes property to be 0 for new blog", async () => {
    const newBlog = {
      title: "abcdefgh",
      author: "vuwxyz",
      url: "https://www.abcdefgh.com",
    };

    await api 
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const lastBlogs = await helper.blogsOfDatabase();
    expect(lastBlogs).toHaveLength(helper.initialBlogs.length + 1);
    expect(lastBlogs[lastBlogs.length - 1].likes).toBe(0);
  });
});

describe("Delete a blog", () => {
  test("status 204 if id is valid", async () => {
    const initialBlogs = await helper.blogsOfDatabase();
    const blogToDelete = initialBlogs[0];

    await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

    const lastBlogs = await helper.blogsOfDatabase();
    expect(lastBlogs).toHaveLength(helper.initialBlogs.length - 1);

    const titles = lastBlogs.map((r) => r.title);
    expect(titles).not.toContain(blogToDelete.title);
  });
});

describe("Update a blog", () => {
  test("status 200 if id is valid", async () => {
    const initialBlogs = await helper.blogsOfDatabase();
    const blogToUpdate = initialBlogs[0];

    await api
      .put(`/api/blogs/${blogToUpdate.id}`)
      .send({ likes: 10 })
      .expect(200);

    const lastBlogs = await helper.blogsOfDatabase();
    const updatedBlog = lastBlogs[0];
    expect(lastBlogs).toHaveLength(helper.initialBlogs.length);
    expect(updatedBlog.likes).toBe(10);
  });
});

afterAll(() => {
  mongoose.connection.close();
});