function EmptyState({
  message,
}) {
  return (
    <div className='text-center py-32'>
      <h1 className='text-5xl font-bold text-gray-400'>
        {message}
      </h1>
    </div>
  )
}

export default EmptyState