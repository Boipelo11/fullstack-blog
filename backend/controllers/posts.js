import { db } from "../database.js";
import jwt from "jsonwebtoken";


//HTTP request to retrieve the bloglist on the interface
export const getPosts = (req, res) => {
  const query = req.query.category
    ? "SELECT * FROM posts WHERE category=?"
    : "SELECT * FROM posts";

  db.query(query, [req.query.category], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};


//HTTP request for retrieving single posts by its id
export const getPost = (req, res) => {
  const query =
    "SELECT p.id, `username`, `title`, `description`, p.cover, u.author AS userImg, `category`,`createdAt` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);//returns 500 response with error if it cannot be found

    return res.status(200).json(data[0]); //sends 200(OK) response when it loads perfectly with no error
  });
};

//HTTP request for creatig a new post
export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const query =
      "INSERT INTO posts(`title`, `description`, `cover`, `category`, `createdAt`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.description,
      req.body.cover,
      req.body.category,
      req.body.createdAt,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};
//HTTP request to delete existing post
export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  });
};

//HTTP request to edit or update an existing post
export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const query =
      "UPDATE posts SET `title`=?,`description`=?,`cover`=?,`category`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.description, req.body.cover, req.body.category];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
  });
};