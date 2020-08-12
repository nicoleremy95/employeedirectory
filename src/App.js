import React from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron/jumbotron"
import Wrapper from "./components/Wrapper/wrapper"
import SearchForm from "./components/SearchForm/searchform"
import SearchResultContainer from './components/SearchResultContainer/searchresultcontainer';

function App() {
  return (

    <div className="App">
      <Jumbotron/>
      <Wrapper>
        
        <SearchResultContainer/>
      </Wrapper>
    </div>
  );
}

export default App;
