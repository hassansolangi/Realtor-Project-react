import spinner from "../components/assets/svg/spinner.svg"
import React from 'react'
export default function Spinner() {
  return (
    <div className=' bg-black bg-opacity-50 flex items-center justify-center left-0 right-0 bottom-0 top-0 z-40'>
        <img src={spinner} alt="Loading..." className='h-24'></img> 
    </div>
  )
}
