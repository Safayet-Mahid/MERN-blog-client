import React from 'react'
import { BsFillBookmarkFill } from "react-icons/bs"

const BookmarkedPost = () => {
  return (
    <div className='border-2 border-transparent hover:border-slate-500 p-2 lg:p-4 rounded-md shadow flex flex-col'>
        <button className='self-end text-slate-700'>
        <BsFillBookmarkFill />
        </button>
        <p className='text-slate-700 text-lg mb-2'>World currency will soon to move to cryto </p>
        <p className='text-slate-500 text-xs '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum doloribus nulla, unde temporibus tempore maxime? </p>
    </div>
  )
}

export default BookmarkedPost
