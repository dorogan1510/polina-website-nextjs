import Image from 'next/image'
import React from 'react'
import review1 from '@/public/img/review1.jpg'
import review2 from '@/public/img/review2.jpg'
import review3 from '@/public/img/review3.jpg'

export const Reviews = () => {
    return (
        <div className='reviews'>
            <h2>Что пишут о нас родители?</h2>
            <div className='reviews__flex'>
                <div className='reviews__flex-item'>
                    <h3>Эва, 7 лет</h3>
                    <p>
                        Начали заниматься с нуля. За 10 месяцев групповых
                        занятий освоили чтение, базовую грамматику и лексику.
                    </p>
                    <ul>
                        Результат:
                        <li>
                            Разрушили языковой барьер — ребёнок не боится
                            разговаривать!
                        </li>
                    </ul>
                    <Image src={review1} alt='review' />
                </div>

                <div className='reviews__flex-item'>
                    <h3>Вова, 7 лет</h3>
                    <p>
                        Начали с нуля. За 1,5 года занятий он научился читать,
                        писать и поддерживать диалог.
                    </p>
                    <ul>
                        Результат:
                        <li>
                            Читает истории на английском и легко справляется со
                            школьной программой.
                        </li>
                    </ul>
                    <Image src={review3} alt='review' />
                </div>

                <div className='reviews__flex-item'>
                    <h3>Аня, 13 лет</h3>
                    <p>3 года назад пришла к нам с пробелами в знаниях.</p>
                    <ul>
                        Результат:
                        <li>
                            Читает статьи в оригинале, смотрит зарубежных
                            блогеров. Переводит тексты песен, которые ей
                            интересны. Общается с носителями и без проблем
                            поддерживает разговор на любую бытовую тему.
                        </li>
                    </ul>
                    <Image src={review2} alt='review' />
                </div>
            </div>
        </div>
    )
}
