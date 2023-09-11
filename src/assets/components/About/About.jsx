import React from 'react'

const About = () => {
  return (
    <>
    <section className='about-section py-[50px] md:pt-[78px] md:pb-[100px] px-[5px] md:px-[0px]'>
        <div className="max-w-container mx-auto">
            <div className="flex flex-wrap justify-between items-center text-center md:text-start">
                <div className='md:w-[30%] w-full mb-[20px] md:mb-[0px]'>
                    <h2 className='text-b text-[30px] md:text-[48px] font-bold font-pop leading-[48px] md:leading-[72px]'>The biggest supplier on the country</h2>
                </div>
                <div className='md:w-[60%] w-full'>
                    <div className='h-full flex align-middle'>
                        <p className='text-xs md:text-[16px] text-pera font-medium font-pop leading-[24px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About