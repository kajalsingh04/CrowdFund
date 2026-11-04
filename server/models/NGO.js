import mongoose from 'mongoose'

const ngoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    pincode: {
      type: String,
      required: true,
    },

    verified: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const NGO = mongoose.model('NGO', ngoSchema)

export default NGO