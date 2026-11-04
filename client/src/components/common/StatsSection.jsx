function StatsSection() {
  return (
    <div className='bg-blue-700 py-24 text-white'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center'>
        <div>
          <h1 className='text-6xl font-bold'>
            10K+
          </h1>

          <p className='text-2xl mt-4'>
            Donors
          </p>
        </div>

        <div>
          <h1 className='text-6xl font-bold'>
            ₹50L+
          </h1>

          <p className='text-2xl mt-4'>
            Raised
          </p>
        </div>

        <div>
          <h1 className='text-6xl font-bold'>
            500+
          </h1>

          <p className='text-2xl mt-4'>
            Campaigns
          </p>
        </div>

        <div>
          <h1 className='text-6xl font-bold'>
            100+
          </h1>

          <p className='text-2xl mt-4'>
            NGOs
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsSection