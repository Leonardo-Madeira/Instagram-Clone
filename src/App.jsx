import {db} from './firebase.js';
import {useEffect , useState} from 'react'

export function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(db);
  }, [])

  return(
    <div className="app">
      <h1>Hello, world!</h1>
    </div>
  );
};

