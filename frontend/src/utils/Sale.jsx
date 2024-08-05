import React from 'react'
import roomImg from "../assets/images/room.png"
import { Link } from 'react-router-dom'

const Sale = () => {

    //Extendable for Sales Banner
    return (
        <div className='w-full flex bg-greyish  '>
            <div className='w-[50%]'>
                <img src={roomImg} alt="living-room" className='w-full' />
            </div>
            <div className='flex items-start justify-center flex-col pl-[50px]'>
                <h6 className='text-sky-400 text-sm uppercase font-semibold'>sale up to 80% off </h6>
                <h3 className='text-3xl text-black my-3 font-semibold'>
                    HUNDREDS of <br />New lower prices!
                </h3>
                <p className='text-md text-gray-700'>
                    It’s more affordable than ever to give every room in your home a stylish makeover
                </p>
                <Link to={'/shop'} className='mt-[20px] text-black border-b border-black text-md font-semibold'>
                    Shop Now! {"-->"
                    }</Link>
            </div>
        </div>
    )
}

export default Sale