import './App.scss';
import './components/Header/Header';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import PriceBox from './components/PriceBox/PriceBox';
import Record from './components/Record/Record';
import SocialBox from './components/SocialBox/SocialBox';

function App() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    return (
        <div className="wrapper">
            <Header />
            <Slider />
            <PriceBox />
            <Record />
            <SocialBox />
        </div>
    );
}

export default App;
