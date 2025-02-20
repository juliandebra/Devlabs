import { cookies } from "next/headers";
import Login from "../components/Login";
import { verifyToken } from "@/services/authService";
import { redirect } from "next/navigation";
import styles from "../styles/form.module.scss";

export default async function LoginPage() {
  const token = (await cookies()).get("token")?.value;
  if (token) {
    const isValidToken = await verifyToken(token);
    if (isValidToken) {
      redirect("/tasks");
    }
  }
  return (
    <div className={styles.formpage}>
      <h1>Login Form</h1>
      <Login />
    </div>
  );
}
