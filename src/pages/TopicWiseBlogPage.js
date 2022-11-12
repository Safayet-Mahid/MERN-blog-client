import React from 'react'
import NavBar from '../components/NavBar'
import AuthorBlogs from '../components/AuthorBlogs'
import TopicBlogList from '../components/TopicBlogList'
import IntrestesTopics from '../components/IntrestesTopics'


const TopicWiseBlogPage = () => {
    return (
        <div>
            <NavBar />

            <div className='grid grid-cols-12 gap-x-6 mx-auto md:w-11/12 lg:w-3/5 relative'>
                <TopicBlogList />
                <IntrestesTopics />

            </div>
        </div>
    )
}

export default TopicWiseBlogPage