import MyRoutes from "./app/routes/myRoutes";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <MyRoutes />
      </RecoilRoot>
    </div>
  );
}

export default App;
