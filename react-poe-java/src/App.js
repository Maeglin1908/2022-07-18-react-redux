import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import Redux from "./pages/Redux";
import Routing from "./pages/Routing";
import Secret from "./pages/Secret";
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
                        <Route path="/async" element={<Data />} />
                        <Route path="/effetbord" element={<EffetBord />} />
                        <Route path="/crud" element={<Crud />} />
                        <Route path="/redux" element={<Redux />} />
                        <Route
                            path="/auth"
                            element={
                                <ProtectedRoute>
                                    <Authentication />
                                </ProtectedRoute>
                            }
                        />
                        {/* <Route path="/secret" element={<Secret />} /> */}
                        <Route
                            path="/secret"
                            element={
                                <ProtectedRoute>
                                    <Secret />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;

const ProtectedRoute = ({ children }) => {
    if (children.type === "Secret") {
        if (!localStorage.getItem("token")) {
            return <Navigate to="/auth" replace />;
        }
    } else if (children.type === "Authentication") {
        if (localStorage.getItem("token")) {
            return <Navigate to="/secret" replace />;
        }
    }
    return children;
};
