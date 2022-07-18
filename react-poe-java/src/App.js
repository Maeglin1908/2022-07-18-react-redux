import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Presentation from "./pages/Presentation";
import Routing from "./pages/Routing";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Logo />
          <h1>React - POE Java</h1>
        </header>
        <Navigation />
        <main className="main">
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path="/routing" element={<Routing />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
