import React from 'react'
import chairImg from "../assets/images/chair2.png"
import drawImg from "../assets/images/draw.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='flex flex-col w-full max-w-[1200px] mx-auto '>
            <div className='bg-greyish relative flex flex-col items-center justify-center h-[300px] overflow-hidden'>
                <h1 className='text-3xl text-black font-semibold z-[3]'>Join Our Newsletter</h1>
                <p className='text-md font-medium text-gray-600 mt-2 z-[3]'>
                    Sign up for deals, new products and promotions
                </p>
                <div className='relative max-w-[400px] mx-auto w-full my-3 z-[3]'>
                    <span className='absolute top-[22px] left-[-30px] text-2xl text-gray-500'>
                        <ion-icon name="mail-outline"></ion-icon>
                    </span>
                    <input type="email" className="inputs w-full bg-transparent my-3" placeholder='Your Email Address' />
                    <button className='text-sm text-gray-500  absolute right-0 top-[25px]'>Sign up</button>
                </div>
                <img src={chairImg} alt="chair" className='absolute bottom-[-240px] w-[500px] right-[-150px] z-[0]' />
                <img src={drawImg} alt="chair" className='absolute top-[-170px] w-[500px] left-[-150px] z-[0]' />
            </div>
            <div className='bg-black w-full h-[250px] flex flex-col items-center justify-center'>
                <div className='w-full max-w-[900px] mx-auto'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-3xl text-white flex items-center'>3legant <span className='text-3xl text-gray-500 mx-4'>|</span> <span className='text-gray-200 text-xl'>Gift and decoration</span></h1>
                        <div className='flex items-center justify-between gap-[30px] nav-list'>
                            <Link to={'/'} >Home</Link>
                            <Link to={'/shop'} >Shop</Link>
                            <Link to={'/products'} >Products</Link>
                            <Link to={'/contact'} >Contact Us</Link>
                        </div>
                    </div>

                    <div className='pt-6 border-t border-gray-600 mt-[80px] flex items-center justify-between'>
                        <p className='text-sm text-gray-400'>Copyright 2023 3legant. All right reserved.
                            <span>
                                <Link to={'/privacy-policy'} className='text-white font-semibold mx-4 ml-6'>Privacy Policy</Link>
                                <Link to={'/terms-of-use'} className='text-white font-semibold mx-4'>Terms of use</Link>
                            </span>
                        </p>
                        <div className='flex items-center justify-between gap-[15px] '>
                            <span className='text-white text-2xl'>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </span>
                            <span className='text-white text-2xl'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </span>
                            <span className='text-white text-2xl'>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer