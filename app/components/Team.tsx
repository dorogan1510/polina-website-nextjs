import Image from 'next/image'
import React from 'react'
import polina from '@/public/img/polina.jpg'
import vika from '@/public/img/vika.jpg'
import nastya from '@/public/img/nastya.jpg'
import yana from '@/public/img/yana.jpg'
import daria from '@/public/img/daria.jpg'

export const Team = () => {
    return (
        <div id='id2' className='team'>
            <h2>Знакомьтесь, наша команда!</h2>
            <div className='team__description'>
                У каждого преподавателя есть суперсилы — они как персонажи из
                комиксов защищают учеников от скуки на уроках и разрушают
                языковые барьеры.
            </div>
            <div className='team__member'>
                <Image src={polina} alt='team' />
                <div className='team__member_right'>
                    <h3>Полина Кулагина</h3>
                    <p className='team__member_sign'>
                        Руководитель и старший преподаватель школы
                    </p>
                    <ul>
                        Суперсилы:
                        <li>Дипломированный филолог</li>
                        <li>6 лет преподаёт английский язык</li>
                        <li>Работает с учениками всех уровней и возрастов</li>
                    </ul>
                </div>
                <a
                    className='team__polina_a'
                    href='https://api.whatsapp.com/send?phone=79029250034&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%83%D1%80%D0%BE%D0%BA%20%D0%BA%20%D0%9F%D0%BE%D0%BB%D0%B8%D0%BD%D0%B5'
                    target='_blank'
                >
                    Записаться на пробный урок
                </a>
            </div>

            <div className='team__member'>
                <Image src={vika} alt='team' />
                <div className='team__member_right'>
                    <h3>Виктория</h3>
                    <p className='team__member_sign'>
                        Возраст учеников: от 4 до 9 лет
                    </p>
                    <ul>
                        Суперсилы:
                        <li>
                            Помогает дошкольникам быстро заговорить на
                            английском
                        </li>
                        <li>Сделает любой урок интерактивным</li>
                        <li>
                            С ней ученики начинают читать через месяц занятий
                        </li>
                    </ul>
                </div>
                <div className='team__btn'>
                    <a
                        href='https://api.whatsapp.com/send?phone=79029250034&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%83%D1%80%D0%BE%D0%BA%20%D0%BA%20%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%B8'
                        target='_blank'
                    >
                        Записаться на пробный урок
                    </a>
                    <a
                        href='https://www.youtube.com/shorts/WD7CcpLPQHM'
                        target='_blank'
                    >
                        Посмотреть видео-визитку
                    </a>
                </div>
            </div>

            <div className='team__member'>
                <Image src={nastya} alt='team' />
                <div className='team__member_right'>
                    <h3>Анастасия</h3>
                    <p className='team__member_sign'>
                        Возраст учеников: от 7 до 12 лет
                    </p>
                    <ul>
                        Суперсилы:
                        <li>Кидает спасательный круг в океан грамматики</li>
                        <li>
                            Объясняет самые сложные правила на подручных
                            предметах
                        </li>
                        <li>
                            Владеет секретной техникой удержания внимания
                            учеников
                        </li>
                    </ul>
                </div>
                <div className='team__btn'>
                    <a
                        href='https://api.whatsapp.com/send?phone=79029250034&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%83%D1%80%D0%BE%D0%BA%20%D0%BA%20%D0%90%D0%BD%D0%B0%D1%81%D1%82%D0%B0%D1%81%D0%B8%D0%B8'
                        target='_blank'
                    >
                        Записаться на пробный урок
                    </a>
                    <a
                        href='https://www.youtube.com/shorts/zWDVC4C43Vc'
                        target='_blank'
                    >
                        Посмотреть видео-визитку
                    </a>
                </div>
            </div>

            <div className='team__member'>
                <Image src={yana} alt='team' />
                <div className='team__member_right'>
                    <h3>Яна</h3>
                    <p className='team__member_sign'>
                        Возраст учеников: от 12 до 17 лет
                    </p>
                    <ul>
                        Суперсилы:
                        <li>
                            Готовит к поступлению в гимназию и лицей в сжатые
                            сроки
                        </li>
                        <li>
                            Доводит до высокой оценки на ОГЭ без слёз и
                            недосыпов
                        </li>
                    </ul>
                </div>
                <div className='team__btn'>
                    <a
                        href='https://wa.me/79029250034?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%83%D1%80%D0%BE%D0%BA%20%D0%BA%20%D0%AF%D0%BD%D0%B5'
                        target='_blank'
                    >
                        Записаться на пробный урок
                    </a>
                    <a
                        href='https://www.youtube.com/shorts/4LushIApUMI'
                        target='_blank'
                    >
                        Посмотреть видео-визитку
                    </a>
                </div>
            </div>
            <div className='team__member'>
                <Image src={daria} alt='team' />
                <div className='team__member_right'>
                    <h3>Дарья</h3>
                    <p className='team__member_sign'>
                        Возраст учеников: от 4 до 17 лет
                    </p>
                    <ul>
                        Суперсилы:
                        <li>Создаёт увлекательные уроки на любую тему</li>
                        <li>Разговорит любого стеснительного ученика</li>
                        <li>
                            Находит общий язык даже с самыми маленькими
                            учениками
                        </li>
                    </ul>
                </div>
                <div className='team__btn'>
                    <a
                        href='https://wa.me/79029250034?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BF%D0%B0%D1%81%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%83%D1%80%D0%BE%D0%BA%20%D0%BA%20%D0%94%D0%B0%D1%80%D1%8C%D0%B5'
                        target='_blank'
                    >
                        Записаться на пробный урок
                    </a>
                    <a
                        href='https://www.youtube.com/shorts/aeIWDrXYdms'
                        target='_blank'
                    >
                        Посмотреть видео-визитку
                    </a>
                </div>
            </div>
        </div>
    )
}
