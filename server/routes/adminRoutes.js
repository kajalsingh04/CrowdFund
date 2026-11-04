import express from 'express'

import protect from '../middlewares/authMiddleware.js'

import {
  getPendingCampaigns,
  approveCampaign,
} from '../controllers/adminController.js'

const router = express.Router()

router.get(
  '/pending-campaigns',
  protect,
  getPendingCampaigns
)

router.put(
  '/approve/:id',
  protect,
  approveCampaign
)

export default router