import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CustomList from "./pages/CustomList"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customList" element={<CustomList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
