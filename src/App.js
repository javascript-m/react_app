import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import FoodTracker from './Pages/FoodTracker/FoodTracker';

const App = () => {
  return (
    <div className="App">
      <Layout></Layout>
      <FoodTracker></FoodTracker>
    </div>
  );
}

export default App;
