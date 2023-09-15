import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

export const NaverData = createContext();

function App() {
  const [searchData, setSearchData] = useState([]);

  return (
    <div className="App">
      <NaverData.Provider
        value={{ searchData: searchData, setSearchData: setSearchData }}
      >
        {/* <Routes>
          <Route path="/" element={<Nav />}></Route>
        </Routes> */}
        <Nav></Nav>
        <Main></Main>
      </NaverData.Provider>
    </div>
  );
}

export default App;
