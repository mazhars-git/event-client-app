import "./App.css";
import Events from "./components/Events/Events";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Events />
      </div>
      <Footer />
    </>
  );
}

export default App;
