import React from 'react'

const Service = () => {
  return (
    <>
    <section className='service-section flex flex-wrap'>
        <div className='w-full md:w-3/6 relative h-[230px] md:h-[410px]'>
            <div className='absolute w-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center md:text-start md:translate-x-0 md:translate-y-0 md:left-auto md:top-auto md:w-[500px] md:right-[60px] md:bottom-[130px] px-[10px] md:px-[0]'>
                <h2 className='font-pop font-bold text-b text-[30px] md:text-[64px] mb-[20px] md:mb-0'>Our Services</h2>
                <p className='font-pop font-medium text-pera text-[14px] md:text-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>
        <div className='w-full md:w-3/6 bg-ser2 bg-cover bg-center h-[200px] md:h-[410px] relative after:absolute after:content[""] after:top-0 after:left-0 after:w-full after:h-full after:bg-b after:opacity-[0.5] z-[1] after:z-[-1] mb-[10px] md:mb-0'>
            <div className='w-[90%] md:w-[80%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-w font-bold text-[20px] md:text-[30px] font-pop mb-[30px]'>Modern natural oil and gas refineries.</h3>
                <a className='text-w md:text-[16px] text-[12px] font-semibold font-pop py-[10px] px-[30px] bg-c1 uppercase hover:bg-w hover:text-b transition duration-300 ease-linear' href="#">Learn more</a>
            </div>
        </div>
        <div className='w-full md:w-3/6 bg-ser3 bg-cover bg-center h-[200px] md:h-[410px] md:text-end relative after:absolute after:content[""] after:top-0 after:left-0 after:w-full after:h-full after:bg-b after:opacity-[0.5] z-[1] after:z-[-1] mb-[10px] md:mb-0'>
            <div className='w-[90%] md:w-[80%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-w font-bold text-[20px] md:text-[30px] font-pop mb-[30px]'>Supply of national industries.</h3>
                <a className='text-w md:text-[16px] text-[12px] font-semibold font-pop py-[10px] px-[30px] bg-c1 uppercase hover:bg-w hover:text-b transition duration-300 ease-linear' href="#">Learn more</a>
            </div>
        </div>
        <div className='w-full md:w-3/6 bg-ser1 bg-cover bg-center h-[200px] md:h-[410px] relative after:absolute after:content[""] after:top-0 after:left-0 after:w-full after:h-full after:bg-b after:opacity-[0.5] z-[1] after:z-[-1] mb-[10px] md:mb-0'>
            <div className='w-[90%] md:w-[80%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-w font-bold text-[20px] md:text-[30px] font-pop mb-[30px]'>National fuel distribution and supply.</h3>
                <a className='text-w md:text-[16px] text-[12px] font-semibold font-pop py-[10px] px-[30px] bg-c1 uppercase hover:bg-w hover:text-b transition duration-300 ease-linear' href="#">Learn more</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Service