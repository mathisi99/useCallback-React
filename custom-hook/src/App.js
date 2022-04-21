import './App.css';
import useLocalStorage from './useLocalStorage';

function App() {
  const [textInput, setTextInput] = useLocalStorage("name", "");
  return (
    <div className="App">
      <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)}></input>
    </div>
  );
}

export default App;
