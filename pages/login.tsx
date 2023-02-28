import LoginForm from "@component/components/LoginForm";
import styles from "./signup.module.css";

const LoginPage = () => {
  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
