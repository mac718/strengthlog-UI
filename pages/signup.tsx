import SignUpForm from "@component/components/SignUpForm";
import styles from "./signup.module.css";

const SignUpPage = () => {
  return (
    <div className={styles.page}>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
