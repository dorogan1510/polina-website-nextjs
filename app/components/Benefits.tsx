import Image from 'next/image'
import React from 'react'

import pensil from '@/public/img/pencil-blue.png'
import clock from '@/public/img/clock-blue.png'
import contacts from '@/public/img/contacts-blue.png'
import ok from '@/public/img/ok-blue.png'

export const Benefits = () => {
    return (
        <div className='benefits'>
            <h2>Учеба в Polly Glotiki School — это приключение</h2>
            <div className='benefits__description'>
                Дети ждут занятий, потому что мы погружаем их в мир нескучного
                английского языка. Без нудной теории и однотипных заданий.
            </div>
            <div className='benefits__flex'>
                <div className='benefits__half'>
                    <div className='benefits__half_1'>
                        <Image
                            width={40}
                            height={40}
                            src={pensil}
                            alt='pencil'
                        />
                        <h3>Онлайн-формат</h3>
                        <p>
                            Учимся дома, на даче, в парке или на отдыхе. Все
                            занятия проходят онлайн — вы сами выбираете, где вам
                            удобно подключиться к уроку.
                        </p>
                    </div>
                    <div className='benefits__half_1'>
                        <Image width={40} height={40} src={clock} alt='clock' />
                        <h3>Интерактивные упражнения</h3>
                        <p>
                            На занятиях мы играем, разбираем английские песни,
                            устраиваем викторины и квизы. Дети не замечают, как
                            пролетает время — подбираем материалы по интересам.
                        </p>
                    </div>
                </div>
                <div className='benefits__half'>
                    <div className='benefits__half_1'>
                        <Image
                            width={40}
                            height={40}
                            src={contacts}
                            alt='contacts'
                        />
                        <h3>Открытый преподаватель</h3>
                        <p>
                            Урок ведёт не только преподаватель, но и ученик. Мы
                            внимательно слушаем, поддерживаем и не критикуем за
                            ошибки.
                        </p>
                    </div>
                    <div className='benefits__half_1'>
                        <Image width={40} height={40} src={ok} alt='ok' />
                        <h3>Индивидуальный план</h3>
                        <p>
                            Составляем уроки по возрасту и уровню подготовки
                            ребенка — определяем после диагностического урока.
                            Плавно погружаем в обучение и работаем с мотивацией
                            ученика.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
