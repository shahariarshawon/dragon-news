import { format } from 'date-fns'
import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-col justify-center items-center  gap-5 py-10'>
      <h3 className='text-6xl   font-bold text-secondary'>The Dragon News</h3>
      <p className=' text-xl '>The latest news will be found here</p>
      <p> {format( new Date(), "EEEE, MMMM MM, yyyy")} </p>
    </div>
  )
}
