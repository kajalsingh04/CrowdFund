import mongoose from 'mongoose'

const donationSchema = new mongoose.Schema(
  {
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campaign',
    },

    amount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      default: 'success',
    },
  },
  {
    timestamps: true,
  }
)

const Donation = mongoose.model(
  'Donation',
  donationSchema
)

export default Donation