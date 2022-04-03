import "./partials/global.scss"
import './App.css';
import requests from './request';
import Row from './component/Row/Row';
import Banner from './component/Banner/Banner'
function App() {
  return (
    <div className="App">
      <Banner fetchURL={requests.findTopRated}/>
      <Row title="Top-Rated" fetchURL={requests.findTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Animated Movies" fetchURL={requests.fecthAnimatedMovies}/>

    </div>
  );
}

export default App;
