<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {

  },
  data() {
    return {
      currentTabComponent: ''
    }
  },
  mounted() {
      
  },
  methods: {

  }
})
</script>

<template>
  <main>
    <h1>Вас пригласят по номеру</h1>
    <div class="talon">
      <p>BБ12</p>
    </div>
    <p>Запомните номер талона или сфотографируете, чтобы точно не забыть </p>
  </main>
</template>

<style scoped>
main {
  min-height: 70%;
}
.flex, main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
}
</style>