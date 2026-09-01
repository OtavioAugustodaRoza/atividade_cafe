<template>
  <section class="inicio">
    <div class="bannerInfo">
      <h1>Coffee Challenge</h1>
      <span>Avalie os cafés da sua região!</span>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aperiam eligendi totam
        impedit distinctio quaerat. Possimus aliquid magni expedita provident? A enim vitae quae
        deleniti tenetur, architecto officiis veritatis ullam?
      </p>
    </div>
    <img class="banner" :src="coffeBanner" alt="Banner da Coffee Challenge" />
  </section>
  <section class="meio">
  <div class="divCards">
    <InfoCard
      titulo="Cafés"
      :valor="67"
      :icone="Coffee"
    />

    <InfoCard
      titulo="Avaliações"
      :valor="67"
      :icone="Star"
    />

    <InfoCard
      titulo="Última avaliação"
      valor="Há duas horas"
      :icone="Timer"
    />
  </div>

  <button class="btn" @click="irParaAvaliar">Avaliar Cafés</button>

  <div class="sobre">
    <InfoCard
  titulo="Sobre o Campeonato"
  descricao="Esse campeonato tem como objetivo promover a qualidade dos nossos cafés através de avaliações sensoriais baseadas na metodologia SCA."
/>
  </div>
</section>
</template>

<script setup> 
import { Coffee, Star, Timer } from  '@lucide/vue'
import coffeBanner from '@/assets/images/coffeBanner.png'
import { useRouter } from 'vue-router'
import InfoCard from '@/components/InfoCard.vue';

const router = useRouter()
function irParaAvaliar() {
  router.push('/avaliacoes')
}
</script>

<style scoped>
.inicio {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.bannerInfo {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  justify-content: center;
  max-width: 550px;
}
.bannerInfo h1 {
  font-size: 4rem;
  color: var(--color-primary-dark);
  margin-bottom: 0.5rem;
}

.bannerInfo span {
  font-size: 1.4rem;
  color: var(--color-secondary);
  font-weight: 600;
}

.bannerInfo p {
  margin-top: 1rem;
  line-height: 1.8;
  color: var(--color-text-light);
}
.banner {
  width: 500px;
  max-width: 100%;
}.meio {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 4rem;
}

.divCards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: var(--radius-md);

  background: var(--color-primary);
  color: var(--color-white);

  font-weight: 600;
  transition: var(--transition-normal);
}

.btn:hover {
  background: var(--color-primary-dark);
}

.sobre {
  width: 100%;
  max-width: 900px;
}
</style>
