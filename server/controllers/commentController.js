import Comment from '../models/Comment.js'

export const addComment =
  async (req, res) => {
    try {
      const comment =
        await Comment.create({
          user: req.user._id,
          campaign: req.params.id,
          text: req.body.text,
        })

      const populatedComment =
        await Comment.findById(
          comment._id
        ).populate('user', 'name')

      res.status(201).json(
        populatedComment
      )
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }

export const getComments =
  async (req, res) => {
    try {
      const comments =
        await Comment.find({
          campaign: req.params.id,
        })
          .populate('user', 'name')
          .sort({
            createdAt: -1,
          })

      res.status(200).json(
        comments
      )
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }