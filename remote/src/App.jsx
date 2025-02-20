import "./App.css";
import Button from "remote/Button";
import useCount from "remote/store";

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
