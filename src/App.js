import { useState } from "react";
import NavigationBar from "./components/global/navigationbar";
import Charactor from "./components/global/Charactor";
import {Router,Route, Routes} from 'react-router-dom'
import SelectedCharactor from "./components/global/SelectedCharactor";

function App() {
 
  return (
     <div className="w-full max-w-[1440px] h-3/4 items-center justify-center text-center">
    <NavigationBar/>
    <div className="items-center justify-center mx-auto w-[90%] mt-[6rem] ">
{/* <Charactor/> */}
 </div>
<Routes>
  <Route path="/" element={<Charactor/>}/>
  <Route path="/:id" element={<SelectedCharactor/>}/>
  
</Routes>

   
  </div>
  );
}

export default App;
