import express from 'express'

import protect from '../middlewares/authMiddleware.js'

import {
  addComment,
  getComments,
} from '../controllers/commentController.js'

const router = express.Router()

router.post(
  '/:id',
  protect,
  addComment
)

router.get(
  '/:id',
  getComments
)

export default router