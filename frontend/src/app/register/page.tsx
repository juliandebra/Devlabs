import Register from "../components/Register";
import styles from "../styles/form.module.scss";
export default function RegisterPage() {
  return (
    <div className={styles.formpage}>
      <h1>Sign up</h1>
      <Register />
    </div>
  );
}
