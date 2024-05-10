import React from 'react'
import AuthorImg from '../assets/images/webp/author_img.webp'
import Instagram from '../assets/images/svg/instagram.svg'
import Football from '../assets/images/webp/football_img.webp'
import AboutLeftEllipse from '../assets/images/webp/about_section_left_ellipse.webp'
import AboutRightEllipse from '../assets/images/webp/about_section_right_ellipse.webp'
const About = () => {
  return (
    <section className=' bg_black position-relative'>
        <div className=" position-absolute AboutLeftEllipse z-0">
            <img src={AboutLeftEllipse} alt="AboutLeftEllipse" />
        </div>  
        <div className=" position-absolute AboutRightEllipse z-0">
            <img src={AboutRightEllipse} alt="AboutRightEllipse" />
        </div>
        <div className=" container max_width_1170 aboutSection_padding_bottom aboutSection_padding_top">
            <div className="row">
                <div className=" col-12 col-lg-6 d-flex justify-content-center">
                   <div className=" position-relative z-0">
                    <div className=" position-absolute z-1 football_img">
                        <img src={Football} alt="football_img" className=' w-100 z-1 d-none d-md-block d-lg-none d-xxl-block' />
                    </div>
                   <img src={AuthorImg} alt="author_img" className=' z-0 author_img' />
                   </div>
                </div>
                <div className=" col-12 col-lg-6 d-flex align-items-lg-end justify-content-center justify-content-lg-end mt-5 mt-lg-0">
                    <div className="max_width_504">
                    <h2 className=' mb-0 color_white font_size_xl line_height_xl fw-bold text-capitalize font_family_Eurostile'>About the <span className=' color_yellow'>Author</span></h2>
                    <p className=' mb-0 color_white font_size_md line_height_xlg margin_top_13'>Francesco is a Pro fitness coach currently working as head of Sport Science for Toronto FC Academy. He is a registered nutritionist, certified strength and conditioning specialist, holds a Master’s in exercise science and is a national level soccer coach.</p>
                    <p className=' mb-0 color_white font_size_md line_height_xlg margin_top_10'>He has been a personal performance coach to a 1000+ elite level footballers ranging from youth internationals all the way to top level pro’s</p>
                    <p className=' mb-0 color_white font_size_md line_height_xlg margin_top_10'>Francesco believes every footballer should have access to a rock-solid S&C program alongside a quality nutrition plan to improve the chances of crushing their genetic athletic potential and becoming the best version of themselves.</p>
                    <a href='#' className=" d-flex gap-3 align-items-center margin_top_30 pb-2 font_size_lg font_family_Eurostile line_height_lg color_white text-decoration-none">
                        <span> 
                            <img src={Instagram} alt="instagram" />
</span>
Hypervive
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About