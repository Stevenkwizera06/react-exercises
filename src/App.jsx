import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Captures from "./pages/Captures";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stateprops" element={<Captures />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


