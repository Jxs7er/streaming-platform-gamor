import { useNavigate } from "react-router";
import styles from "./SignUpButton.module.css";

const SignUpButton = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.button} onClick={() => navigate("/auth/signup")}>
      Create account
    </button>
  );
};
export default SignUpButton;
