import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import StateCounter from './components/StateCounter';
import ItemComponent from './components/ItemComponent';
import {useState} from 'react'
import ThemeContext from './components/ThemeContext';
import ThemeConsumer from './components/ThemeConsumer';

function App() {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <StateCounter />
      <ItemComponent />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeConsumer />
      </ThemeContext.Provider>
    </div>  
  );
}

export default App;