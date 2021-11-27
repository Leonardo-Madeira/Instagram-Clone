import './styles/global.scss'
import { Header } from './components/Header';
import { useState, useEffect } from 'react';
//import {db} from './firebase.js'

export function App() {
  const [user, setUser] = useState('')

  return(
      <Header setUser={setUser} user={user} />
  );
}

