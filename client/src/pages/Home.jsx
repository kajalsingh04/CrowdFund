import { useEffect, useState, } from 'react'

import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/common/HeroSection'
import CampaignCard from '../components/campaign/CampaignCard'
import StoriesSection from '../components/common/StoriesSection'
import Footer from '../components/footer/Footer'
import StatsSection from '../components/common/StatsSection'
import TopDonors from '../components/common/TopDonors'

import api from '../services/api'

function Home() {
  const [campaigns, setCampaigns] =
    useState([])

  useEffect(() => {
    fetchCampaigns()
  }, [])

  const fetchCampaigns = async () => {
    try {
      const { data } = await api.get(
        '/campaign/approved'
      )

      setCampaigns(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />

      <HeroSection />

      {/* <div className='max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-items-center gap-6'>
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign._id}
            campaign={{
              id: campaign._id,
              title: campaign.title,
              raised:
                campaign.raisedAmount,
              goal:
                campaign.targetAmount,
              image: `http://localhost:5000/${campaign.image}`,
            }}
          />
        ))}
      </div> */}
      {/* <StatsSection /> */}
       <StoriesSection />
       <TopDonors />
      <Footer />
    </>
  )
}

export default Home