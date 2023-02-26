import { useState } from "react";
import axios from "axios";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/auth/register", {
        email: username,
        password,
      });
    } catch (err: any) {
      console.log(err);
      setError(err.response.data.message);
    }
  };
  return (
    <div className={styles.form}>
      {error && <div>{error}</div>}
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
      <button className={styles.button} onClick={onSubmit}>
        Register
      </button>
    </div>
  );
};

export default SignUpForm;
