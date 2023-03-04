import { ChangeEvent, useState } from "react";
import axios from "axios";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [noMatch, setNoMatch] = useState(false);
  const [error, setError] = useState("");

  let passwordConfirmInputClasses = `${styles.input}`;

  if (noMatch) {
    passwordConfirmInputClasses += ` ${styles["no-match"]}`;
  }

  const passwordConfirmHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event.target.value);
    console.log(
      event.target.value[event.target.value.length - 1],
      password[event.target.value.length - 1]
    );
    if (
      event.target.value[event.target.value.length - 1] !==
      password[event.target.value.length - 1]
    ) {
      setNoMatch(true);
    } else {
      setNoMatch(false);
    }
  };

  const onSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/auth/register", {
        email: username,
        password,
        passwordConfirm,
      });
    } catch (err: any) {
      console.log(err);
      setError(err.response.data.message);
    }
  };
  return (
    <div className={styles.form}>
      {error && <div className={styles.error}>{error}</div>}
      <label htmlFor="username" className={styles.label}>
        email
      </label>
      <input
        type="email"
        id="username"
        className={styles.input}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password" className={styles.label}>
        password
      </label>
      <input
        type="password"
        id="password"
        className={styles.input}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirm" className={styles.label}>
        confirm password
      </label>
      <input
        type="password"
        id="confirm"
        className={passwordConfirmInputClasses}
        onChange={passwordConfirmHandler}
      />
      <button className={styles.button} onClick={onSubmit}>
        Register
      </button>
    </div>
  );
};

export default SignUpForm;
