<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { CoffeeIcon } from '@lucide/vue';
</script>

<template>
  <header class="header">
    <div class="container">
    <CoffeeIcon :size="32" />


      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/avaliacoes">Avaliações</RouterLink>
        <RouterLink to="/ranking">Ranking</RouterLink>
      </nav>
    </div>
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  background: var(--color-primary);
  color: var(--color-white);
  box-shadow: var(--shadow-sm);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  color: var(--color-white);
  font-weight: 500;
  transition: var(--transition-normal); 
  position: relative;
  &:hover{
    opacity: 1;
  }
 
}
a::before{
  content: "";
  width: 0;  
  height: 2px;
  left: 0;
  position: absolute;
  background-color: var(--color-secondary);
  bottom: -2px;
  transition: var(--transition-normal); 
}
a:hover::before {
  width: 100%;
}
.router-link-active {
  opacity: .7;
}
main {
  padding: 2rem 0;
}
</style>