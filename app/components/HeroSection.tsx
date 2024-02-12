import Link from 'next/link'
import React from 'react'

export const HeroSection = () => {
    return (
        <div className='hero_section'>
            <div className='hero_section__main'>
                <h1>Polly Glotiki — онлайн-школа английского языка</h1>
                <h3>
                    Для детей и подростков от 4 до 17 лет. Доводим до результата
                    с помощью игр и меняем «надо» на «хочу»!
                </h3>
                <div className='hero_section__links'>
                    <Link
                        href='https://api.whatsapp.com/send?phone=79029250034&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%83%D1%80%D0%BE%D0%BA'
                        target='_blank'
                    >
                        Записаться на пробный урок
                    </Link>
                    <Link href='#id2'>Выбрать преподавателя</Link>
                </div>
            </div>
        </div>
    )
}
