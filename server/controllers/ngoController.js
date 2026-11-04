import NGO from '../models/NGO.js'

export const getNGOByPincode = async (
  req,
  res
) => {
  try {
    const ngos = await NGO.find({
      pincode: req.params.pincode,
    })

    res.status(200).json(ngos)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}