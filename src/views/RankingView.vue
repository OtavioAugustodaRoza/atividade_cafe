<template>
  <section class="ranking">

<div class="titulo">
  <div class="titulo-a">
    <Trophy  :size="30"/>
    <h1>Ranking dos Cafés</h1>
  </div>
 
  <p>Confira os cafés mais bem avaliados pelos participantes.</p>
</div>

<div class="lista">
  <div
    v-for="(cafe, index) in ranking"
    :key="cafe.id"
    class="card"
  >
    <div class="posicao">
      {{ index + 1 }}
    </div>

    <div class="info">
      <h2>{{ cafe.nome }}</h2>
      <p>Produtor: {{ cafe.produtor }}</p>
    </div>

    <div class="estatisticas">
      <div class="estatistica">
        <span>Média</span>
        <strong>{{ cafe.media }}</strong>
      </div>

      <div class="estatistica">
        <span>Avaliações</span>
        <strong>{{ cafe.quantidadeAvaliacoes }}</strong>
      </div>
    </div>

  </div>
</div>

</section>
</template>
<script setup>

import { listarCafes } from '@/services/cafeService';
import { listarAvaliacoes } from '@/services/avaliacaoService';
import { ref, onMounted } from "vue";
import { Trophy } from '@lucide/vue';

const ranking = ref([]);

onMounted(async () => {
  const respostaCafes = await listarCafes();
  const respostaAvaliacoes = await listarAvaliacoes();

  ranking.value = gerarRanking(
    respostaCafes.data,
    respostaAvaliacoes.data
  );
});
// dps vou criar a pasta utils e guardar essa func
function gerarRanking(cafes, avaliacoes) {
  return cafes.map((cafe) => {
      const avaliacoesCafe = avaliacoes.filter((avaliacao) => avaliacao.cafe === cafe.id)
      const quantidadeAvaliacoes = avaliacoesCafe.length
      const media =quantidadeAvaliacoes > 0 ? avaliacoesCafe.reduce((total, avaliacao) => total + avaliacao.media, 0) / quantidadeAvaliacoes : 0

      return {
        id: cafe.id,
        nome: cafe.nome,
        produtor: cafe.produtor,
        media: Number(media.toFixed(1)),
        quantidadeAvaliacoes,
      }
    }).sort((a, b) => b.media - a.media)

}
</script>

<style scoped>
.ranking {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.titulo {
  text-align: center;
  margin-bottom: 3rem;
}

.titulo h1 {
  font-size: 2.5rem;
  color: var(--color-primary-dark);
}

.titulo p {
  color: var(--color-text-light);
  margin-top: .5rem;
}
.titulo-a{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
}

.lista {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 2rem;

  background: var(--color-surface);
  border-radius: var(--radius-lg);

  box-shadow: var(--shadow-sm);

  transition: var(--transition-normal);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.info h2 {
  font-size: 1.4rem;
  color: var(--color-primary-dark);
  margin-bottom: .5rem;
}

.info p {
  color: var(--color-text-light);
  margin-top: .3rem;
}

.estatisticas {
  display: flex;
  gap: 2rem;
}

.estatistica {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.estatistica span {
  font-size: .9rem;
  color: var(--color-text-light);
}

.estatistica strong {
  font-size: 1.8rem;
  color: var(--color-primary);
}

.posicao {
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background: var(--color-primary);
  color: white;

  font-size: 1.5rem;
  font-weight: bold;
}


.card:nth-child(1) .posicao {
  background: #f5b301;
}

.card:nth-child(2) .posicao {
  background: #a8a8a8;
}

.card:nth-child(3) .posicao {
  background: #b86b33;
}

@media (max-width: 700px) {
  .card {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .estatisticas {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
