import React from 'react'
import InstaLink from '../assets/images/svg/insta_links.svg'
import MusicLink from '../assets/images/svg/music_link.svg'
const Footer = () => {
  return (
   <section className='footer_bg'>
    <div className=" container max_width_1140 footer_padding_top pt-5">
<h2 className=' mb-0 color_white font_family_Eurostile text-center fw-bold font_size_lg line_height_lg'>Hypervive</h2>
<p className=' mb-0 text-white font_family_Manrope fw-normal opacity_70 text-center padding_top_19 font_size_xsm line_height_md pb-3'>Connect with us on social media</p>
<div className=" d-flex align-items-center justify-content-center gap_10 pb-4">
    <a href='https://open.spotify.com/' target='_blank' className="footer_social_link d-flex align-items-center justify-content-center">
        <img src={MusicLink} alt="music_link" />
    </a>
    <a href='https://www.instagram.com/' target='_blank' className="footer_social_link d-flex align-items-center justify-content-center">
    <img src={InstaLink} alt="insta_link" />
    </a>
</div>

    </div>
    <div className="footer_line"></div>
    <p className=' mb-0 text-center color_white Copyright_padding font_size_xsm line_height_md font_family_Manrope'>Copyright © 2024 HyperVive | All Rights Reserved.</p>
   </section>
  )
}

export default Footer