import "./App.css";
import Login from "./components/Login/Login";
import PasswordReset from "./components/Password reset/PasswordReset";
import PasswordResetSuccess from "./components/password reset success/PasswordResetSuccess";
// import VerificationSuccess from "./components/verification success/VerificationSuccess";
// import UserSignup from "./components/user signup/UserSignup";
import Verification from "./components/verification/Verification";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <PasswordReset />
        <PasswordResetSuccess />
        {/* <UserSignup /> */}
        <Verification />
        {/* <VerificationSuccess /> */}
      </header>
    </div>
  );
}

export default App;
