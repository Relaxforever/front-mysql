import './App.css';
import { GlobalContextProvider } from './context/ApplicationContext'
import Form from './components/molecules/Form.js'
function App() {
  return (
    <GlobalContextProvider>
      <header>
        <div className="m-header">
          <h2>Sistema Biblioteca</h2>
        </div>
      </header>
      <div className="App">
        <Form />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
