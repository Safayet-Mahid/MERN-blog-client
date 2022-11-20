import React from 'react'
import CommentInput from './CommentInput'
import Comments from './Comments'

const CommentBox = () => {

    const allComments = [
        {
            title: "hello",
            children:[]
        },
        {
            title: "hello",
            children:[
                {
                    title: "hello",
                    children:[]
                },
                {
                    title: "hello",
                    children:[
                        {
                            title: "hello",
                            children:[]
                        },
                    ]
                },
            ]
        },
        {
            title: "hello",
            children:[]
        },
        {
            title: "hello",
            children:[
                {
                    title: "hello",
                    children:[]
                },
                {
                    title: "hello",
                    children:[
                        {
                            title: "hello",
                            children:[]
                        },
                    ]
                },
            ]
        },
    ]
    
  return (
    <div>
        <h3 className='text-xl font-semibold text-slate-700 my-8 '>Comments(12)</h3>

        {/* comment input  */}
        <CommentInput />

 
        <Comments comments = {allComments}/>
    </div>
  )
}

export default CommentBox