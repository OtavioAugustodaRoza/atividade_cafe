import api from "./api";

export function listarAvaliacoes() {
  return api.get("/avaliacoes/");
}

export function buscarAvaliacao(id) {
  return api.get(`/avaliacoes/${id}/`);
}

export function criarAvaliacao(avaliacao) {
  return api.post("/avaliacoes/", avaliacao);
}