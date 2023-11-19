import { useState } from "react";
import "./App.scss";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="justify-center flex">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/assets/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src="/assets/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PWA + Vite + React + TypeScript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p className="mt-3">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}
