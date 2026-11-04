// old code 
// import express from 'express'
// const router = express.Router()
// import { createCampaign, getApprovedCampaigns, getSingleCampaign, getUserCampaigns, deleteCampaign, updateCampaign,} from '../controllers/campaignController.js'
// import protect from '../middlewares/authMiddleware.js'
// import upload from '../middlewares/uploadMiddleware.js'

// router.post(
//   '/',
//   protect,
//   upload.fields([
//     {
//       name: 'image',
//       maxCount: 1,
//     },
//     {
//       name: 'validIdProof',
//       maxCount: 1,
//     },
//   ]),
//   createCampaign
// )

// router.get('/approved', getApprovedCampaigns)
// router.get('/:id', getSingleCampaign)
// router.get('/my-campaigns',protect, getUserCampaigns )
// router.put('/:id', protect, updateCampaign )
// router.delete('/:id', protect, deleteCampaign )

// export default router

//new code

import express from 'express'

const router = express.Router()

import protect from '../middlewares/authMiddleware.js'

import upload from '../middlewares/uploadMiddleware.js'

import {
  createCampaign,
  getApprovedCampaigns,
  getSingleCampaign,
  getUserCampaigns,
  deleteCampaign,
  updateCampaign,
} from '../controllers/campaignController.js'

router.get(
  '/approved',
  getApprovedCampaigns
)

router.get(
  '/my-campaigns',
  protect,
  getUserCampaigns
)

router.get(
  '/:id',
  getSingleCampaign
)

router.post(
  '/',
  protect,
  upload.fields([
    {
      name: 'image',
      maxCount: 1,
    },

    {
      name: 'validIdProof',
      maxCount: 1,
    },
  ]),
  createCampaign
)

router.put(
  '/:id',
  protect,
  upload.fields([
    {
      name: 'image',
      maxCount: 1,
    },

    {
      name: 'validIdProof',
      maxCount: 1,
    },
  ]),
  updateCampaign
)

router.delete(
  '/:id',
  protect,
  deleteCampaign
)

export default router