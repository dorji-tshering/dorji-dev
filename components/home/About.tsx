import Image from 'next/image';

const About = () => {
  return (
    <div className="homeSectionContainer  bg-bgAbout">
        <h3 className="text-center text-gray-300 mb-10">ABOUT ME</h3>
        <div className="flex flex-col items-center">
            <Image 
                className="object-cover z-10 rounded-full p-[1px] border border-solid border-gray-600" 
                src="/images/dorji.jpg" 
                alt="dorji's photo" 
                width={200}
                height={200}
            />
            <p className="border border-solid rounded border-theme pt-[100px] px-6 pb-6
                relative -top-20 max-w-2xl bg-black/60 text-center">
                I am a college dropout and hence a self-taught developer. 
                I love web development and have also touched on mobile app development with React Native. 
                I also loved trying out NestJs for backend development. 
                Currently I am developing an ecommerce website with Wordpress and Woocommerce + I am learning NextJs as well!
            </p>
        </div>
    </div>
  )
}

export default About