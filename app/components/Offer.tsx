import Image from 'next/image'
import React from 'react'

import okWhite from '@/public/img/ok-white.png'

export const Offer = () => {
    return (
        <div id='id1' className='offer'>
            <div className='offer__flex'>
                <div>
                    <div>
                        <h2>Записывайтесь на пробное бесплатное занятие</h2>
                        <p>
                            На нём мы определим уровень ребёнка, составим
                            расписание и наметим план работы
                        </p>
                        <h3>Что включено:</h3>
                    </div>
                    <div className='offer__flex_left'>
                        <div className='offer__flex_left-item'>
                            <Image src={okWhite} alt='ok' />
                            <span>Определение уровня ученика</span>
                        </div>
                        <div className='offer__flex_left-item'>
                            <Image src={okWhite} alt='ok' />
                            <span>
                                Знакомство с преподавателем и платформой
                            </span>
                        </div>
                        <div className='offer__flex_left-item'>
                            <Image src={okWhite} alt='ok' />
                            <span>
                                Увлекательное приключение в мир английского
                            </span>
                        </div>
                        <div className='offer__flex_left-item'>
                            <Image src={okWhite} alt='ok' />
                            <span>Фидбек после урока</span>
                        </div>
                    </div>
                </div>
                <div className='offer__flex_right'>
                    <a
                        href='https://api.whatsapp.com/send?phone=79029250034&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%83%D1%80%D0%BE%D0%BA'
                        target='_blank'
                    >
                        записаться на пробный урок
                    </a>
                </div>
            </div>
        </div>
    )
}
