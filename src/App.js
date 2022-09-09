import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';


function App() {
   return (
      <div>
         <BrowserRouter>
            <BaseLayout/> 
         </BrowserRouter>
      </div>
   );
}


export default App;
