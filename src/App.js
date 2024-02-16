import "./App.css";
import Counter from "./pages/counterPage/Counter";
import Dashboard from "./pages/dashboard/Dashboard";
import {
  RouterProvider,
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { routerList } from "./routes/routerList";

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
    </div>
  );
}

export default App;
