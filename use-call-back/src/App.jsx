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
  /*
  when using useCallback then when click button to toggle theme
  "Updating Items" won't log out.
  useCallback vs useMemo, useMemo will take the result [num, num+1, num+2]
  but useCallback will take whole function.
  even we set it const but when don't use useCallback / useMemo
  this function will be re-create when others change, in this case that is toggle theme
  */
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
