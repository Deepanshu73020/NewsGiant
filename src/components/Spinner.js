import React from 'react'
import loading from '../components/loading.gif'
const Spinner =()=>{

    return (
      <div className='text-center'>
        <img src={loading} alt="Loading..." />
      </div>
    )
}

export default Spinner