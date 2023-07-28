import "./App.css";
import Login from "./components/Login/Login";
import PasswordReset from "./components/Password reset/PasswordReset";
import RiderSignUp from "./components/RiderSignUp/RiderSignUp";
import PasswordResetSuccess from "./components/password reset success/PasswordResetSuccess";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <PasswordReset />
        <PasswordResetSuccess />
        <RiderSignUp />
      </header>
    </div>
  );
}

export default App;
