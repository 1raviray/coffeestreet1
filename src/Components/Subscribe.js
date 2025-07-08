import React from 'react'

const Subscribe = () => {
  return (
    <div className=' container-fluid bg1'>
        <div className=' d-flex align-items-center justify-content-end pe-5 me-5' style={{height:'50vh'}}>
        <div className=' text-center'>
            <h2 className=' fw-bold font-roboto text-white'>Subscribe to get 50% discount</h2>
            <form className='mt-4 position-relative'>
                <input type='email' className=' form' placeholder='Email address' />
                <input type="submit" className='form-btn' value='order now'/>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Subscribe