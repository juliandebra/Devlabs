import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { getTasks } from "@/services/taskService";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import styles from "../styles/tasks.module.scss";

export default async function TasksPage() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    redirect("/login");
  }
  const tasks = await getTasks(token as string | undefined);

  return (
    <div className={styles.taskspage}>
      <h1>Tasks Page</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}
