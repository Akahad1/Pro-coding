import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import { router } from './Routes/Routes';

const ThemeContexte =createContext('light')



function App() {
  const [them,setThems]=useState("dark")
  const themeTogoole=()=>{
    setThems((cur)=>cur =="light"? 'dark':"light")
  }
  return (
    
    <div >
      
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
