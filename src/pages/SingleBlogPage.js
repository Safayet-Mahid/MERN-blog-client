import React from 'react'
import BlogInfoImage from '../components/BlogInfoImage'

import MoreFromWriter from '../components/MoreFromWriter'
import NavBar from '../components/NavBar'
import RelatedBlogs from '../components/RelatedBlogs'
import WriterDetails from '../components/WriterDetails'

const SingleBlogPage = () => {
    return (
        <div>
            <NavBar />
            <div className='grid grid-cols-12 md:w-11/12 lg:w-3/5 mx-auto'>
                {/* blog content */}

                <div className='col-span-12'>
                    <BlogInfoImage />
                    <div className='lg:grid grid-cols-12 md:gap-x-4 lg:gap-x-8 px-2 md:px-0'>

                        {/* blog Content  */}
                        <p className='md:col-span-8 p-3  bg-white shadow md:p-8 lg:p-12 rounded-2xl text-slate-700 my-12 tracking-wide leading-8 text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

                            Even the all-powerful...
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

                            The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.

                            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

                            On her way she met a copy
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                            A small river named Duden flows by their place and supplies it with the necessary regelialia.

                            And if she hasn’t been rewritten, then they are still using her. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.

                            But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.

                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.A small river named Duden flows by their place and supplies it with the necessary regelialia.And if she hasn’t been rewritten, then they are still using her.</p>


                        <div className='col-span-4  mt-12 px-2 md:px-0'>
                            <WriterDetails />
                            <RelatedBlogs />
                        </div>

                        {/* more from same writer  */}
                        <div className='col-span-12 bg-gray-50 my-12 rounded-2xl shadow py-1'>
                            <MoreFromWriter />
                        </div>
                    </div>
                </div>



            </div>
        </div >
    )
}

export default SingleBlogPage
