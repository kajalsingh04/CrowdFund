import Campaign from '../models/Campaign.js'

export const getPendingCampaigns =
  async (req, res) => {
    try {

      if (req.user.role !== 'admin') {
        return res.status(401).json({
          message:
            'Admin access only',
        })
      }

      const campaigns =
        await Campaign.find({
          status: 'pending',
        })
          .populate('creator')
          .populate('ngo')

      res.status(200).json(
        campaigns
      )
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }

export const approveCampaign =
  async (req, res) => {
    try {

      if (req.user.role !== 'admin') {
        return res.status(401).json({
          message:
            'Admin access only',
        })
      }

      const campaign =
        await Campaign.findById(
          req.params.id
        )

      campaign.status =
        'approved'

      await campaign.save()

      res.status(200).json({
        message:
          'Campaign approved',
      })
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }