import {
  Oval,
} from 'react-loader-spinner'

function Loader() {
  return (
    <div className='flex justify-center items-center py-20'>
      <Oval
        height={80}
        width={80}
        color='#1d4ed8'
        visible={true}
      />
    </div>
  )
}

export default Loader