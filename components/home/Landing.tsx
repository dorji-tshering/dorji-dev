
const Landing = () => {
    return (
        <div className="homeSectionContainer flex flex-col justify-center items-center relative h-[calc(100vh-40px)]">
            <p className="text-theme text-sm mb-8 lg:mb-10">Hello, I am</p>
            <h1 className="text-3xl font-[700] sm:text-4xl md:text-5xl animate-textGlow lg:text-7xl mb-6 lg:mb-8">DORJI TSHERING</h1>
            <h4 className="text-xs md:text-sm md:tracking-widest font-['mali']">
                FRONTEND / WORDPRESS DEVELOPER
            </h4>
            <p className="text-gray-500 relative top-20 text-sm">I love NextJs</p>
            <p className="hidden md:block absolute top-6 right-10 text-xs">Be Curious</p>
        </div>
    )
}

export default Landing