import axios from "./axios";

// CRUD Proyectos
export const getProjects = () => axios.get("/projects");
export const getProject = (id) => axios.get(`/projects/${id}`);
export const createProject = (project) => axios.post("/projects", project);
export const updateProject = (id, project) => axios.put(`/projects/${id}`, project);
export const deleteProject = (id) => axios.delete(`/projects/${id}`);

// Epics del proyecto
export const getEpicsByProject = (projectId) => axios.get(`/projects/${projectId}/epics`);