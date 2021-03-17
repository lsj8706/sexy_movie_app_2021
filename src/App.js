import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from"./routes/About";
import Home from"./routes/Home";
import Detail from"./routes/Detail";
import Navigation from"./components/Navigation";

function App(){
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
  //위의 exact는 url이 정확히 /로 끝나야만 home을 가져오도록 하게함
  );
}

export default App;