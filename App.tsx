import {
  React,
  // StaticRouter,
} from "./dep/index.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
    }
  }
}

// const About = () => {
//   return (
//     <StaticRouter>
//       <div>
//         <h1>About</h1>
//         <p>About page for React SSR base on Deno</p>
//       </div>
//     </StaticRouter>
//   );
// };

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