import Donation from '../models/Donation.js'
import Campaign from '../models/Campaign.js'

import { io } from '../server.js'

export const donateToCampaign =
  async (req, res) => {
    try {
      const { amount } = req.body

      const campaign =
        await Campaign.findById(
          req.params.id
        )

      if (!campaign) {
        return res.status(404).json({
          message: 'Campaign not found',
        })
      }

      const donation =
        await Donation.create({
          donor: req.user._id,
          campaign: campaign._id,
          amount,
        })

      campaign.raisedAmount += Number(
        amount
      )

      await campaign.save()

      io.emit('donationUpdated', {
        campaignId: campaign._id,
        raisedAmount:
          campaign.raisedAmount,
      })

      res.status(201).json({
        message:
          'Donation successful',
        donation,
      })
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }

  export const getDonationHistory =
  async (req, res) => {
    try {
      const donations =
        await Donation.find({
          donor: req.user._id,
        })
          .populate(
            'campaign',
            'title image'
          )
          .sort({
            createdAt: -1,
          })

      res.status(200).json(
        donations
      )
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }