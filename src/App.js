import "./App.css";
import Counter from "./pages/counterPage/Counter";
import Dashboard from "./pages/dashboard/Dashboard";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { routerList } from "./routes/routerList";
import Dummy from "./pages/Dummy";

function App() {
  return (
    <div className="App">
      {/*<Counter /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact component={<Dashboard />} />
        </Routes>
  </BrowserRouter> */}
      {/* <Dashboard /> */}
      <RouterProvider router={routerList} />

      {/*<Dummy />  */}
    </div>
  );
}

export default App;
