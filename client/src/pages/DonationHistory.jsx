import {
  useEffect,
  useState,
} from 'react'

import Navbar from '../components/navbar/Navbar'

import api from '../services/api'

import { useAuth } from '../context/AuthContext'

function DonationHistory() {
  const { user } = useAuth()

  const [donations, setDonations] =
    useState([])

  useEffect(() => {
    fetchDonations()
  }, [])

  const fetchDonations =
    async () => {
      try {
        const { data } =
          await api.get(
            '/donation/history',
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          )

        setDonations(data)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <>
      <Navbar />

      <div className='min-h-screen bg-gray-100 dark:bg-slate-950 py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-5xl font-bold mb-12 dark:text-white'>
            Donation History
          </h1>

          <div className='space-y-8'>
            {donations.map(
              (donation) => (
                <div
                  key={
                    donation._id
                  }
                  className='bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl flex items-center gap-6'
                >
                  <img
                    src={`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/${donation.campaign.image}`}
                    alt='campaign'
                    className='w-32 h-32 rounded-2xl object-cover'
                  />

                  <div>
                    <h2 className='text-3xl font-bold dark:text-white'>
                      {
                        donation
                          .campaign
                          .title
                      }
                    </h2>

                    <p className='mt-3 text-xl text-green-600'>
                      Donated ₹
                      {
                        donation.amount
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default DonationHistory