import Image from 'next/image'
import React from 'react'
import price1 from '@/public/img/price1.png'
import price2 from '@/public/img/price2.png'
import price3 from '@/public/img/price3.png'
import price4 from '@/public/img/price4.png'

export const Prices = () => {
    return (
        <div className='prices'>
            <div className='prices__info'>
                <h2>Тарифы и цены на групповые занятия</h2>
            </div>
            <div className='prices__flex1'>
                <Image src={price1} alt='price' />
                <Image src={price2} alt='price' />
            </div>
            <div className='prices__group'>
                <h2>Тарифы и цены на индивидуальные занятия</h2>
            </div>
            <div className='prices__flex2'>
                <Image src={price3} alt='price' />
                <Image src={price4} alt='price' />
            </div>
        </div>
    )
}
