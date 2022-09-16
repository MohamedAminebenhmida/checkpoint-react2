
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo from './Profile/ProfilePhoto';
import Add from './Profile/Address';
import Name from './Profile/FullName';

function App() {
  return (
    <div className="App">
      <Photo/>
      <Name/>
      <Add/>
    </div>


  );

}

export default App;

