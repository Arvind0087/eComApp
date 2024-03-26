import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { routerList } from "./routes/routerList";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Dummy from "./pages/Dummy";

function App() {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_LEFT,
  };
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact component={<Dashboard />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Dashboard /> */}

      {/*<RouterProvider router={routerList} /> */}
      <Provider template={AlertTemplate} {...options}>
        <RouterProvider router={routerList} />
      </Provider>
      {/*<Dummy />  */}
    </div>
  );
}

export default App;
