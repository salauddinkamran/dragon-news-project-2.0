import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10 mb-5">Counting Number is = {count}</h1>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="btn btn-primary text-2xl"
      >
        click 
      </button>
      {/* <button className="btn" onClick={ }>Reset</button> */}
    </>
  );
}

export default App;
