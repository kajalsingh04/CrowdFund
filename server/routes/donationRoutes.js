import express from 'express'

import protect from '../middlewares/authMiddleware.js'

import { donateToCampaign,  getDonationHistory,} from '../controllers/donationController.js'

const router = express.Router()

router.post(
  '/:id',
  protect,
  donateToCampaign
)
router.get(
  '/history',
  protect,
  getDonationHistory
)

export default router