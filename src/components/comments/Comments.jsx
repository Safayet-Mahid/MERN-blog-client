import React from 'react'
import Comment from './Comment'


const Comments = ({comments}) => {

   
  return (
    <div className=''>
        {

            comments.map(singleComment => <Comment parent={singleComment}/>)

        }
    </div>
  )
}

export default Comments