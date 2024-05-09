import React from 'react'
import Coverbook from '../assets/images/webp/cover_book.png'
const YellowSection = () => {
  return (
<section className='yellowSection_bg'>
 <div className="container max_width_1140">
<div className="row pt-5 pb-2">
    <div className=" col-7 d-flex align-items-center">
        <h2 className=' mb-0 color_black font_size_xl line_height_2xl fw-bold'>With the right knowledge maintaining and improving your fitness becomes effortless and enjoyable. Stop wasting time you don’t have!</h2>
    </div>
    <div className=" col-5">
        <img src={Coverbook} alt="cover_book" className=' w-100 cover_book_width' />
    </div>
</div>
 </div>
</section>
  )
}

export default YellowSection