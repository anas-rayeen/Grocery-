import React from 'react'

const Banner = ({title, bgImage}) => {
  return (
    <div className=' h-[50vh] flex justify-center items-center mt-25 bg-center bg-cover relative'
    style={{backgroundImage: `url(${bgImage})`}}>
        <h2 className='text-5xl text-zinc-800  bg-white p-5 font-bold rounded-xl z-10 '>{title}</h2>
        <div className='bg-black/30 absolute inset-0'>

        </div>
      
    </div>
  )
}

export default Banner
