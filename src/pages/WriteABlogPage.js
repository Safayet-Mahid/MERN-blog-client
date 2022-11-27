import React from 'react'
import NavBar from '../components/NavBar'
import { BiImageAdd } from "react-icons/bi"
import { useState, useRef } from 'react'
import JoditEditor from 'jodit-react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ImCross } from "react-icons/im"


const WriteABlogPage = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([])


    const { userInfo } = useSelector(state => state.user)
    // console.log(content)
    const newBlog = {
        title: title,
        author: userInfo.username,
        authorId: userInfo.id,
        content: content,
        category: tags

    }

    const handlePublish = async () => {

        const config = {
            headers: {
                "Content-Type": "application/json",
                token: "Bearer " + localStorage.getItem("userToken")
            }
        }
        const { data } = await axios.post("http://localhost:5000/api/blogs", newBlog, config)

        // const { res } = await axios.put()
        console.log(data);


    }

    const handleTags = (e) => {
        if (e.key === 'Enter' || e.key === " ") {
            const data = e.target.value;
            setTags([...tags, data])
            e.target.value = ''
        }

    }
    const handleCleartag = (tag) => {
        const restTags = tags.filter(st => st !== tag)
        setTags(restTags)

    }

    return (
        <>
            <NavBar />
            <div className='md:w-11/12 lg:w-3/5 mx-auto px-2'>
                <div className='w-full mt-4 h-[30vh] mb-12'>
                    <img src="https://static.bimago.pl/mediacache/catalog/product/cache/5/0/126805/image/750x1120/0745ca00e3da8959c05fe811b86bbad2/126805_3.jpg" alt="" className='w-full h-full rounded-lg object-cover' />
                </div>
                <div className='flex gap-x-2 items-start'>
                    <label htmlFor="uploadimage" className='cursor-pointer'>
                        <BiImageAdd size="2.5rem" color='#3471eb' />
                    </label>
                    <input type="file" id='uploadimage' className='hidden' />

                    <div className='flex flex-col'>


                        <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Add a title' className='placeholder:text-slate-400 placeholder:italic placeholder: px-2 outline-none text-xl md:text-2xl bg-inherit border-b-2' />
                        <div className='flex gap-x-2 mt-3'>
                            {
                                tags.map(tag => <div className='p-2 bg-gray-300 rounded-md text-slate-600 flex gap-x-2 items-center'>
                                    {tag}
                                    <button onClick={() => handleCleartag(tag)} className="hover:text-red-500  text-sm text-slate-600"><ImCross /></button>
                                </div>)
                            }
                            <input type="text" onKeyPress={e => handleTags(e)} placeholder='add tags' className=" mt-2 placeholder:text-slate-400 placeholder:italic placeholder: px-2 outline-none text-sm bg-inherit border-b-2 w-full" />

                        </div>
                    </div>

                </div>

                <div className='my-4'>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        onBlur={newContent => setContent(newContent)}
                        onChange={newContent => { }}
                    />
                </div>
                <button className='py-2 px-12 bg-blue-200 font-bold rounded-md text-blue-400 tracking-wide my-4 mx-auto border-2 block' onClick={handlePublish}>Publish</button>
            </div>
        </>
    )
}

export default WriteABlogPage 