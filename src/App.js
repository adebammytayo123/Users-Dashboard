import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from "./store";
import Users from "./components/users/Users";
import Edit from './components/edit/Edit';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Switch>
              <Route exact path="/" component={Users} />
              <Route  path="/contact/edit/:id" component={Edit} />
          </Switch>
      </div>
      </Router>
   </Provider>
  );
}

export default App;
