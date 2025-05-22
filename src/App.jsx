import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubmitStory from "./pages/SubmitStory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<SubmitStory />} />
    </Routes>
  );
}

export default App;