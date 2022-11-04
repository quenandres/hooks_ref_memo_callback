import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('gentleman');
  
  useEffect(() => {  
    console.log('rendered');
    return () => {} // Cuando el componente se destruya
  }, [name]);
  

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={() => setName('Alan')}>Click here to change name</button>
    </div>
  );
}

export default App;
