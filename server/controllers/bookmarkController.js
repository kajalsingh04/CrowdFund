import Bookmark from '../models/Bookmark.js'

export const addBookmark =
  async (req, res) => {
    try {
      const exists =
        await Bookmark.findOne({
          user: req.user._id,
          campaign: req.params.id,
        })

      if (exists) {
        return res.status(400).json({
          message:
            'Already saved',
        })
      }

      const bookmark =
        await Bookmark.create({
          user: req.user._id,
          campaign: req.params.id,
        })

      res.status(201).json(
        bookmark
      )
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }

export const getBookmarks =
  async (req, res) => {
    try {
      const bookmarks =
        await Bookmark.find({
          user: req.user._id,
        }).populate('campaign')

      res.status(200).json(
        bookmarks
      )
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }