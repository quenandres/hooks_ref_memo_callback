import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('gentleman');
  
  const changedName = useMemo(() => {
    return `Gentleman ${name}`;
  }, [name]);
  
  const handleClick = () => {
    setName('Alan');
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleClick}>Click here to change name</button>
      {changedName}
    </div>
  );
}

export default App;
