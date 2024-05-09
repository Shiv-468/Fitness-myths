import React from 'react'
import LaptopImg from '../assets/images/webp/laptopImg.png'
import SenditEllipse from '../assets/images/webp/sendit_ellipse_left.png'
const SendIt = () => {
  return (
   <section className='bg_black position-relative'>
    <div className=" position-absolute SenditEllipse_left z-0">
        <img src={SenditEllipse} alt="SenditEllipse_left" className=' w-100' />
    </div>
    <div className=" container max_width_1140 sendit_section_padding">
        <div className=" row">
            <div className="col-6">
                <img src={LaptopImg} alt="LaptopImg" className=' w-100 img_translate laptopImg_size' />
            </div>
            <div className=" col-6 d-flex justify-content-end align-items-center">
                <div className="max_width_522">
                <h2 className=' mb-0 font_size_xl line_height_xl fw-bold color_white'>Let me know where <span className=' color_yellow'>you want me to send it</span></h2>
                <form action="/action_page.php" >
                    <input type="text" id='no' className='sendit_input color_white w-100 bg-transparent margin_top_30' placeholder='Name' />
                    <input type="email" id='not' className='sendit_input color_white w-100 bg-transparent margin_top_13' placeholder='Email' />
                    <button className='navButton position-relative font_family_Eurostile fw-bold mt-5'>GET IN TOUCH</button>
                </form>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default SendIt