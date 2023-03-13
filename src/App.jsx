import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import StateComponent from "./components/StateComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stateprops" element={<StateComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
