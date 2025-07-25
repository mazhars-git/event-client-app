/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import HomePage from "./components/Home/Home";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import UpdateEvent, { type Event } from "./components/UpdateEvent/UpdateEvent";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route
            path="/update-event"
            element={
              <UpdateEvent
                event={{
                  _id: undefined,
                  title: "",
                  date: "",
                  time: "",
                  notes: "",
                  category: "Work",
                }}
                onUpdate={function (_updatedEvent: Event): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
