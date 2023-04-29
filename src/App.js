import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import { PostContext } from './components/PostContext';



function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  return (
    <PostContext.Provider value={{ selectedPostId, setSelectedPostId }}>
      <div className="App">
        <Dashboard />
      </div>
    </PostContext.Provider>
  );
}

export default App;
