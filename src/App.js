import './App.css';
import {useState, useEffect} from 'react'
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from './views/Home';
import Search from './views/Search';


function App() {
  const url = "https://restcountries.com/v2/all";

  const [data, setData] = useState("");

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then( data => {
        console.log(data);
        setData(data);})
  },[])

  return (    
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {data && <Home data={data}/>}
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
