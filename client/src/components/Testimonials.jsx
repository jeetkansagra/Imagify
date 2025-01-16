import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'

const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}   
    whileInView={{opacity:1,y:0}} 
    viewport={{once:true}}
    className='container mx-auto py-10 lg:px-32 w-full  overflow-hidden '>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer Testimonials </h1>
      <p className='text-gray-500  text-center  mx-auto mb-12'>What Our Users Are Saying</p>

      <div className='flex flex-wrap gap-8 justify-center'>
        {testimonialsData.map((testimonial,index) =>(
            <div key = {index} className='w-full sm:w-[48%] lg:w-[30%] border shadow-lg rounded px-8 py-12 bg-white/20 text-center hover:scale-[1.02] transition-all'>
                <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from ({length: testimonial.rating},(item,index) =>(<img key={index} src={assets.star_icon} alt=""/>))}
                </div>
                <p className='text-gray-600'>
                    {testimonial.text}
                </p>
                
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
