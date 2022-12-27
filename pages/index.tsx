import About from "../components/home/About"
import Contact from "../components/home/Contact"
import Landing from "../components/home/Landing"
import TechStack from "../components/home/TechStack"
import Work from "../components/home/Work"
import Head from 'next/head'
import HomeSectionSeparator from '../components/HomeSectionSeparator'

export default function Home() {
    
    return (
        <div className="flex flex-col">
            <Head>
                <title>Dorji &bull; Developer</title> 
                <meta key='index' name='description' content='I am a Frontend/Wordpress developer who enjoys building the face of web applications.' />
            </Head>
            {/* landing */}
            <Landing/>
            <HomeSectionSeparator header='work'/>
            {/* work */}
            <Work/>
            <HomeSectionSeparator header='about'/>
            {/* about */}
            <About/>
            <HomeSectionSeparator header='stack'/>
            {/* stack */}
            <TechStack/>
            <HomeSectionSeparator header='contact'/>
            {/* contact */}
            <Contact/>
        </div>
    )
}
