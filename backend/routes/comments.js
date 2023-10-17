import express from 'express'
import {
    getCommentsForPost,
    addCommentsToPost,
    updateComment

} from '../controllers/comments.js'

const router = express.Router();

router.get("/:id", getCommentsForPost);
router.post("/:id", addCommentsToPost);
router.put("/:id", updateComment);


export default router;