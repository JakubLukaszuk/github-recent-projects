import './App.sass';
import {Route, Switch, Redirect} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/HomePage/HomePage';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import Assumptions from './pages/AssumptionsPage/AssumptionsPage';


function App() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component = {Home}/>
      <Route path={ROUTES.NOT_FOUND} component = {NotFound}/>
      <Route path={ROUTES.ASSUMPTIONS} component ={Assumptions}/>
      <Redirect to={ROUTES.NOT_FOUND}/>
  </Switch>
  );
}

export default App;
