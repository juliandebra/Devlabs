"use client"; // Marca este componente como del lado del cliente
import { useState } from "react";
import { updateTask, deleteTask } from "@/services/taskService";
import { Task } from "@/types/Task";
import Swal from "sweetalert2";
import { formatDate } from "@/helpers/formatDate";
import styles from "../styles/tasks.module.scss";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const confirmAction = async (
    title: string,
    text: string,
    confirmButtonText: string,
    action: () => Promise<void>,
    successMessage: string
  ) => {
    const result = await Swal.fire({
      title,
      text,
      icon: "question",
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText: "No, cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    if (result.isConfirmed) {
      try {
        await action();
        Swal.fire({
          title: "Success!",
          text: successMessage,
          icon: "success",
        });
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred. Please try again.",
          icon: "error",
        });
      }
    }
  };
  const handleCheckboxChange = async () => {
    await confirmAction(
      "Are you sure?",
      `Do you want to mark this task as ${
        isCompleted ? "pending" : "completed"
      }?`,
      "Yes, mark it!",
      async () => {
        const updatedTask = await updateTask(task._id, !isCompleted);
        setIsCompleted(updatedTask.completed);
      },
      `The task has been marked as ${!isCompleted ? "completed" : "pending"}.`
    );
  };

  const handleDelete = async () => {
    await confirmAction(
      "Are you sure?",
      "Do you want to delete this task?",
      "Yes, delete it!",
      async () => {
        await deleteTask(task._id);
      },
      "The task has been deleted."
    );
  };

  return (
    <div
      className={styles.taskItemContainer}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h3
        className={styles.taskTitle}
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
      >
        <span>
          <input
            className={styles.checkBox}
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}
          />
        </span>
        {task.title}
      </h3>
      {isExpanded && (
        <div>
          <p className={styles.taskDescription}>{task.description}</p>
          <p className={styles.taskDate}>
            Due Date:
            {task.dueDate ? formatDate(task.dueDate) : "No due date"}
          </p>
          <p className={styles.taskStatus}>
            Status: {isCompleted ? "Completed" : "Pending"}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
