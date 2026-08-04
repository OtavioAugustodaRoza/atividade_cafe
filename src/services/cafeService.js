import api from "./api";

export function listarCafes() {
  return api.get("/cafes/");
}

export function buscarCafe(id) {
  return api.get(`/cafes/${id}/`);
}

export function criarCafe(cafe) {
  return api.post("/cafes/", cafe);
}