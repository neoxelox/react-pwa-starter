import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import Router from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
