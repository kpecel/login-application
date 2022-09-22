//import "./App.css";
//import LoginForm from "./app/components/Login";
import MyRoutes from "./app/routes/myRoutes";
import { Provider } from "react-redux";
import store from "./app/store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    </div>
  );
}

export default App;
