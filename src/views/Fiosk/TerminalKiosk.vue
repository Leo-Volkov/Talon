<script lang="ts">
import { defineComponent } from 'vue';
import KioskHeader from '../../components/Kiosk/KioskHeader.vue';


export default defineComponent({
  components: {
    KioskHeader
  },
  data() {
    return {
      currentTabComponent: '',
      username: '',
    }
  },
  methods: {

  }
})
</script>

<template>
  <header>
    <KioskHeader></KioskHeader>
  </header>
  <main>

    <div class="flex" v-if="true">
      <h1>Найти анкету</h1>
      <input type="text" v-model="username" placeholder="ФИО">
      <button @click="200">Найти</button>
      <a href="/kiosk/TupeDock" @click="200">Найти</a>
    </div>
    <div v-else>
      <h1>Выберете анкету</h1>
      <button class="ancet" @click="200">
        <p>{{ "Иванов" }}{{ "Иван" }}{{ "Иванович" }}</p>
        <div>
          <p>01.01.2001</p>
        </div>
      </button>
      <button class="ancet" @click="200">
        <p>{{ "Иванов" }}{{ "Иван" }}{{ "Иванович" }}</p>
        <div>
          <p>01.01.2001</p>
        </div>
      </button>
      <button @click="200">Назат</button>
    </div>

    <div class="noneAncet" v-if="false">
      <img src="" alt="">
      <h1></h1>
      <button>Назад</button>
    </div>
  </main>
</template>

<style scoped>
header {
  color: #ffffff;
  margin: 2vh;
}

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