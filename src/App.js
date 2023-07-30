import "./App.css";
// import Loading from "./components/Loading/Loading";
import Login from "./components/Login/Login";
import PasswordReset from "./components/Password reset/PasswordReset";
import PopUp2 from "./components/PopUp2/PopUp2.jsx";


import PasswordResetSuccess from "./components/password reset success/PasswordResetSuccess";

// import UserSignup from "./components/user signup/UserSignup";
// import Verification from "./components/verification/Verification";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <PasswordReset />
        <PasswordResetSuccess />
        <PopUp2/>
        
      </header>
    </div>
  );
}

export default App;
