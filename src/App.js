import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import ListForestComponent from './components/ListForestComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateForestComponent from './components/CreateForestComponent';
import ListWorkerComponent from './components/ListWorkerComponent';
import CreateWorkerComponent from './components/CreateWorkerComponent';
import ListSensorComponent from './components/ListSensorComponent';
import CreateSensorComponent from './components/CreateSensorComponent';
import SwitchDutiesComponent from './components/SwitchDutiesComponent';
import ListReportComponent from './components/ListReportComponent';
import UpdateSensorComponent from './components/UpdateSensorComponent';
import ListCoverageComponent from './components/ListCoverageComponent';
import UpdateForestComponent from './components/UpdateForestComponent';
import ListTopKWorkerComponent from './components/ListTopKWorkerComponent';
import ListSensorRankingComponent from './components/ListSensorRankingComponent';
import ListStateComponent from './components/ListStateComponent';
import CreateStateComponent from './components/CreateStateComponent';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path='/' exact component = {Home}></Route>
                <Route path='/forest' component = {ListForestComponent}></Route>
                <Route path='/add-forest' component = {CreateForestComponent}></Route>
                <Route path='/worker' component = {ListWorkerComponent}></Route>
                <Route path='/add-worker' component = {CreateWorkerComponent}></Route>
                <Route path='/sensor' component = {ListSensorComponent}></Route>
                <Route path='/add-sensor' component = {CreateSensorComponent}></Route>
                <Route path='/switch-duty' component = {SwitchDutiesComponent}></Route>
                <Route path='/report' component = {ListReportComponent}></Route>
                <Route path='/update-sensor' component = {UpdateSensorComponent}></Route>
                <Route path='/coverage' component = {ListCoverageComponent}></Route>
                <Route path='/update-forest' component = {UpdateForestComponent}></Route>
                <Route path='/topk' component = {ListTopKWorkerComponent}></Route>
                <Route path='/ranking' component = {ListSensorRankingComponent}></Route>
                <Route path='/state' component = {ListStateComponent}></Route>
                <Route path='/add-state' component = {CreateStateComponent}></Route>
                <Route path='/home' component = {Home}></Route>
              </Switch>
            </div>
          {/* <FooterComponent/> */}
      </Router>
    </div>
  );
}

export default App;
