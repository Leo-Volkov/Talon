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
  <main>
    <h1>Выюирите тип подачи заявления</h1>
    <div class="row">
      <button class="col">
      <div>Бюджет</div>
        <p>Рассматриваю только бюджетную форму поступления</p>
      </button>
      <button class="col">
        <div>Внебюджет</div>
        <p>Хочу заключить договор на внебюджет</p>
      </button> 
      <!-- <a href="/kiosk/GetTalon" class="col">
      <div>Бюджет</div>
        <p>Рассматриваю только бюджетную форму поступления</p>
      </a>
      <a href="/kiosk/AccordDock" class="col">
        <div>Внебюджет</div>
        <p>Хочу заключить договор на внебюджет</p>
      </a> -->
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