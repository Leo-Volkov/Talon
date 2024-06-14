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
    <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70.5" cy="70.5" r="70.5" fill="#FF6A00" />
    </svg>

    <p>Мы уже уведомили сотрудников, что вы пришли за договором. Его скоро вынесут Вам. Ожидайте у 1 и 2 окна</p>
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
}</style>