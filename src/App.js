import './App.scss';
import './components/Header/Header';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import PriceBox from './components/PriceBox/PriceBox';
import Record from './components/Record/Record';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Slider />
            <PriceBox />
            <Record />
            <div className="social" />
        </div>
    );
}

export default App;
