import Logo from './components/Logo';
import Presentation from './pages/Presentation';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <h1>React - POE Java</h1>
      </header>
      <Presentation />
    </div>
  );
}

export default App;
