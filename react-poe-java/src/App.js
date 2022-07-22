import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Authentication from "./pages/Authentication";
import Crud from "./pages/Crud";
import Data from "./pages/Data";
import EffetBord from "./pages/EffetBord";
import Formulaire from "./pages/Formulaire";
import Presentation from "./pages/Presentation";
import Projet from "./pages/Projet";
import Props from "./pages/Props";
import Reactivity from "./pages/Reactivity";
import Routing from "./pages/Routing";
import StaticData from "./pages/StaticData";
import Secret from "./pages/Secret";

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
                        <Route path="/async" element={<Data />} />
                        <Route path="/effetbord" element={<EffetBord />} />
                        <Route path="/crud" element={<Crud />} />
                        <Route path="/auth" element={<Authentication />} />
                        <Route path="/secret" element={<Secret />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
