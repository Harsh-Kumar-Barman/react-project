import React from 'react'

const CardSolo = (prop) => {
  return (
    <>
      <div className='hover:scale-105 duration-150 cursor-pointer overflow-hidden w-full'>
        <div className="image">
          <img className='rounded-sm duration-150 cursor-pointer overflow-hidden w-full' src={`https://image.tmdb.org/t/p/w500${prop.image}`} alt="" />
        </div>
        <div className="content">
          <h1 className='text-white font-bold sm:text-[1.8vw] text-[4vw]'>{prop.title}</h1>
          <p className='text-white sm:text-[1.2vw] text-[3vw] tracking-tighter'>{prop.overview.slice(0,45)}..</p>
        </div>
      </div>
    </>
  )
}

export default CardSolo