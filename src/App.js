import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Drawer from "./components/Drawer";





function App() {
  return (
    <div >
    <BrowserRouter>
      <Header/>
      <Body />
   
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
