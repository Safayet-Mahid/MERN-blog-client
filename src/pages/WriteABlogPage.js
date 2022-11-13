import React from 'react'
import NavBar from '../components/NavBar'
import { BiImageAdd } from "react-icons/bi"
import { useState, useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react'

const WriteABlogPage = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    // const config = useMemo(
    //     {
    //         readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    //         placeholder: placeholder || 'Start typings...'
    //     },
    //     [placeholder]
    // );
    console.log(content)
    return (
        <>
            <NavBar />
            <div className='md:w-11/12 lg:w-3/5 mx-auto px-2'>
                <div className='w-full mt-4 h-[30vh] mb-12'>
                    <img src="https://static.bimago.pl/mediacache/catalog/product/cache/5/0/126805/image/750x1120/0745ca00e3da8959c05fe811b86bbad2/126805_3.jpg" alt="" className='w-full h-full rounded-lg object-cover' />
                </div>
                <div className='flex gap-x-2 items-center'>
                    <label htmlFor="uploadimage" className='cursor-pointer'>
                        <BiImageAdd size="2.5rem" color='#3471eb' />
                    </label>
                    <input type="file" id='uploadimage' className='hidden' />
                    <span className='h-full text-slate-500 font-bold'>|</span>

                    <input type="text" placeholder='Add a title' className='placeholder:text-slate-400 placeholder:italic placeholder: px-2 outline-none text-xl md:text-2xl bg-inherit border-b-2' />
                </div>

                <div className='my-4'>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        // config={config}
                        onBlur={newContent => setContent(newContent)}
                        onChange={newContent => { }}
                    />
                </div>
                <button className='py-2 px-12 bg-blue-200 font-bold rounded-md text-blue-400 tracking-wide my-4 mx-auto border-2 block'>Publish</button>
            </div>
        </>
    )
}

export default WriteABlogPage 