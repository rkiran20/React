
import './App.css';
import Form from './components/Form';

function App() {
  const fruitsArrray = ["apple", "oranges", "grapes"];

  return (
    <div className="App">
      <h2>i am written in jsx</h2>
      <p>The total number of items in fruitsArrray are {fruitsArrray.length} </p>
      <div>we will build an inline search form</div>
      < Form />
      
    </div>
  );
}

export default App;
