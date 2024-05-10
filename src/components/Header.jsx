import React from 'react'
import Hypervive from '../assets/images/webp/hypervive.webp'

const Header = () => {
  return (
    <section className='section1_background'>
    <nav className='navBar_padding'>
      <div className='container max_width_1140'>
        <div className='d-flex align-items-center justify-content-end'>
            <div className="button_border position-relative">
              <div className=" position-absolute black_line"></div>
            <button className='navButton position-relative font_family_Eurostile fw-bo ld font_size_xsm line_height_xsm'>GET IN TOUCH</button>
            </div>
        </div>
      </div>
    </nav>
    <div className='container max_width_1140 section1_paddings'>
        <div className='row'>
            <div className='col-12 col-lg-7 d-flex align-items-center'>
                <h1 className='font_size_2xl line_height_3xl fw-bold mb-0 color_white font_family_Eurostile'>Get The eBook That Reveals The <span className='color_yellow'>7 Fitness Myths</span> That Are Holding You Back From Experiencing Top-Level Fitness </h1>
            </div>
            <div className='col-12 col-lg-5 d-flex justify-content-center justify-content-lg-center mt-4 mt-lg-0'>
             <img src={Hypervive} alt="hypervive" className=' w-100 headerImg' />
            </div>
        </div>
    </div>
     
        </section>

  )
}

export default Header