import './App.css';
import Theory from './features/theory/theory';
import { Practical } from './features/practical/practical';
import User from './features/users/user';

function App() {
  return (
    <div className="App">
      <Theory />
      <Practical />
      <User />
    </div>
  );
}

export default App;
