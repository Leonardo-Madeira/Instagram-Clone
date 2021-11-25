import {db} from './firebase.js';
import {useEffect , useState} from 'react'

import './App.scss'

export function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(db);
  }, [])

  return(
    <div className="app">
      <div className="header">
        <div className="headerLogo">
          <a href=""><img src="" alt="" /></a>
        </div>

        <div className="headerloginForm">
          <form action="">
            <input type="text" placeholder="Login" />
            <input type="password" placeholder="Senha" name="" id="" />
            <input type="submit" name="acao"  value="Logar!" />
          </form>
        </div>
      </div>
    </div>
  );
};

