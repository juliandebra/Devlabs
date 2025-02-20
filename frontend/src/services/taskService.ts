import apiClient from "./apiClient";

export const getTasks = async (token?: string) => {
  const response = await apiClient.get("/api/tasks", {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
  return response.data;
};

export const createTask = async (task: {
  title: string;
  description: string;
}) => {
  const response = await apiClient.post("/api/tasks", task);
  return response.data;
};

export const updateTask = async (id: string, completed: boolean) => {
  const response = await apiClient.put(`/api/tasks/${id}`, { completed });
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await apiClient.delete(`/api/tasks/${id}`);
  return response.data;
};
