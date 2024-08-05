import React from 'react'
import Carousel from '../utils/Carousel'
import { Link } from 'react-router-dom'
import chairImg from "../assets/images/chair2.png"
import drawImg from "../assets/images/draw.png"
import toastImg from "../assets/images/toast.png"
import ProductsCarousel from './products/ProductsCarousel'
import InfoGraphics from '../utils/InfoGraphics'
import Sale from '../utils/Sale'

const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto w-full flex flex-col'>
            <div className='w-full max-h-[500px] overflow-hidden'>
                <Carousel />
            </div>
            <div className='flex items-center justify-between mt-[30px] px-4'>
                <h1 className='text-6xl text-black font-medium leading-[65px]'>
                    Simply Unique <span className='text-gray-600'>/</span> <br />
                    Simply Better.
                </h1>
                <p className='text-sm text-gray-500 leading-[25px]'><span className='font-semibold text-gray-900'>3legant</span> is a gift & decorations store based in HCMC,<br /> Vietnam. Est since 2019. </p>
            </div>

            <div className='flex w-full my-[40px] gap-[20px]'>
                {/* Main Category  */}
                <div className='bg-greyish py-10 px-8 w-[50%] cursor-pointer category-cards items-start justify-center flex flex-col'>
                    <div className='h-full'>
                        <h1 className='text-3xl text-[#141718] font-semibold mb-2 '>
                            Living Room
                        </h1>
                        <Link className='text-md text-gray-700 font-medium border-b border-gray-700 hover:text-gray-900 transition-all  pb-[2px]' to={'/products?category=living'}>
                            Shop Now {"-->"}
                        </Link>
                    </div>
                    <img src={chairImg} alt="chair" className='max-w-[600px] category-card-image' />
                </div>
                {/* Other two cards  */}
                <div className='flex flex-col w-[50%] h-full gap-[20px]'>
                    {/* card 1 */}
                    <div className='bg-greyish p-6 flex h-[50%] items-end justify-between max-h-[350px] cursor-pointer category-cards'>
                        <div className='mb-8' >
                            <h1 className='text-3xl text-[#141718] font-semibold mb-2'>
                                Bedroom
                            </h1>
                            <Link className='text-md text-gray-700 font-medium border-b border-gray-700 hover:text-gray-900 transition-all pb-[2px]' to={'/products?category=bedroom'}>
                                Shop Now {"-->"}
                            </Link>
                        </div>
                        <img src={drawImg} alt="drawer" className='max-w-[300px] category-card-image' />
                    </div>
                    {/* card 2 */}
                    <div className='bg-greyish p-6 flex h-[50%] items-end justify-between max-h-[350px] cursor-pointer category-cards'>
                        <div className='mb-8' >
                            <h1 className='text-3xl text-[#141718] font-semibold mb-2'>
                                Kitchen
                            </h1>
                            <Link className='text-md text-gray-700 font-medium border-b border-gray-700 hover:text-gray-900 transition-all pb-[2px]' to={'/products?category=kitchen'}>
                                Shop Now {"-->"}
                            </Link>
                        </div>
                        <img src={toastImg} alt="drawer" className='max-w-[300px] category-card-image' />
                    </div>
                </div>
            </div>

            <ProductsCarousel title="New Arrival" />
            <InfoGraphics />
            <Sale />
        </div>
    )
}

export default Home