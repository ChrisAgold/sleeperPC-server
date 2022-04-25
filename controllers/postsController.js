import Post from '../models/Post.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/index.js'

const createPost = async (req, res) => {
    const {title,description} = req.body

    if(!title || !description) {
        throw new BadRequestError('Please provide all values')
    }
    req.body.createdBy = req.user.userId
    const post = await Post.create(req.body)
    res.status(StatusCodes.CREATED).json({ post })
}

const getAllPosts = async (req, res) => {
    res.send('get all posts')
}

const updatePost = async (req, res) => {
    res.send('update Post')
}

const deletePost = async (req, res) => {
    res.send('delete Post')
}

const showStats = async (req, res) => {
    res.send('show stats')
}

export { createPost, deletePost, getAllPosts, updatePost, showStats }
