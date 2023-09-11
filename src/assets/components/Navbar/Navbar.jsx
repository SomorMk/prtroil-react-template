import React, { useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const navClick = ()=>{
        console.log('Clicked');
        setShow(!show);
    }
  return (
    <>
    <section className='navbar-section bg-c1 md:py-[30px] py-[20px] md:px-0 px-[5px] relative'>
        <div className="max-w-container mx-auto flex flex-wrap md:flex-nowrap align-middle">
            <div className='md:w-[25%] w-[50%] items-center justify-center'>
                <a href="#">
                    <img className='text-center' src="/logo.png" alt="Logo" />
                </a>
            </div>
            <div onClick={navClick} className='absolute top-[50%] right-[20px] translate-y-[-50%] z-[9] cursor-pointer md:hidden'>
                {
                    show == true ? <i class="text-[30px] text-w fa-solid fa-xmark" title='Close Menu'></i> : <i class="text-[30px] text-w fa-solid fa-bars" title='Open Menu'></i>
                }
            </div>
            <div className='md:w-[85%] w-[50%] flex md:justify-end'>
                <ul className={`nav-area absolute top-[-500px] left-0 bg-[#FFB800] w-full text-center py-[30px] md:py-0 z-[2] md:static md:top-auto md:left-auto md:justify-end md:bg-transparent md:flex md:flex-wrap md:items-center duration-500 ease-linear ${show ? 'top-[80px]' : 'top-[-500px]'}`}>
                    <li className='leading-10'>
                        <a className='text-w text-[14px] md:text-[16px] font-semibold font-pop md:ml-[30px] hover:text-b transition duration-300 ease-linear' href="#">Home</a>
                    </li>
                    <li className='leading-10'>
                        <a className='text-w text-[14px] md:text-[16px] font-semibold font-pop md:ml-[30px] hover:text-b transition duration-300 ease-linear' href="#">About</a>
                    </li>
                    <li className='leading-10'>
                        <a className='text-w text-[14px] md:text-[16px] font-semibold font-pop md:ml-[30px] hover:text-b transition duration-300 ease-linear' href="#">Service</a>
                    </li>
                    <li className='leading-10'>
                        <a className='text-w text-[14px] md:text-[16px] font-semibold font-pop md:ml-[30px] hover:text-b transition duration-300 ease-linear' href="#">Gallery</a>
                    </li>
                    <li className='leading-10'>
                        <a className='text-w text-[14px] md:text-[16px] font-semibold font-pop md:ml-[30px] hover:text-b transition duration-300 ease-linear' href="#">Blog</a>
                    </li>
                </ul>
                <a className='hidden md:block ml-[30px] border-[2px] border-w md:py-[15px] md:px-[30px] md:static uppercase text-w md:text-[16px] font-semibold font-pop hover:bg-w hover:text-b hover:border-w transition duration-300 ease-linear absolute top-[-62px] right-[50px] py-[10px] px-[15px] text-[12px]' href="#">Contact</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Navbar