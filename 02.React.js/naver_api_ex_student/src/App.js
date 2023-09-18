import './App.css';
import './css/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './compo/Search';
import logo from './img/logo.png';
import { Routes, Route } from 'react-router-dom';
import NewsItem from './compo/NewsItem';
import { createContext, useState } from 'react';

export const NaverData = createContext();

function App() {
  const [searchData, setSearchData] = useState([]);

  return (
    <div className="App">
      <img className="logo" src={logo} alt="NAVER SEARCH API" />
      <div className="App-contents">
        <NaverData.Provider
          value={{ searchData: searchData, setSearchData: setSearchData }}
        >
          <Routes>
            <Route path="/" element={<Search />}></Route>
            <Route path="/news" element={<NewsItem></NewsItem>}></Route>
          </Routes>
        </NaverData.Provider>
      </div>
    </div>
  );
}

export default App;
