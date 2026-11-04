import Navbar from '../components/navbar/Navbar'

function NGODashboard() {
  return (
    <>
      <Navbar />

      <div className='min-h-screen bg-gray-100 dark:bg-slate-950 py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-6xl font-bold dark:text-white mb-12'>
            NGO Dashboard
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl'>
              <h2 className='text-5xl font-bold text-blue-700'>
                12
              </h2>

              <p className='mt-4 text-2xl dark:text-white'>
                Verified Campaigns
              </p>
            </div>

            <div className='bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl'>
              <h2 className='text-5xl font-bold text-green-600'>
                ₹5L+
              </h2>

              <p className='mt-4 text-2xl dark:text-white'>
                Funds Raised
              </p>
            </div>

            <div className='bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl'>
              <h2 className='text-5xl font-bold text-purple-600'>
                300+
              </h2>

              <p className='mt-4 text-2xl dark:text-white'>
                Donors
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NGODashboard