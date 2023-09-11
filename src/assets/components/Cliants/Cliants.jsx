import React from 'react'

const Cliants = () => {
  return (
    <>
    <section className='cliants-section py-[60px] md:py-[115px]'>
        <div className="max-w-container mx-auto">
            <div className='flex flex-wrap'>
                <div className='w-[50%] md:w-[25%] px-[10px] mb-[20px] md:mb-0'>
                    <img src="./cliant1.png" className='w-full max-w-full' alt="Cliant's Logo" />
                </div>
                <div className='w-[50%] md:w-[25%] px-[10px] mb-[20px] md:mb-0'>
                    <img src="./cliant2.png" className='w-full max-w-full' alt="Cliant's Logo" />
                </div>
                <div className='w-[50%] md:w-[25%] px-[10px]'>
                    <img src="./cliant3.png" className='w-full max-w-full' alt="Cliant's Logo" />
                </div>
                <div className='w-[50%] md:w-[25%] px-[10px]'>
                    <img src="./cliant4.png" className='w-full max-w-full' alt="Cliant's Logo" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cliants