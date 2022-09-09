import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1>Join Our Defi Community</h1>
      <div className='py-4'>
        <input className='p-3 rounded-3xl mr-4' type="email" name="mailBox" id="mailBox" />
        <button className='my-2'>Sign Up</button>
      </div>

      <div className='flex items-center justify-center py-2'>
        <input type="checkbox" name="chk" id="chk" className='mr-2'/>
        <p>yes,I agree to receive email.communication from Defi</p>
      </div>
    </div>
  )
}

export default Subscribe
