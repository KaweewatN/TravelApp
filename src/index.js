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
    
    <BrowserRouter basename="/TravelApp">
          <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/TouristSpots" element={<TouristSpots/>}></Route>
                <Route path="/TouristSpots/:id" element={<TouristSpotsID/>}></Route>
                <Route path="/AiPlanner/1" element={<AiPlanner_1/>}></Route>
                <Route path="/AiPlanner/2" element={<AiPlanner_2/>}></Route>
                <Route path="/AiPlanner/3" element={<AiPlanner_3/>}></Route>
          </Routes>
    </BrowserRouter>
      
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <App/>  
  );
