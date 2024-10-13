import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Home/Home.jsx";
import Login  from "../src/Login/Login_Page.jsx";
import Report from "../src/Report/Report.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Report",
    element: <Report/>,
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App