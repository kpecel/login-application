import MyRoutes from "./app/routes/myRoutes";
import { UserProvider } from "./app/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MyRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
