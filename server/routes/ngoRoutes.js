import express from 'express'

import {
  getNGOByPincode,
} from '../controllers/ngoController.js'

const router = express.Router()

router.get('/:pincode', getNGOByPincode)

export default router