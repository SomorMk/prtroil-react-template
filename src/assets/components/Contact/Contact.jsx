import React from 'react'

const Contact = () => {
  return (
    <>
    <section className='contact-section py-[45px] bg-c1 border-b-[2px] border-b-[#FFB800]'>
        <div className="max-w-container mx-auto flex flex-wrap items-center justify-center md:justify-between">
            <div className='w-full mb-[20px] md:w-[80%] md:mb-0'>
                <h2 className='font-pop font-bold text-w text-[22px] md:text-[36px] text-center md:text-start'>Want to join as member branch in your area?</h2>
            </div>
            <div className='w-full md:w-[20%] flex justify-center md:justify-end'>
                <a className='font-pop font-semibold text-w text-[12px] md:text-[16px] px-[20px] py-[8px] md:px-[30px] md:py-[15px] border-[1px] border-w hover:bg-w hover:text-b duration-300 ease-linear' href="#">CONTACT</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact