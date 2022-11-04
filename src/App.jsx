import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('gentleman');
  const refButton = useRef(null);
  
  useEffect(() => {  
    console.log('rendered');
    return () => {} // Cuando el componente se destruya
  }, [name]);

  const handleClick = () => {
    setName('Alan');
    if( name !== 'Gentleman' ) refButton.current.style.color = 'red';
  }
  

  return (
    <div className="App">
      <h1>{name}</h1>
      <button ref={refButton} onClick={handleClick}>Click here to change name</button>
      <button onClick={() => refButton.current.click()}>Click here to other button clone</button>
    </div>
  );
}

export default App;
