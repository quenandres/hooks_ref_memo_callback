import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('gentleman');
  
  const changedName = useMemo(() => {
    return `Gentleman ${name}`;
  }, [name]);
  
  const handleClick = useCallback(() => {
    setName('Alan');
  }, [name]);

  return (
    <div className="App">
      <h1>{name}</h1>
      <ChangeName changeName={handleClick} />
    </div>
  );
}


export const ChangeName = ({changeName}) => {

  return (
    <div>
      <button onClick={changeName}>Click here to change name</button>
    </div>
  );
}


export default App;
