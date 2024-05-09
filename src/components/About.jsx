import React from 'react'
import AuthorImg from '../assets/images/webp/author_img.png'
const About = () => {
  return (
    <section className=' bg_black'>
        <div className=" container max_width_1140">
            <div className="row">
                <div className=" col-6">
                    <img src={AuthorImg} alt="author_img" className=' w-100 author_img' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About