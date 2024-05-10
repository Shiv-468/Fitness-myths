import React from 'react'
import ContentLaptop from '../assets/images/webp/content_laptop.webp'
const Contents = () => {
  return (
    <section className='ContentSectionBg'>
      <div className=" container max_width_1140 content_section_padding_top">
        <div className=" Yellow_Card position-relative">
          <div className=" position-absolute ContentLaptop">
            <img src={ContentLaptop} alt="ContentLaptop" className=' w-100 d-none d-lg-block' />
          </div>
          <div className="row flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-6 d-flex justify-content-center px-0 mt-4 mt-lg-0">
        <div className="max_width_520 d-flex flex-column align-items-center align-items-lg-start">
            <h2 className=' mb-0 color_black font_size_2xl line_height_3xl font_family_Eurostile text-capitalize text-center text-lg-start'>7 Fitness Myths to Avoid</h2>
            <p className=' mb-0 color_black font_size_md line_height_xlg fw-normal margin_top_10'>Grab your free copy now!</p>
            <div className=" position-relative button_border2 margin_top_30">
              <div className=" position-absolute yellow_line"></div>
            <button className='button3 position-relative font_family_Eurostile fw-bold color_white'>GET IN TOUCH</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center px-0 ">
          <img src={ContentLaptop} alt=" contentlaptop"  className=' w-100 d-lg-none contentLaptop2'/>
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contents