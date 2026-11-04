import Campaign from '../models/Campaign.js'

//old
// export const createCampaign = async (
//   req,
//   res
// ) => {
//   try {
//     const {
//       title,
//       story,
//       category,
//       targetAmount,
//       ngo,
//     } = req.body

//     const campaign = await Campaign.create({
//       title,
//       story,
//       category,
//       targetAmount,
//       ngo,
//       creator: req.user._id,
//       image: req.files.image[0].path,
//       validIdProof:
//         req.files.validIdProof[0].path,
//     })

//     res.status(201).json(campaign)
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     })
//   }
// }

// new 
export const createCampaign =
  async (req, res) => {
    try {
      const {
        title,
        story,
        category,
        targetAmount,
        ngo,
      } = req.body

      const image =
        req.files['image']
          ? req.files['image'][0]
            .path
          : ''

      const validIdProof =
        req.files[
          'validIdProof'
        ]
          ? req.files[
            'validIdProof'
          ][0].path
          : ''

      const campaign =
        await Campaign.create({
          title,
          story,
          category,
          targetAmount,
          ngo,

          creator:
            req.user._id,

          image,

          validIdProof,

          raisedAmount: 0,

          status: 'approved',
        })

      res.status(201).json(
        campaign
      )
    } catch (error) {
      console.log(error)

      res.status(500).json({
        message:
          error.message,
      })
    }
  }

export const getApprovedCampaigns =
  async (req, res) => {
    try {
      const campaigns =
        await Campaign.find({
          status: 'approved',
        })
          .populate('creator', 'name')
          .populate('ngo', 'name')

      res.status(200).json(campaigns)
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }
//getsingle

export const getSingleCampaign =
  async (req, res) => {
    try {
      const campaign =
        await Campaign.findById(
          req.params.id
        )
          .populate('creator', 'name email')
          .populate('ngo', 'name')

      res.status(200).json(campaign)
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }
//old 
// export const getUserCampaigns =
//   async (req, res) => {
//     try {
//       const campaigns =
//         await Campaign.find({
//           creator: req.user._id,
//         })

//       res.status(200).json(campaigns)
//     } catch (error) {
//       res.status(500).json({
//         message: error.message,
//       })
//     }
//   }
//new 
export const getUserCampaigns =
  async (req, res) => {
    try {
      const campaigns =
        await Campaign.find({
          creator: req.user._id,
        }).sort({
          createdAt: -1,
        })

      res.status(200).json(
        campaigns
      )
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }

export const deleteCampaign =
  async (req, res) => {
    try {
      const campaign =
        await Campaign.findById(
          req.params.id
        )

      if (!campaign) {
        return res.status(404).json({
          message:
            'Campaign not found',
        })
      }

      if (
        campaign.creator.toString() !==
        req.user._id.toString()
      ) {
        return res.status(401).json({
          message:
            'Not authorized',
        })
      }

      await campaign.deleteOne()

      res.status(200).json({
        message:
          'Campaign deleted',
      })
    } catch (error) {
      res.status(500).json({
        message: error.message,
      })
    }
  }

export const updateCampaign =
  async (req, res) => {
    try {
      const campaign =
        await Campaign.findById(
          req.params.id
        )

      if (!campaign) {
        return res.status(404).json({
          message:
            'Campaign not found',
        })
      }

      if (
        campaign.creator.toString() !==
        req.user._id.toString()
      ) {
        return res.status(401).json({
          message:
            'Not authorized',
        })
      }

      campaign.title =
        req.body.title ||
        campaign.title

      campaign.story =
        req.body.story ||
        campaign.story

      campaign.category =
        req.body.category ||
        campaign.category

      campaign.targetAmount =
        req.body.targetAmount ||
        campaign.targetAmount

      campaign.ngo =
        req.body.ngo ||
        campaign.ngo
      // IMAGE UPDATE
      if (
        req.files &&
        req.files['image']
      ) {
        campaign.image =
          req.files['image'][0]
            .path
      }
      // ID PROOF UPDATE
      if (
        req.files &&
        req.files[
        'validIdProof'
        ]
      ) {
        campaign.validIdProof =
          req.files[
            'validIdProof'
          ][0].path
      }
      const updatedCampaign =
        await campaign.save()

      res.status(200).json(
        updatedCampaign
      )
    } catch (error) {
      console.log(error)

      res.status(500).json({
        message:
          error.message,
      })
    }
  }