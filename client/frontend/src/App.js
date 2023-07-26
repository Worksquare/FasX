import "./App.css";
import Login from "./components/Login/Login";
import PasswordReset from "./components/Password reset/PasswordReset";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <PasswordReset />
      </header>
    </div>
  );
}

export default App;
