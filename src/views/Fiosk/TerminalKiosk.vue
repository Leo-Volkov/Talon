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
      <input type="text" v-model="username" placeholder="Ф.И.О">
      <button @click="200">Найти</button>
      <!-- <a href="/kiosk/TupeDock" @click="200">Найти</a> -->
      <div class="noneAncet" v-if="false">
        <img src="../../asset/error.png" alt="">
        <h1>Анкета не найдена </h1>
        <button>Назад</button>
      </div>
    </div>



    <div v-else class="bloc_ancets">
      <h1>Выберите анкету</h1>
      <div class="ancets">
        <button class="ancet" @click="200">
          <p>{{ "Иванов" }} {{ "Иван" }} {{ "Иванттттттттович" }}</p>
          <div>
            <p>01.01.2001</p>
          </div>
        </button>
        <button class="ancet" @click="200">
          <p>{{ "Иванов" }} {{ "Иван" }} {{ "Иванович" }}</p>
          <div>
            <p>01.03.2001</p>
          </div>
        </button>
      </div>
      <button @click="200">Назад</button>
    </div>

  </main>
</template>

<style scoped>
header {
  color: #ffffff;
  margin: 2vh;
}


.flex,
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
}

h1 {
  margin-top: 30px;
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 1.5vw;
}

input {
  width: 600px;
  border: none;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 30px;
}

input::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.3);
  font-weight: 400;
}

button {
  width: 350px;
  color: #ffffff;
  background-color: var(--button-color);
  border-radius: 30px;
  padding: 30px 0;
  font-size: 50px;
  margin-top: 3vw;
}

.bloc_ancets {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ancets {

}
.ancets button {
  width: 900px;
  color: #000000;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 0 0 0 15px;
  margin-top: 3vw;
  display: flex;
  justify-content: space-between;
}
.ancets button p {
  font-size: 50px;
  font-weight: 500;
}
.ancets button > p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ancets button div {
  padding: 0 5px;
  border-radius: 30px;
  border: 8px solid red;
}
.ancets + button {
  margin-top: 35px;
}

.noneAncet {
  width: 100%;
  height: 100%;
  background-color: rgba(230, 239, 239, 0.9);
  z-index: 1;
  top: 0;
  word-wrap: break-word;
  border-radius: 0;
  margin-top: 1px;
  padding-top: 1.1em;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

.noneAncet img {
  width: 400px;
  /* margin-bottom: -3vw; */
}

.noneAncet h1 {
  color: #000;
  margin: 40px;
  font-size: 50px
}
</style>