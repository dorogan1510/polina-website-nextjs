import React from 'react'

export const WhoWeStudy = () => {
    return (
        <div className='study'>
            <h2>Кого мы обучаем?</h2>
            <div className='study__flex'>
                <div className='study__flex-item'>
                    <h3>Дошкольники от 3 до 6 лет</h3>
                    <ul>
                        <li>Научим ребёнка читать и писать</li>
                        <li>Подготовим к поступлению в школу</li>
                        <li>Поможем заговорить на английском</li>
                    </ul>
                </div>
                <div className='study__flex-item'>
                    <h3>Школьники от 7 до 12 лет</h3>
                    <ul>
                        <li>Повысим успеваемость по школьной программе</li>
                        <li>Решим трудности с домашними заданиями</li>
                        <li>Подготовим к контрольным и тестам</li>
                    </ul>
                </div>
                <div className='study__flex-item'>
                    <h3>Подростки от 12 до 17 лет</h3>
                    <ul>
                        <li>Подготовим к поступлению в гимназию</li>
                        <li>Поможем сдать ОГЭ и ЕГЭ на высокие баллы</li>
                        <li>
                            Подготовим к олимпиадам и вступительным экзаменам
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
