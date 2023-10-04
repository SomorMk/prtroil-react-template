import React from 'react'

const Banner = () => {
  return (
    <>
    <section className='banner-section bg-bannerBg bg-cover bg-center'>
        <div className='w-full h-full backdrop-brightness-50 md:py-[210px] py-[140px]'>
            <div className="md:max-w-container max-w-full mx-auto">
                <div className='md:max-w-[75%] max-w-full text-center md:text-left'>
                    <h1 className='md:text-[64px] text-[25px] text-w font-bold font-pop mb-[50px] leading-[50px] md:leading-[85px]'>We exist since 1975 on the oil and gas industry.</h1>
                    <a className='text-w md:text-[16px] text-[12px] font-semibold font-pop py-[10px] px-[30px] bg-c1 uppercase hover:bg-w hover:text-b transition duration-300 ease-linear' href="#">Learn more</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner