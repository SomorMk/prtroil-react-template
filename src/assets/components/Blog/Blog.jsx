import React from 'react'

const Blog = () => {
  return (
    <>
    <section className='blog-section py-[50px] md:py-[110px] bg-[#F0F0F0]'>
        <div className="max-w-container mx-auto flex flex-wrap justify-end">
            <div className='flex flex-wrap justify-between'>
                <div className='w-full h-[200px] pt-[40px] px-[30px] pb-[60px] md:w-[31%] md:h-[400px] mb-[24px] md:mb-0 md:pt-[75px] md:px-[40px] md:pb-[105px] bg-[url("./blog1.png")] bg-cover bg-center relative z-[1] after:absolute after:content[""] after:top-0 after:left-0 after:w-full after:h-full after:bg-b after:opacity-[0.6] after:z-[-1]'>
                    <h3 className='text-w font-semibold font-pop md:text-[24px] leading-[28px] md:leading-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                    <a className='text-w md:text-[16px] text-[12px] font-semibold font-pop py-[10px] px-[30px] bg-[#fff6] uppercase absolute bottom-[20px] left-[30px] md:bottom-[50px] md:left-[40px] hover:bg-b hover:text-w transition duration-300 ease-linear' href="#">Learn more</a>
                </div>
                <div className='w-full h-[200px] pt-[40px] px-[30px] pb-[60px] md:w-[31%] md:h-[400px] mb-[24px] md:mb-0 md:pt-[75px] md:px-[40px] md:pb-[105px] bg-[url("./blog2.png")] bg-cover bg-center relative z-[1] after:absolute after:content[""] after:top-0 after:left-0 after:w-full after:h-full after:bg-b after:opacity-[0.6] after:z-[-1]'>
                    <h3 className='text-w font-semibold font-pop md:text-[24px] leading-[28px] md:leading-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                    <a className='text-w md:text-[16px] text-[12px] font-semibold font-pop py-[10px] px-[30px] bg-[#fff6] uppercase absolute bottom-[20px] left-[30px] md:bottom-[50px] md:left-[40px] hover:bg-b hover:text-w transition duration-300 ease-linear' href="#">Learn more</a>
                </div>
                <div className='w-full h-[200px] pt-[40px] px-[30px] pb-[60px] md:w-[31%] md:h-[400px] md:mb-0 md:pt-[75px] md:px-[40px] md:pb-[105px] bg-[url("./blog3.png")] bg-cover bg-center relative z-[1] after:absolute after:content[""] after:top-0 after:left-0 after:w-full after:h-full after:bg-b after:opacity-[0.6] after:z-[-1]'>
                    <h3 className='text-w font-semibold font-pop md:text-[24px] leading-[28px] md:leading-[40px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                    <a className='text-w md:text-[16px] text-[12px] font-semibold font-pop py-[10px] px-[30px] bg-[#fff6] uppercase absolute bottom-[20px] left-[30px] md:bottom-[50px] md:left-[40px] hover:bg-b hover:text-w transition duration-300 ease-linear' href="#">Learn more</a>
                </div>
            </div>
            <div className='md:w-[30%] mt-[30px] font-pop font-bold text-b text-xs md:text-base flex items-center justify-end hover:text-c1 duration-300 ease-linear'>
                <a href="#">MORE FROM THE BLLOG</a>
                <i class="ml-[10px] fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog