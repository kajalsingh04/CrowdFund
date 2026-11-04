import {
  useEffect,
  useState,
} from 'react'

import Navbar from '../components/navbar/Navbar'

import api from '../services/api'

import { useAuth } from '../context/AuthContext'

function AdminPanel() {
  const { user } = useAuth()

  const [campaigns, setCampaigns] =
    useState([])

  useEffect(() => {
    fetchPendingCampaigns()
  }, [])

  const fetchPendingCampaigns =
    async () => {
      try {
        const { data } =
          await api.get(
            '/admin/pending-campaigns',
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          )

        setCampaigns(data)
      } catch (error) {
        console.log(error)
      }
    }

  const approveCampaign =
    async (id) => {
      try {
        await api.put(
          `/admin/approve/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        )

        fetchPendingCampaigns()
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <>
      <Navbar />

      <div className='min-h-screen bg-gray-100 dark:bg-slate-950 py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-5xl font-bold mb-10 dark:text-white'>
            Admin Panel
          </h1>

          <div className='space-y-8'>
            {campaigns.map(
              (campaign) => (
                <div
                  key={campaign._id}
                  className='bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl'
                >
                  <div className='flex justify-between items-center'>
                    <div>
                      <h2 className='text-3xl font-bold dark:text-white'>
                        {
                          campaign.title
                        }
                      </h2>

                      <p className='mt-2 dark:text-gray-300'>
                        NGO:
                        {' '}
                        {
                          campaign
                            .ngo
                            ?.name
                        }
                      </p>

                      <p className='mt-2 dark:text-gray-300'>
                        Owner:
                        {' '}
                        {
                          campaign
                            .creator
                            ?.name
                        }
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        approveCampaign(
                          campaign._id
                        )
                      }
                      className='bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl'
                    >
                      Approve
                    </button>
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

export default AdminPanel