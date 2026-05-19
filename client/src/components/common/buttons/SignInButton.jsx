import { useNavigate } from "react-router";
import styles from "./SignInButton.module.css";

const SignInButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/auth/signin")} className={styles.button}>
      Sign in
    </button>
  );
};
export default SignInButton;
