import React from 'react'

const FeaturedBlog = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row  md:gap-x-4 lg:gap-x-10 '>

        <div className='md:flex-[1.5] lg:flex-[2.5] py-6 text-left px-4'>
            <div className='flex '>
            <div className='flex-[2]'>
            <p className='bg-blue-300 w-fit px-4 py-1 rounded-[2rem] text-blue-600 font-semibold text-sm my-4'>Beauty</p>
            <h2 className='font-semibold text-2xl md:text-4xl mb-4 text-left leading-8  lg:w-2/3 '>
                Create an Art that showes the beauty in everyone's ideas of flaws
            </h2>

            </div>
            <div className='flex-1  h-1/2 my-auto  md:hidden'>
            <img src="https://i8.amplience.net/i/liberty/the-beauty-drop-bottom-banner-5" className=' rounded-[1.25rem]' alt="" />
        </div>
            </div>
            <p className='text-gray-500 leading-8 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ullam, culpa sapiente hic dicta perferendis repudiandae autem, voluptate repellendus ipsam eveniet itaque architecto error quae exercitationem labore, delectus sed accusamus nam blanditiis? Omnis animi ea unde libero recusandae aliquam consequatur delectus a atque dolore rem ex esse fugiat modi impedit . </p>
        </div>
        <div className='flex-1 hidden md:block'>
            <img src="https://i8.amplience.net/i/liberty/the-beauty-drop-bottom-banner-5" className='h-full rounded-[1.25rem]' alt="" />
        </div>
    </div>
  )
}

export default FeaturedBlog