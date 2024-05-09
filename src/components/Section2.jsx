import React from 'react'
import BoxEllipse from '../assets/images/webp/boxEllipse.png'
import Sec2Ellipse from '../assets/images/webp/section2_ellipse_right.png'
const Section2 = () => {
  return (
    <div className='bg_black position-relative'>
      <div className=" position-absolute Sec2Ellipse_right z-0">
        <img src={Sec2Ellipse} alt="Sec2Ellipse_right" className=' w-100' />
      </div>
    <div className='container section2_padding_top max_width_1140'>
        <div className='section2_box mx-auto bg_black_box position-relative'>
          <div className=" position-absolute z-0 BoxEllipse">
            <img src={BoxEllipse} alt="BoxEllipse" className=' w-100 h-100' />
          </div>
            <div className=" d-flex flex-column align-items-center gap-3 z-1">
            <p className='mb-0 color_white text-center font_size_md line_height_xlg z-1'>If you’re reading this, most likely you’re in search of the keys that unlock world class performance…..performance that can get you to the next level of your playing career …. And let you create a lifestyle that you’ve always dreamed of… right?</p>
            <p className='mb-0 color_white text-center font_size_md line_height_xlg z-1'>Well there’s a big obstacle in your way…… one that you most likely don’t even notice….. like a hacker whose stolen your starting spot…..and you have no control over it.</p>
            <p className='mb-0 color_white text-center font_size_md line_height_xlg z-1'>That annoying little hacker is simply a <span className=' fw-bold'>lack of knowledge</span>. Sounds ridiculous, right? Stick with me here…. If I knew back then (in my playing days) what I know now, I would probably still be playing instead of writing this eBook.</p>
            <p className='mb-0 color_white text-center font_size_md line_height_xlg z-1'>Early on in my career I realized that in order to get to the next level I needed to get stronger, pack on some lean muscle, improve my endurance, increase my sprint speed & develop robust change of direction qualities.</p>
            <p className='mb-0 color_white text-center font_size_md line_height_xlg z-1'>Problem was... I had no idea how to improve these qualities. I needed help. I spent majority of my time researching on social media platforms & doing workouts that got me minimal results.</p>
            <p className='mb-0 color_white text-center font_size_md line_height_xlg z-1'>Once I figured out the secret sauce to improving all the qualities mentioned above, getting fit became effortless. No more stress, disappointment, anger or frustration. I want you to feel that too. This short eBook can provide you with the tools you need to start getting better results out of your current programs, while doing less not more.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Section2