import React from 'react'
import { Route } from 'react-router-dom'
import LandingScreen from './screens/LandingScreen'

function App() {
  return (
    <div className="App container mx-auto">
      <Route exact path='/' component={LandingScreen} />
    </div>
  );
}

export default App;
