import Image from 'next/image'
import { HeroSection } from './components/HeroSection'
import { WhoWeStudy } from './components/WhoWeStudy'
import { Benefits } from './components/Benefits'
import { Team } from './components/Team'
import { Reviews } from './components/Reviews'
import { Prices } from './components/Prices'
import { Offer } from './components/Offer'

export default function Home() {
    return (
        <>
            <HeroSection />
            <main>
                <WhoWeStudy />
                <Benefits />
                <Team />
                <Prices />
                <Reviews />
                <Offer />
            </main>
        </>
    )
}
