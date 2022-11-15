import { DM_Mono } from '@next/font/google';

const DmMono = DM_Mono({
    weight: '400'
});

const Landing = () => {
    return (
        <div className="bg-bgLanding bg-cover flex flex-col justify-center items-center relative h-screen">
            <p className="text-theme text-sm mb-8 lg:mb-10">Hello, I am</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 lg:mb-8">DORJI TSHERING</h1>
            <h4 className={`${DmMono.className} text-xs md:text-sm md:tracking-widest`}>FRONTEND / WORDPRESS DEVELOPER</h4>
            <p className="text-gray-500 relative top-20 text-sm">I love NextJs</p>
            <p className="hidden md:block absolute top-6 right-10 text-xs">Be Curious</p>
        </div>
    )
}

export default Landing