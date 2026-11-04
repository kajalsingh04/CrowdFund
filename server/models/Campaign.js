import mongoose from 'mongoose'

const campaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    story: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    targetAmount: {
      type: Number,
      required: true,
    },

    raisedAmount: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      required: true,
    },

    validIdProof: {
      type: String,
      required: true,
    },

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    ngo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NGO',
    },

    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
)

const Campaign = mongoose.model(
  'Campaign',
  campaignSchema
)

export default Campaign