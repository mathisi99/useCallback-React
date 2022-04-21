import { useCallback, useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [num, setNum] = useState(1);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333"
  }
  
  const getItems = useCallback(() => {
    return [num, num+1, num+2];
  }, [num])

  return (
    <div style={theme} className="App">
      <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value))} />
      <button onClick={() => setDark(!dark)}>Toggle Themes</button>
      {/* {getItems().map(number => <List number={number}/>)} */}
      {<List getItems={getItems} />}
    </div>
  );
}

export default App;
