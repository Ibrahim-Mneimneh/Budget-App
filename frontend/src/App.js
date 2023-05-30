import "./index.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Error from "./pages/error.jsx";
import { dashboardLoader } from "./pages/Dashboard";
import { homeLoader } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        error: <Error />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
