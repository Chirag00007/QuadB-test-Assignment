import React from 'react'
import { infoGraphics } from './data'

const InfoGraphics = () => {
    return (
        <div className='w-full px-4 mt-[30px] flex gap-[10px] mb-[30px] items-center justify-center flex-wrap '>

            {
                infoGraphics.map((e) => (
                    <div key={e.id} className='w-[260px] h-[230px] flex flex-col items-start justify-center p-6 bg-greyish rounded-sm'>
                        <h6 className='text-black text-5xl mb-1'><ion-icon name={e.icon}></ion-icon></h6>
                        <h2 className='text-xl font-semibold text-gray-900 mt-2'>{e.name}</h2>
                        <p className='text-gray-600 text-sm mt-2'>{e.desc}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default InfoGraphics