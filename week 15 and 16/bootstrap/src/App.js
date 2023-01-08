import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template1 from "./template1";
import Template2 from "./template2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template1 />}></Route>
        <Route path="/template2" element={<Template2 />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
