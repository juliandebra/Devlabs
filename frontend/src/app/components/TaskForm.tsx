"use client";
import { useState } from "react";
import { createTask } from "@/services/taskService";
import styles from "../styles/form.module.scss";

export default function TaskForm() {
  const [toggleForm, setToggleForm] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setError("Title is required.");
      return;
    }

    try {
      const taskData = {
        title,
        description,
        dueDate: dueDate ? new Date(dueDate) : undefined,
      };
      await createTask(taskData);
      setError("");
      setTitle("");
      setDescription("");
      setDueDate("");
    } catch (err) {
      setError("Failed to create task.");
      console.error("Error creating task:", err);
    }
  };

  return toggleForm ? (
    <button onClick={() => setToggleForm(false)} className={styles.submit}>
      Create Task
    </button>
  ) : (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Create a New Task</h2>
      <div className={styles.inputSection}>
        <label className={styles.label}>Title:</label>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.inputSection}>
        <label className={styles.label}>Description:</label>
        <textarea
          className={styles.textarea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.inputSection}>
        <label className={styles.label}>Due Date:</label>
        <input
          className={styles.input}
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.submit} type="submit">
        Create Task
      </button>
      <button onClick={() => setToggleForm(true)} className={styles.close}>
        Close Form
      </button>
    </form>
  );
}
