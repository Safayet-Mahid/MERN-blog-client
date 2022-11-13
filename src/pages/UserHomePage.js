import React from 'react'
import NavBar from '../components/NavBar'
import Tags from '../components/Tags'

import { BsFillBookmarkFill } from "react-icons/bs"

import BookmarkedPost from '../components/BookmarkedPost'
import UserOwnBlog from '../components/UserOwnBlog'
import UserPageUserInfo from '../components/UserPageUserInfo'

const UserHomePage = () => {


    return (
        <>
            <NavBar />
            <div className='md:w-11/12 lg:w-3/5 mx-auto mb-6 md:my-6'>
                <div className='flex flex-col gap-y-3 md:bg-white md:shadow rounded-lg p-2 md:p-4 lg:p-6 mb-16 '>

                    <div className='grid grid-cols-12 gap-x-2 lg:gap-x-4 gap-y-12'>
                        {/* personal Info  */}
                        <UserPageUserInfo />

                        {/* bokmarked */}
                        <div className='col-span-12 md:col-span-6 lg:col-span-5 px-2'>

                            <p className='text-sm text-slate-600 flex mb-4 gap-x-1 items-center font-semibold '>
                                <BsFillBookmarkFill />
                                <span>Bookmarked Posts</span> </p>
                            <div className='flex flex-col gap-y-2'>
                                <BookmarkedPost />
                                <BookmarkedPost />
                                <BookmarkedPost />
                                <BookmarkedPost />
                                <BookmarkedPost />
                            </div>


                        </div>
                    </div>
                </div>

                {/* blog that you have written */}

                <div className='my-12 px-4'>
                    <p className='py-2 px-2 text-slate-700 font-semibold text-lg border-y-2 w-fit border-slate-700'>Posts that you've written</p>
                    <div className='grid grid-cols-2 gap-x-4 my-8 '>

                        <UserOwnBlog />
                        <UserOwnBlog />
                        <UserOwnBlog />
                        <UserOwnBlog />
                        <UserOwnBlog />
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserHomePage