
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonsComponent from './components/ButtonsComponent';
import CountComponent from './components/CountComponent';

function App() {
  return (
    <div className="contaner">
      <div className="row">
        <div className='col'>
          <ButtonsComponent />
        </div>
        <div className='col'>
          <CountComponent />
        </div>

      </div>
    </div>
  );
}

export default App;
