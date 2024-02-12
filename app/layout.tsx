import type { Metadata } from 'next'
import { Inter, Roboto, Roboto_Slab } from 'next/font/google'
import './styles/globals.scss'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
    display: 'swap',
})

const roboto_slab = Roboto_Slab({
    subsets: ['latin'],
    variable: '--font-roboto-slab',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Онлайн-школа английского языка',
    description:
        'Polly Glotiki — онлайн-школа английского языка для детей и подростков от 4 до 17 лет. Доводим до результата с помощью игр и меняем «надо» на «хочу»!',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='ru'>
            <body className={`${roboto.variable} ${roboto_slab.variable}`}>
                {children}
            </body>
        </html>
    )
}
