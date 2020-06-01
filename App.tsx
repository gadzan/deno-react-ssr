/// <reference path="./jsx.d.ts" />
import {
  React,
} from "./dep/index.ts";

const App = () => {
  const [count, setCount] = (React as any).useState(0);
  return (
    <div>
      <h1>Hello DenoLand!</h1>
      <button onClick={() => setCount(count + 1)}>Click the 🦕</button>
      <p>You clicked the 🦕 {count} times</p>
    </div>
  );
};

export default App;