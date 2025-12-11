import axios from "./axios";

// CRUD Epicas
export const getEpic = (id) => axios.get(`/epics/${id}`);
export const createEpic = (epic) => axios.post("/epics", epic);
export const updateEpic = (id, epic) => axios.put(`/epics/${id}`, epic);
export const deleteEpic = (id) => axios.delete(`/epics/${id}`);

// Stories de la epica
export const getStoriesByEpic = (epicId) => axios.get(`/epics/${epicId}/stories`);