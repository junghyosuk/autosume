import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Write from "./pages/Write";
import List from "./pages/List";
import View from "./pages/View";
import Settings from "./pages/Settings";
import Export from "./pages/Export";
import MyPage from "./pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "write", element: <Write /> },
      { path: "list", element: <List /> },
      { path: "view/:id", element: <View /> },
      { path: "settings", element: <Settings /> },
      { path: "export", element: <Export /> },
      { path: "mypage", element: <MyPage /> },
    ],
  },
]);

export default router;
