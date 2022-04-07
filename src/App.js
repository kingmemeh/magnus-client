import "./partials/global.scss"
import './App.css';
import requests from './request';
import Row from './component/Row/Row';
import Banner from './component/Banner/Banner'
import NavBar from "./component/NavBar/NavBar";
import TVHomeDetails from "./component/TVHomeDetails/TVHomeDetails";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner fetchURL={requests.findTopRated}/>
      <div className="index__row-container">
      <Row title="Top-Rated" fetchURL={requests.findTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Animated Movies" fetchURL={requests.fecthAnimatedMovies}/>
      <TVHomeDetails title="Trending TV" fetchURL={requests.fetchTrendingTV}/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
