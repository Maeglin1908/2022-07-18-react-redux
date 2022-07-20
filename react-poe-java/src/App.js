import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Formulaire from "./pages/Formulaire";
import Presentation from "./pages/Presentation";
import Projet from "./pages/Projet";
import Props from "./pages/Props";
import Reactivity from "./pages/Reactivity";
import Routing from "./pages/Routing";
import StaticData from "./pages/StaticData";
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
                        <Route path="/projet" element={<Projet />} />
                        <Route path="/statics" element={<StaticData />} />
                        <Route path="/props" element={<Props />} />
                        <Route path="/reactivity" element={<Reactivity />} />
                        <Route path="/forms" element={<Formulaire />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
