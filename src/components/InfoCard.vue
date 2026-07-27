<template>
    <div class="card" :class="{ 'descricao-card': props.descricao }">
      <div v-if="props.icone" class="icone">
        <component :is="props.icone" :size="36" />
      </div>
  
      <div class="conteudo">
        <h3>{{ props.titulo }}</h3>
  
        <span v-if="props.valor !== undefined && props.valor !== null">
          {{ props.valor }}
        </span>
  
        <p v-else-if="props.descricao">
          {{ props.descricao }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    titulo: {
      type: String,
      required: true,
    },
    valor: {
      type: [String, Number],
      default: null,
    },
    descricao: {
      type: String,
      default: "",
    },
    icone: {
      type: Object,
      default: null,
    },
  })
  </script>
  
  <style scoped>
  .card {
    display: flex;
    align-items: center;
    gap: 1rem;
  
    padding: 1.5rem;
    border-radius: var(--radius-lg);
  
    background: var(--color-surface);
    box-shadow: var(--shadow-sm);
  
    transition: var(--transition-normal);
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
  
  .icone {
    width: 60px;
    height: 60px;
  
    display: flex;
    justify-content: center;
    align-items: center;
  
    border-radius: 50%;
  
    background: var(--color-primary);
    color: var(--color-white);
    flex-shrink: 0;
  }
  
  .conteudo {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .conteudo h3 {
    font-size: 1rem;
    color: var(--color-text-light);
    margin-bottom: 0.5rem;
  }
  
  .conteudo span {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-text);
  }
  
  .conteudo p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text);
  }
  
  .descricao-card {
    align-items: flex-start;
    max-width: 800px;
  }
  </style>