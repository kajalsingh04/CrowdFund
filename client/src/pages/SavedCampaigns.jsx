import {
  useEffect,
  useState,
} from 'react'

import Navbar from '../components/navbar/Navbar'

import api from '../services/api'

import { useAuth } from '../context/AuthContext'

function SavedCampaigns() {
  const { user } = useAuth()

  const [bookmarks, setBookmarks] =
    useState([])

  useEffect(() => {
    fetchBookmarks()
  }, [])

  const fetchBookmarks = async () => {
    try {
      const { data } = await api.get(
        '/bookmark',
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )

      setBookmarks(data)
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
            Saved Campaigns
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {bookmarks.map(
              (bookmark) => (
                <div
                  key={
                    bookmark._id
                  }
                  className='bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl'
                >
                  <img
                    src={`http://localhost:5000/${bookmark.campaign.image}`}
                    alt='campaign'
                    className='w-full h-60 object-cover'
                  />

                  <div className='p-6'>
                    <h2 className='text-3xl font-bold dark:text-white'>
                      {
                        bookmark
                          .campaign
                          .title
                      }
                    </h2>
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

export default SavedCampaigns