import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import TouristSpots from "./components/TouristSpots"
import TouristSpotsID from "./components/TouristSpotsID"
import AiPlanner_1 from "./components/AIplanner1"
import AiPlanner_2 from "./components/AIplanner2"
import AiPlanner_3 from "./components/AIplanner3"

function App() {

  return (
    <BrowserRouter>
      <div>
          <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/TouristSpots" element={<TouristSpots/>}></Route>
                <Route path="/TouristSpots/:id" element={<TouristSpotsID/>}></Route>
                <Route path="/AiPlanner/1" element={<AiPlanner_1/>}></Route>
                <Route path="/AiPlanner/2" element={<AiPlanner_2/>}></Route>
                <Route path="/AiPlanner/3" element={<AiPlanner_3/>}></Route>
          </Routes>
      </div>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
    <App/> 
  );

// ReactDOM.render(
//   <BrowserRouter> 
//       <App/> 
//   </BrowserRouter>
//   , document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
