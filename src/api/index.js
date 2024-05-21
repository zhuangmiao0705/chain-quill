import api from "./axios";

export const messageAdd = (body) => api.post("/message/add", body);
