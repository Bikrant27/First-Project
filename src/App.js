import './App.css';
import City from './components/City';

function App() {
  return (
    <div className="App">
      <City city="London" adjective="beautiful"/>
      <City city="Kathmandu" adjective="awesome"/>
      <City city="Beijing" adjective="great"/>
      <City city="Delhi" adjective="marvelous"/>      
    </div>
  );
}

export default App;
