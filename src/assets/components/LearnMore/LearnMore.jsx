import React from 'react'

const LearnMore = () => {
  return (
    <>
    <section className='learn-more-section md:py-[136px] bg-[#F0F0F0]'>
        <div className="max-w-container mx-auto">
            <div className="flex flex-wrap">
                <div className="w-full text-center md:text-start md:w-[35%] bg-c1 md:py-[100px] md:px-[70px] py-[70px] px-[30px]">
                    <h2 className='md:text-[36px] text-w font-bold font-pop'>Learn more about our company</h2>
                </div>
                <div className="w-full text-center md:text-start md:w-[65%] bg-learnBg bg-cover bg-center md:py-[100px] md:px-[70px] py-[70px] px-[70px] flex items-center justify-center">
                    <a className='text-c1 md:text-[16px] text-[12px] font-semibold font-pop py-[10px] px-[30px] bg-w uppercase hover:bg-b hover:text-w transition duration-300 ease-linear' href="#">Learn more</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LearnMore