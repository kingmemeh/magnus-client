import "./partials/global.scss"
import './App.css';
import requests from './request';
import Row from './component/Row/Row';
import Banner from './component/Banner/Banner'
import NavBar from "./component/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner fetchURL={requests.findTopRated}/>
      <Row title="Top-Rated" fetchURL={requests.findTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Animated Movies" fetchURL={requests.fecthAnimatedMovies}/>

    </div>
  );
}

export default App;
