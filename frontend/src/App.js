import './App.css';
import TopBar from './components/topbar/topbar';
import Home from './components/home/home';
import Rose from './components/rose/rose';
import Propose from './components/propose/propose';
import Chocolate from './components/chocolate/chocolate';
import Teddy from './components/teddy/teddy';
import Promise from './components/promise/promise';
import Hug from './components/hug/hug';
import Kiss from './components/kiss/kiss';
import Valentines from './components/valentines/valentines';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect} from 'react';

function App() {


  return (
    <div> 
    <Router>
    <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/rose" element={<Rose/>}></Route>
        <Route exact path="/propose" element={<Propose/>}></Route>
        <Route exact path="/chocolate" element={<Chocolate/>}></Route>
        <Route exact path="/teddy" element={<Teddy/>}></Route>
        <Route exact path="/promise" element={<Promise/>}></Route>
        <Route exact path="/hug" element={<Hug/>}></Route>
        <Route exact path="/kiss" element={<Kiss/>}></Route>
        <Route exact path="/valentines" element={<Valentines/>}></Route>
     </Routes>
  </Router>
  </div>
  );
}

export default App;
