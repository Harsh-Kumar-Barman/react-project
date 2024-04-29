import React from 'react'
import CardSolo from '../Cards/CardSolo'

const Rows = ({data,title}) => {
  return (
    <>
      <div className="main my-10 mx-5">
        <div className="border border-t-[0.1px] border-gray-700 w-full"></div>
        <div className="title my-5">
          <h1 className='text-white capitalize font-bold sm:text-[2.8vw] text-xl max-w-[1024px] tracking-tighter w-full h-10 mx-5 overflow-hidden'>{title}</h1>
        </div>
        <div className="p-2 grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item,index)=> <CardSolo key={index} image={item.backdrop_path} title={item.title} overview={item.overview}  />)}
        </div>
      </div>
    </>
  )
}

export default Rows