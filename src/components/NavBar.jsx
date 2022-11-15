import React, { useState } from 'react'
import BlogIcon from './BlogIcon'
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiDark } from "react-icons/ci";
import { Link } from 'react-router-dom';


const NavBar = () => {

  const [menuOpen,setMenuOpen]=useState(false)
 
  return (
   <div className='p-4  shadow-sm sticky top-0 z-20' style={{background: "rgba( 255, 255, 255, 0.5 )",
    backdropFilter: "blur( 10px )",
    webkitBackdropFilter: "blur( 12px )",
    bordeRadius: "12px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )"}}>
     <div className=' w-100 md:w-11/12 lg:w-3/5 mx-auto'>
        <div className='flex justify-between  items-center'>
            {/* logo */}
            <Link to="/" className='flex justify-between gap-x-1 items-center '>
               <BlogIcon/>
                <p className='font-semibold text-slate-600 text-2xl'>MyBlog</p>
            </Link>

            {/* search */}
            <div className=' flex items-center gap-x-2 p-2 bg-slate-100 rounded-md md:w-60  lg:w-80'>
                <FaSearch size=".75rem" color='gray'/>
                <input type="text" className=' w-full outline-none bg-inherit text-sm text-slate-600' placeholder='Discover news,article and more' />
            </div>

            {/* others */}
              <div className= {`hidden md:flex items-center gap-x-2 text-sm text-slate-600 font-semibold`}>
                <Link to='/'>Home</Link>
                <Link>More</Link>
                <Link>Contact</Link>
                <CiDark color='black' size="1rem"/>
                <Link to="/dashboard/safayetMahid">
                  <img src="https://m.media-amazon.com/images/S/amzn-author-media-prod/cpe1f18d60krjvp4sa76ktljpn._SY600_.jpg" className='w-10 h-10 rounded-full' alt="" />
                </Link>
            </div>
            {/* responsive mobile view */}
          <div className='md:hidden flex flex-col items-end gap-y-1 '>
        
           { !menuOpen && <div onClick={()=>setMenuOpen(true)}>
              <GiHamburgerMenu/>
           </div>
           }

           {menuOpen &&
            <div className='absolute bg-slate-100 shadow-md z-50 w-36 p-3 right-0 top-0'>
              <div onClick={()=>setMenuOpen(false)} className="   flex justify-end mb-3">
                
                <IoMdClose size="1.75rem" color='red'/>
              </div>
                {/* mobile manu  */}
                <div className=' text-right flex flex-col gap-y-2' >
                  <div className=' hover:font-semibold'>Home</div>
                  <div className=' hover:font-semibold'>More</div>
                  <div className=' hover:font-semibold'>Contact</div>
                </div>
            </div>
            }
          </div>
        </div>
    </div>
   </div>
  )
}

export default NavBar