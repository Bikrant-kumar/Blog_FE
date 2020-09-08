import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './Component/Atoms/Loading';
import Home from './Component/Pages/Home';
 
function App() {
  const { isLoading } = useAuth0();
  if(isLoading){
    return(
      <div>
          <Loading/>
      </div>
    )
  }

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
