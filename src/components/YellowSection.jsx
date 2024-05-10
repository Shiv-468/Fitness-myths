import React from 'react'
import Coverbook from '../assets/images/webp/cover_book.webp'
const YellowSection = () => {
  return (
<section className='yellowSection_bg'>
 <div className="container max_width_1140">
<div className="row pt-5 pb-2 flex-column-reverse flex-md-row">
    <div className=" col-12 col-md-7 col-lg-8 d-flex align-items-center mt-4 mt-lg-0 pb-4 pb-md-0">
        <h2 className=' mb-0 color_black font_size_xl line_height_2xl font_family_Eurostile fw-bold text-capitalize'>With the right knowledge maintaining and improving your fitness becomes effortless and enjoyable. Stop wasting time you don’t have!</h2>
    </div>
    <div className=" col-12 col-md-5 col-lg-4 px-xxl-0 d-flex justify-content-center ">
        <img src={Coverbook} alt="cover_book" className=' w-100 cover_book_width' />
    </div>
</div>
 </div>
</section>
  )
}

export default YellowSection