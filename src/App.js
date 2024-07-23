import './app.css';
//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Internship from './components/Internship/Internship';
import Projects from "./components/Projects/Project";
import AboutMe from "./components/About Me/AboutMe";
import { useSelector } from "react-redux";
import Mode from './theme/mode';


const App = () => {

    // const location = useLocation();
    const theme = useSelector(state => state.theme);
    
    return (
        <div className="App" style={theme}>
            <Navbar />
            <Home />
            <Internship />
            <Projects />
            <AboutMe />
            <Footer />
            <Mode/>
        </div>
        
    )
}

export default App;