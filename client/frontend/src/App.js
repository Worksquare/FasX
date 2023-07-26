import "./App.css";
import Login from "./components/Login/Login";
import PasswordReset from "./components/Password reset/PasswordReset";
import PasswordResetSuccess from "./components/password reset success/PasswordResetSuccess";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <PasswordReset />
        <PasswordResetSuccess />
      </header>
    </div>
  );
}

export default App;
