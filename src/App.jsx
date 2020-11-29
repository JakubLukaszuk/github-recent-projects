import './App.sass';
import {Route, Switch, Redirect} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/HomePage/HomePage';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import Assumptions from './pages/AssumptionsPage/AssumptionsPage';
import MainLayout from './layouts/MainLayout/MainLayout';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path={ROUTES.HOME} component = {Home}/>
        <Route path={ROUTES.NOT_FOUND} component = {NotFound}/>
        <Route path={ROUTES.ASSUMPTIONS} component ={Assumptions}/>
        <Redirect to={ROUTES.NOT_FOUND}/>
      </Switch>
    </MainLayout>
  );
}

export default App;
