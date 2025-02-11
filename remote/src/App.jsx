import "./App.css";
import Button from "./components/button/Button";
import useCount from "../store/store";

function App() {
  const [count, setCount] = useCount();

  return (
    <div className="App">
      <h1>Remote Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
