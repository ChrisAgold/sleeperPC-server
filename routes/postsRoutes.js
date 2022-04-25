import express from 'express'
const router = express.Router()

import {
    createPost,
    deletePost,
    getAllPosts,
    updatePost,
    showStats,
} from '../controllers/postsController.js'

router.route('/').post(createPost).get(getAllPosts)
// remember about :id
router.route('/stats').get(showStats)
router.route('/:id').delete(deletePost).patch(updatePost)

export default router
