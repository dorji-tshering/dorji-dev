import Image from 'next/image';

const About = () => {
  return (
    <div className="homeSectionContainer">
        <h3 className="text-center mb-10 text-xl font-[600]">ABOUT ME</h3>
        <div className="flex flex-col items-center relative -bottom-2 -mb-12">
            <Image 
                className="object-cover grayscale animate-pulse z-10 rounded-full p-[1px] border border-solid border-gray-600" 
                src="/images/dorji.jpg" 
                alt="dorji's photo" 
                width={200}
                height={200}
            />
            <p className="rounded pt-[110px] px-6 pb-7 sm:px-10 sm:pb-9 shadow-sm shadow-gray-500
                relative -top-20 max-w-2xl bg-darkBg text-center">
                I am a college dropout and hence a self-taught developer. I started learning
                web development at the start of 2020. Prior to that, I have had a little bit of experience
                coding in C language as taught in the college. Within the span of almost two years, 
                I have made myself familiar with Frontend, Backend, Mobile Application, and Wordpress development
                via personal projects mostly and a few client projects. However, as time went by, I have 
                committed myself fully to the Frontend aspect of the web development which I truly enjoy. 
            </p>
        </div>
    </div>
  )
}

export default About