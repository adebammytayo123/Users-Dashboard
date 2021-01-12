import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Users from "./components/Users";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
      </div>
   </Provider>
  );
}

export default App;
