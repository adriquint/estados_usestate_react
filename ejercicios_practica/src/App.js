import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
import Counter from './components/Counter';
import NoteApp from './components/NoteApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Clase 2: ejercicios de práctica</h2>
        <NameList/>
        <Counter/>
        <NoteApp/>
      </header>
    </div>
  );
}

export default App;
