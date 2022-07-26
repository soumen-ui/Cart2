import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

function App() {
  return (
    <div className="App">
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
