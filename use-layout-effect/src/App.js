import './App.css';
import {useEffect, useLayoutEffect, useRef, useState} from "react";
function App() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();
  /*
  useEffect will asynchronously running, it mean that when we click button,
   have a moment the div "This is a popup" will right below the button, then + 50 px
  but when use useLayoutEffect it run synchronously, 
  so it will wait the function done (setting the top of popup )
  then going to render out
  */
  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const {bottom} = button.current.getBoundingClientRect()
    popup.current.style.top = `${bottom + 50}px`
  }, [show])

  return (
    <div className="App">
      <button ref={button} onClick={() => setShow(!show)}>Toggle Show/Hide</button>
      {show && (
        <div style={{position: "absolute"}} ref={popup}>
          This is a popup
        </div>
      )}
    </div>
  );
}

export default App;
