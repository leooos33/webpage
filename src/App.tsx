import { HashRouter, Routes, Route } from "react-router-dom";
import Founder from "./components/Founder";
import Blog from "./components/Blog";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Founder />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
