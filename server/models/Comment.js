import mongoose from 'mongoose'

const commentSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },

      campaign: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: 'Campaign',
      },

      text: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )

const Comment = mongoose.model(
  'Comment',
  commentSchema
)

export default Comment