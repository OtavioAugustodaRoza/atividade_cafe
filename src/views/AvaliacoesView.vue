<template>
  <section class="avaliacao">
    <div class="card">
      <h1>Avaliar Café</h1>
      <p>Compartilhe sua opinião sobre um café.</p>

      <form class="formulario" @submit.prevent="enviarAvaliacao">
        <div class="campo">
          <label>Café</label>

          <select v-model="formulario.cafe">
            <option disabled value="">Selecione um café</option>

            <option v-for="cafe in cafes" :key="cafe.id" :value="cafe.id">
              {{ cafe.nome }}
            </option>
          </select>
        </div>

        <div class="grid">
          <div class="campo">
            <label>Aroma</label>
            <input type="number" min="0" max="10" v-model="formulario.aroma" />
          </div>

          <div class="campo">
            <label>Sabor</label>
            <input type="number" min="0" max="10" v-model="formulario.sabor" />
          </div>

          <div class="campo">
            <label>Acidez</label>
            <input type="number" min="0" max="10" v-model="formulario.acidez" />
          </div>

          <div class="campo">
            <label>Corpo</label>
            <input type="number" min="0" max="10" v-model="formulario.corpo" />
          </div>

          <div class="campo">
            <label>Finalização</label>
            <input type="number" min="0" max="10" v-model="formulario.finalizacao" />
          </div>
        </div>

        <div class="campo">
          <label>Observações</label>

          <textarea
            rows="5"
            placeholder="Escreva aqui sua avaliação..."
            v-model="formulario.observacoes"
          ></textarea>
        </div>

        <button class="btn">Enviar Avaliação</button>
      </form>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'

import { listarCafes } from '@/services/cafeService'
import { criarAvaliacao } from '@/services/avaliacaoService'

const cafes = ref([])

const formulario = ref({
  cafe: '',
  aroma: 0,
  sabor: 0,
  acidez: 0,
  corpo: 0,
  finalizacao: 0,
  observacoes: '',
})

async function carregarCafes() {
  try {
    const resp = await listarCafes()
    cafes.value = resp.data
  } catch (error) {
    console.error('Erro nos cafés:', error)
  }
}

async function enviarAvaliacao() {
  try {
    await criarAvaliacao(formulario.value)
    alert('Avaliação enviada com sucesso!')
    formulario.value = {
      cafe: '',
      aroma: 0,
      sabor: 0,
      acidez: 0,
      corpo: 0,
      finalizacao: 0,
      observacoes: '',
    }
  } catch (error) {
    console.error('deu erroooo na avaliacao:', error)
    alert('deu erro na api bomba ou o erro é você!.')
  }
}
onMounted(() => {
  carregarCafes()
})
</script>

<style scoped>
.avaliacao {
  min-height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
}
.card {
  width: 100%;
  max-width: 700px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
}

.card h1 {
  color: var(--color-primary-dark);
  margin-bottom: 0.5rem;
}
.card p {
  color: var(--color-text-light);
  margin-bottom: 2rem;
}
.formulario {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.campo label {
  font-weight: 600;
  color: var(--color-text);
}

.campo input,
.campo select,
.campo textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #d6d6d6;
  border-radius: var(--radius-md);
  background: white;
  font-size: 0.95rem;
  transition: var(--transition-normal);
}

.campo textarea {
  resize: vertical;
  min-height: 130px;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.btn {
  margin-top: 1rem;
  padding: 1rem;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;
  transition: var(--transition-normal);
}

.btn:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 2rem;
  }
}
</style>
