"use client";
import { useState } from "react";
import { Task } from "@/types/Task";
import TaskItem from "./TaskItem";
import styles from "../styles/tasks.module.scss";

interface TaskListProps {
  tasks: Task[];
}
enum filterList {
  ALL = "all",
  COMPLETED = "completed",
  PENDING = "pending",
}

export default function TaskList({ tasks }: TaskListProps) {
  const [filter, setFilter] = useState<filterList>(filterList.ALL);

  const filteredTasks =
    filter === filterList.ALL
      ? tasks
      : tasks.filter((task) =>
          filter === filterList.COMPLETED ? task.completed : !task.completed
        );

  return (
    <div className={styles.taskListContainer}>
      <h2>Your Tasks</h2>
      <div className={styles.btnSection}>
        <button
          className={filter === filterList.ALL ? styles.active : ""}
          onClick={() => setFilter(filterList.ALL)}
        >
          All
        </button>
        <button
          className={filter === filterList.COMPLETED ? styles.active : ""}
          onClick={() => setFilter(filterList.COMPLETED)}
        >
          Completed
        </button>
        <button
          className={filter === filterList.PENDING ? styles.active : ""}
          onClick={() => setFilter(filterList.PENDING)}
        >
          Pending
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <h3>No tasks found.</h3>
      ) : (
        <>
          {filteredTasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </>
      )}
    </div>
  );
}
