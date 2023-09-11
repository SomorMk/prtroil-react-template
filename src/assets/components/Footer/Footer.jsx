import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='footer-section py-[60px] md:py-[180px] bg-[#1F1F1F] px-[15px] md:px-0'>
        <div className="max-w-container mx-auto">
            <div className="flex flex-wrap items-center">
                <div className='w-full md:w-4/12'>
                  <div>
                    <a className='text-center' title='Go to Home Page' href="#"><img src="./footer-logo.png" alt="Footer Logo" /></a>
                    <ul className='mt-[35px] mb-[35px]'>
                      <li className='mb-[20px]'>
                        <i className="text-w md:text-[20px] mr-[10px] fa-regular fa-envelope"></i>
                        <a className='font-pop text-w md:text-[14px] hover:text-c1 duration-300 ease-linear' href="mailto:mail@yourcompany.com">mail@yourcompany.com</a>
                      </li>
                      <li className='mb-[20px]'>
                        <i className="text-w md:text-[20px] mr-[10px] fa-solid fa-phone-volume"></i>
                        <a className='font-pop text-w md:text-[14px] hover:text-c1 duration-300 ease-linear' href="tel:+896 120 5889 (Toll free)">+896 120 5889 (Toll free)</a>
                      </li>
                      <li>
                        <i className="text-w md:text-[20px] mr-[10px] fa-solid fa-map-location-dot"></i>
                        <a className='font-pop text-w md:text-[14px] hover:text-c1 duration-300 ease-linear' href="#">101 Baker Street, New York, USA, 12345</a>
                      </li>
                    </ul>
                    <ul className='flex'>
                      <li>
                        <a className='inline-block w-[30px] h-[30px] leading-[30px] text-center rounded-full bg-c1 mr-[12px] hover:scale-[1.2]' href="#">
                          <i className="text-w md:text-[16px] fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a className='inline-block w-[30px] h-[30px] leading-[30px] text-center rounded-full bg-c1 mr-[12px] hover:scale-[1.2]' href="#">
                          <i className="text-w md:text-[16px] fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className='inline-block w-[30px] h-[30px] leading-[30px] text-center rounded-full bg-c1 mr-[12px] hover:scale-[1.2]' href="#">
                          <i className="text-w md:text-[16px] fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a className='inline-block w-[30px] h-[30px] leading-[30px] text-center rounded-full bg-c1 mr-[12px] hover:scale-[1.2]' href="#">
                          <i className="text-w md:text-[16px] fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='w-full mt-[50px] md:mt-0 md:w-8/12'>
                  <div className="flex flex-wrap">
                    <div className='w-6/12 md:w-[30%]'>
                      <h5 className='font-pop font-bold text-w text-[16px]'>Company</h5>
                      <ul className='mt-[22px]'>
                        <li><a className='font-pop text-w text-[14px] mb-[10px] inline-block hover:text-c1 duration-300 ease linear' href="#">Home</a></li>
                        <li><a className='font-pop text-w text-[14px] mb-[10px] inline-block hover:text-c1 duration-300 ease linear' href="#">About</a></li>
                        <li><a className='font-pop text-w text-[14px] mb-[10px] inline-block hover:text-c1 duration-300 ease linear' href="#">Services</a></li>
                        <li><a className='font-pop text-w text-[14px] mb-[10px] inline-block hover:text-c1 duration-300 ease linear' href="#">Gallery</a></li>
                      </ul>
                    </div>
                    <div className='w-6/12 md:w-[30%]'>
                      <h5 className='font-pop font-bold text-w text-[16px]'>Others</h5>
                      <ul className='mt-[22px]'>
                        <li><a className='font-pop text-w text-[14px] mb-[10px] inline-block hover:text-c1 duration-300 ease linear' href="#">Blog</a></li>
                        <li><a className='font-pop text-w text-[14px] mb-[10px] inline-block hover:text-c1 duration-300 ease linear' href="#">Contact</a></li>
                        <li><a className='font-pop text-w text-[14px] mb-[10px] inline-block hover:text-c1 duration-300 ease linear' href="#">Terms & Conditions</a></li>
                        <li><a className='font-pop text-w text-[14px] mb-[10px] inline-block hover:text-c1 duration-300 ease linear' href="#">Privacy Policy</a></li>
                      </ul>
                    </div>
                    <div className='w-full mt-[30px] md:mt-0 md:w-[40%]'>
                      <h5 className='font-pop font-bold text-w text-[16px]'>Certificate</h5>
                      <ul className='flex mt-[22px]'>
                        <li className='w-[50%]'><img className='w-full max-w-[90%]' src="./Cert1.png" alt="Certificate Image" /></li>
                        <li className='w-[50%]'><img className='w-full max-w-[90%]' src="./Cert2.png" alt="Certificate Image" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
    <section className='footer-bottom py-[20px] md:py-[42px] bg-[#282828] px-[10px] md:px-0'>
      <div className="max-w-container mx-auto">
        <p className='font-pop font-medium text-[#6C6C6C] text-xs md:text-[16px] leading-[24px] md:leadinf-normal text-center md:text-start'>© Copyright 2022 by AltDesain Studio – All right reserved.</p>
      </div>
    </section>
    </>
  )
}

export default Footer