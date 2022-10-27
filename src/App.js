import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import { router } from './Routes/Routes';





function App() {
  
  return (
    
    <div >
      
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
