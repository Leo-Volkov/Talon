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
  methods: {

  }
})
</script>

<template>
  <h1>Обратите внимание!</h1>
  <main>
    <p>очень важный текст очень важный текст очень важный текст очень важный текст очень важный тексточень важный текстмочень важный тексточень важный тексточень важный тексточень важный тексточень важный тексточень важный тексточень важный тексточень важный  </p>
    <button v-if="false" @click="200">
      Я прочитал
    </button>
    <div class="flax" v-else>
      <a href="/kiosk/PuchDock">Забрать свой экземпляр договора</a>
      <a href="/kiosk/GetTalon">Заключить договор </a>
    </div>
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