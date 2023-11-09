import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import AddGeoMap from './Components/AddGeoMap';
import ViewAllMaps from './Components/ViewAllMaps';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" component ={Home}/>
          <Route path="/map/:name" component ={AddGeoMap}/>
          <Route path="/viewAllMaps" component={ViewAllMaps} />
        </Routes>

      </Router>
     

     
    </div>
  );
}

export default App;