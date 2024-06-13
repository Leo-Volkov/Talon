<script lang="ts">
import { defineComponent } from 'vue';
import NextQueue from '../components/Staff/NextQueue.vue';

export default defineComponent({
  components: {
    NextQueue
  },
  data() {
    return {
      date: new Date(),
      event_preglossion: true,
      activating_call_button: true,
      preglossion_button: true,
      ticket: {
        num: 'ВБ10',
        surname: 'Иван',
        name: 'Ивонов',
        patronymic: 'Иванович',
      }
    }
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    // Включение и обновление времени
    startTimer() {
      window.setInterval(() => {
        this.date = new Date()
      }, 1000);
    },
    // испровляет формат даты и времени
    CheckingZeroAdditionTime(getTupeDate) {
      if (getTupeDate < 10) {
        return "0" + getTupeDate;
      } else {
        return getTupeDate;
      }
    },

    /* Приглашение по талончику */
    invite_Ticket() {
      this.preglossion_button = false;
      this.activating_call_button = false;
    },

    /* Повторное приглашение по талончику */
    recall_Ticket() {

    },

    /* Начать обслуживание талончика */
    start_Talon() {
      this.event_preglossion = false
    },

    /* Завершить обслуживание талончика */
    end_Ticket() {
      this.event_preglossion = true
      this.activating_call_button = true
      this.preglossion_button = true;
    }
  }
})
</script>

<template>
  <header>
    <div class="row">
      <h1 class="col">Электронная<br>очередь</h1>
      <div class="col align-self-center row data_nav">
        <p class="col">{{ '1' }} каб.</p>
        <p class="col">{{ CheckingZeroAdditionTime(this.date.getDate()) }}.{{
          CheckingZeroAdditionTime(this.date.getMonth() + 1) }}</p>
        <p class="col">{{ CheckingZeroAdditionTime(this.date.getHours()) }}:{{
          CheckingZeroAdditionTime(this.date.getMinutes()) }}</p>
      </div>
    </div>
  </header>
  <main>
    <section class="row justify-content-around" id="1">

      <div class="col">
        <h2>Сейчас в очереди</h2>
        <div class="cart container">
          <h3 class="num_talon">{{ this.ticket.num }}</h3>
          <h3 class="name_abu">{{ this.ticket.name }} {{ this.ticket.surname }} {{
            this.ticket.patronymic }}
          </h3>
        </div>
      </div>
      <div class="col flex">

        <!-- меняется кнопка -->
        <div v-if="this.event_preglossion">
          <button v-if="this.preglossion_button" @click="invite_Ticket()">
            <p>Пригласить</p>
          </button>
          <button v-else @click="start_Talon()">
            <p>Начать</p>
          </button>
        </div>
        <div v-else>
          <button @click="200">
            <p>Вернуть в очередь</p>
          </button>
        </div>

        <button @click="200">
          <p>Искать по AIS</p>
        </button>
      </div>
    </section>




    <div v-if="this.event_preglossion" class="flax_button"> <!-- секция отвечает за вызов человека на приём -->
      <button @click="recall_Ticket()" :class="{ none_block: this.activating_call_button }">
        Повторить вызов
      </button>
      <!-- <button @click="console.log(200)" style="visibility: collapse;">
        /
      </button> -->
    </div>
    <div v-else class="flax_button">
      <button @click="200">Сменить тип талона</button>
      <button class="end" @click="end_Ticket()">Завершить</button>
    </div>


    <!-- <button class="in_profile" @click="200">Перейти в анкету</button> -->
    <!-- <section class="row justify-content-around" id="2">
      <button class="end" @click="200">Завершить</button>
      <button class="col" @click="200">Вернуть в очередь</button>
    </section> -->


    <section id="3">
      <NextQueue></NextQueue>
    </section>
  </main>
</template>

<style scoped>
/*///  адаптив для окошечек ПК ///*/
header {
  color: #ffffff;
  margin: 2vh;
}

header .data_nav {
  border: 0.6vw solid var(--button-color);
  padding: 0.6vw 0.5vw;
  margin-right: 1.5vw;
}

header .data_nav p {
  text-align: center;
  margin: 0;
  /* width: 14vw; */

  font-size: 2.5vw;
}

header h1 {
  font-size: 3.5vw;
  text-align: left;
}

main {
  padding: 2.5vh;
}

section {
  margin-bottom: 1vh;
}

section[id="1"] {}

section[id="1"] h2 {
  font-size: 3.3vh;
  color: #ffffff;

  margin-bottom: 1vh;
}

section[id="1"] .cart {
  width: 30vh;
  /* min-height: 26vh; */
  background-color: #ffffff;
  padding-top: 2vh;
}

section[id="1"] .cart .num_talon {
  font-size: 9vh;

  color: #000000;
  margin-bottom: 1.3vh;
}

section[id="1"] .cart .name_abu {
  overflow-wrap: normal;
  /* не поддерживает IE, Firefox; является копией word-wrap */
  word-wrap: break-word;
  word-break: keep-all;
  /* не поддерживает Opera12.14, значение keep-all не поддерживается IE, Chrome */
  line-break: strict;
  /* нет поддержки для русского языка */
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  /* значение auto не поддерживается Chrome */
  font-size: 3.2vh;
  padding-bottom: 2vh;

  color: #000000;
}

section[id="1"] button {
  width: 75%;
  height: 10vh;
  background-color: var(--button-color);
  color: #ffffff;
  font-size: 3vh;
  border: none;
}

section[id="1"] .flex {
  display: flex;
  gap: 3.5vh;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding-top: 5vh;
}

section[id="1"] .flex div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

section[id="1"]+div button {
  width: 90%;
  padding: 2vh 0;
  background-color: var(--button-color);

  border: none;
  color: #ffffff;
  font-size: 3vh;
  margin: 2vh 0;
}

section[id="1"]+div .end {
  background-color: #ffffff;
  color: #000;
  box-shadow: 0px 0px 0px 1vh rgb(255, 0, 0);
}

.flax_button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

section[id="2"] {
  margin-top: -1.5vh;
}

.none_block {
  display: none;
}

/*///  адаптив для не известного экранчика  ///*/
/* 
header {
  color: #ffffff;
  margin: 3vw;
}

header .data_nav {
  height: min-content;
  border: 0.7vw solid var(--button-color);
  padding: 1.5vw 1.8vw;
}

header .data_nav p {
  text-align: center;
  margin: 0;

  font-size: 3.5vw;
}

header h1 {
  font-size: 5vw;
  text-align: left;
}

main {
  padding: 3vw;
}

section {
  margin-bottom: 2vw;
}

section[id="1"] {}

section[id="1"] h2 {
  font-size: 4vw;
  color: #ffffff;

  margin-bottom: 1vw;
}

section[id="1"] .cart {
  width: 45vw;
  min-height: 40vw;
  background-color: #ffffff;
  padding-top: 3vw;
}

section[id="1"] .cart .num_talon {
  font-size: 12vw;

  color: #000000;
  margin-bottom: 6vw;
}

section[id="1"] .cart .name_abu {
  overflow-wrap: normal;
  word-wrap: break-word;
  word-break: keep-all;
  line-break: strict;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  font-size: 4vw;

  color: #000000;
}

section[id="1"] button {
  width: 90%;
  height: 17vw;
  background-color: var(--button-color);
  color: #ffffff;
  font-size: 4vw;
  border: none;
}

section[id="1"] .flex {
  display: flex;
  gap: 6vw;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding-top: 5vw;
}

section[id="1"] .flex div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

section[id="1"]+div button {
  width: 100%;
  padding: 35px 0;
  background-color: var(--button-color);

  border: none;
  color: #ffffff;
  font-size: 5vw;
  margin: 6vw 0;
}

section[id="1"]+div .end {
  background-color: #ffffff;
  color: #000;
  box-shadow: 0px 0px 0px 1vw rgb(255, 0, 0);
}

section[id="2"] {}


section[id="3"] {
  margin-top: -1.5vw;
}

section[id="3"] h2 {
  font-size: 6vw;
  margin: 3vw 0;
  text-align: left;
  color: #ffffff;
}

section[id="3"] .flax {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 3vw;
}

section[id="3"] button {
  width: 100%;
  height: 24vw;
  padding: 2vw 4vw;
}

section[id="3"] button .cart {
  width: 15vw;
  height: 8vw;
  background-color: var(--button-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 6vw;
}

section[id="3"] button p {
  font-size: 6vw;
}

section[id="3"] button .cabinet {
  height: 8vw;
  border: 0.6vw solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 4vw;

}


.none_block {
  display: none;
}
*/
</style>