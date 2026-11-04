import express from 'express'

import protect from '../middlewares/authMiddleware.js'

import {
  addBookmark,
  getBookmarks,
} from '../controllers/bookmarkController.js'

const router = express.Router()

router.post(
  '/:id',
  protect,
  addBookmark
)

router.get(
  '/',
  protect,
  getBookmarks
)

export default router