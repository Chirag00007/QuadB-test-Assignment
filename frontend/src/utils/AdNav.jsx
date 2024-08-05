import React, { Fragment } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AdNav = () => {

    const [open, setOpen] = useState(true);
    return (
        <Fragment>
            {
                open ? <div className='w-full bg-greyish h-[50px] items-center flex justify-center relative'>
                    <h1 className='text-md text-gray-700 font-semibold flex items-center'>
                        <span className='mr-2 text-gray-700 font-semibold text-xl'>  <ion-icon name="ticket-outline" ></ion-icon> </span>
                        30% off storewide — Limited time! <Link to={'/products'} className='text-blue-400 border-b border-blue-400 ml-2 font-medium '>Shop Now!  {" ->"}</Link>
                    </h1>
                    <span className='text-2xl text-gray-800 absolute right-[15px] top-[12px] font-medium cursor-pointer' onClick={() => setOpen(false)}>
                        <ion-icon name="close-outline"></ion-icon>
                    </span>
                </div> : ""
            }
        </Fragment>
    )
}

export default AdNav