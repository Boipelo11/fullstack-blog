import {db} from '../database.js'
import jwt from 'jsonwebtoken'

// Function to get comments for a specific post
export const getCommentsForPost = (req, res) => {
    const postId = req.params.id;
    const query = "SELECT * FROM comments WHERE post_id = ?";
    db.query(q, [postId], (err, comments) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(comments);
    });
  };
  
  // Function to add a comment to a post
  export const addCommentToPost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const postId = req.params.id;
      const { text } = req.body;
  
      const query = "INSERT INTO comments (post_id, user_id, text) VALUES (?, ?, ?)";
      const values = [postId, userInfo.id, text];
  
      db.query(query, values, (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json("Comment added successfully.");
      });
    });
  };
  
  // Function to update a comment
  export const updateComment = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
    const commentId = req.params.commentId;
    const { text } = req.body;
  
    const q = "UPDATE comments SET text = ? WHERE comment_id = ?";
    db.query(q, [text, commentId], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json("Comment updated successfully.");
    });
  };
  

  
 
  