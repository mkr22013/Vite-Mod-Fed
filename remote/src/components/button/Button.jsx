import React from "react";
import "./Button.css";
import useCount from "remote/store";

function Button() {
  const [state, setState] = useCount();
  return (
    <div>
      <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
        Click me: {state}
      </button>
    </div>
  );
}

export default Button;
