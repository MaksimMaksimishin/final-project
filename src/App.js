import React from 'react';
import { useSelector } from 'react-redux';
import GameBoard from './Game/GameBoard';
import Login from './components/Login';
import Logout from './components/Logout';
import './App.css';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Logout />
          <div>Welcome, {user.username}!</div>
          <GameBoard />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;