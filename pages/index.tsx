import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Landing from "../components/home/Landing";
import TechStack from "../components/home/TechStack";
import Work from "../components/home/Work";


export default function Home() {

    return (
        <div className="flex flex-col">
            {/* landing */}
            <Landing/>
            {/* work */}
            <Work/>
            {/* about */}
            <About/>
            {/* stack */}
            <TechStack/>
            {/* contact */}
            <Contact/>
        </div>
    )
}
