import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import HomePage from "./components/Home/Home";
import CreateEvent from "./components/CreateEvent/CreateEvent";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
