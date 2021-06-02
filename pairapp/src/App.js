import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';

function App() {
  return (
    <div>
      <WarningSign text="Danger Ahead!" />
      <MyBadge text="HAHA" color="primary" />
    </div>
  );
}

export default App;
