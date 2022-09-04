import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const WidgetDivs = document.querySelectorAll(".widget-ant");

WidgetDivs.forEach((Div) => {
  const root = ReactDOM.createRoot(Div);
  root.render(
    <React.StrictMode>
      <App domElement={Div} />
    </React.StrictMode>
  );
});
