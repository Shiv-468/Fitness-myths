import React from 'react'
import Hypervive from '../assets/images/webp/hypervive.png'

const Header = () => {
  return (
    <section className='section1_background'>
    <nav className='navBar_padding'>
      <div className='container max_width_1140'>
        <div className='d-flex align-items-center justify-content-end'>
            <button className='navButton position-relative font_family_Eurostile fw-bold'>GET IN TOUCH</button>
        </div>
      </div>
    </nav>
    <div className='container max_width_1140 section1_paddings'>
        <div className='row'>
            <div className='col-7 d-flex align-items-center'>
                <h1 className='font_size_2xl line_height_3xl fw-bold mb-0 color_white'>Get the EBook that reveals the <span className='color_yellow'>7 fitness myths</span> that are holding you back from experiencing top-level fitness </h1>
            </div>
            <div className='col-5'>
             <img src={Hypervive} alt="hypervive" className=' w-100' />
            </div>
        </div>
    </div>
     
        </section>

  )
}

export default Header