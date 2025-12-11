import axios from "./axios";

// Global (obtener todas las stories del usuario)
export const getStories = () => axios.get("/stories");

// CRUD Stories
export const getStory = (id) => axios.get(`/stories/${id}`);
export const createStory = (story) => axios.post("/stories", story);
export const updateStory = (id, story) => axios.put(`/stories/${id}`, story);
export const deleteStory = (id) => axios.delete(`/stories/${id}`);

// Tasks de la historia
export const getTasksByStory = (storyId) => axios.get(`/stories/${storyId}/tasks`);