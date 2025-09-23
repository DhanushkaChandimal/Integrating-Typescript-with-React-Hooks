import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import StateCounter from './components/StateCounter';
import ItemComponent from './components/ItemComponent';

function App() {
  return (
    <div>
      <StateCounter />
      <ItemComponent />
    </div>  
  );
}

export default App;