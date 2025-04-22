import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil"; // ✅ RecoilRoot import
import router from "./routes/router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot> 
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
