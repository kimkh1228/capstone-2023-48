import { Link } from "react-router-dom";
import '../../assets/styles/signInButton.style.scss'

const SignInButton = () => {

  return (
    <button className="custom-button sign-in-button">
      <Link className="sign-in-link" to='/projectList'>    
        Sign In 
      </Link>
    </button>
  );
};

export default SignInButton;