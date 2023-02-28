import { useState } from "react";
import axios from "axios";
import styles from "./SignUpForm.module.css";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {
          email: username,
          password,
        },
        { withCredentials: true }
      );
      if (res.status === 200) {
        console.log(res);
        router.push("/dashboard");
      }
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
      <button className={styles.button} onClick={onSubmit}>
        Register
      </button>
    </div>
  );
};

export default LoginForm;
