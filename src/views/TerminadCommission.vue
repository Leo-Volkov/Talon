<script>
import inСounseling from '../components/Commission/InCounseling.vue';
import callCounselling from '../components/Commission/CallCounselling.vue';

export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
  <header>
    <callCounselling/>
    <inСounseling/>
    <div class="row">
      <h1 class="col">Электронная<br>очередь</h1>
      <div class="col align-self-center row data_nav">
        <p class="col">{{ '1' }} к.</p>
        <p class="col">{{ '11' }}.{{ '06' }}</p>
        <p class="col">{{ '11' }}:{{ '00' }}</p>
      </div>
    </div>
  </header>
  <main>
    <section class="row justify-content-around" id="1">

      <div class="col">
        <h2>Сейчас в очереди</h2>
        <div class="cart container">
          <h3 class="num_talon">{{ 'А10' }}</h3>
          <h3 class="name_abu">{{ "Иванов" }} {{ "Иван" }} {{ "Ивановичь" }}</h3>
        </div>
      </div>
      <div class="col flex">


        <!-- меняется кнопка -->
        <button v-if="true" @click="200">
          <p>Пригласить</p>
        </button>
        <button v-else @click="200">
          <p>Вернутся в очереть</p>
        </button>

        <button @click="200">
          <p>Найти</p>
        </button>
      </div>
    </section>

    <!-- меняется кнопка -->
    <button v-if="true" @click="200">
      Повторить вызов
    </button>
    <button v-else @click="200">
      Сменить тип тплона
    </button>




    <button class="in_profile" @click="200">Перейти в анкету</button>

    <section class="row justify-content-around" id="2">
      <button class="col" @click="200">Сменить тип толона</button>
      <button class="col" @click="200">Вернуть в очередь</button>
    </section>

    <button class="end" @click="200">Завершить</button>

    <section id="3">
      <h2>Следующие:</h2>
      <button class="next_card row" @click="200">
        <div class="cart col">
          <p>{{ "А11" }}</p>
        </div>
        <p class="col">Поступление</p>
        <div class="cabinet col">
          <p>{{ "1" }} к.</p>
        </div>
      </button>
    </section>
  </main>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
}

p,
h1,
h2,
h3 {
  margin: 0;
  text-align: center;
}

header {
  color: #ffffff;
  margin: 33px 35px 40px 37px;
}

header .data_nav {
  height: min-content;
  border: 7px solid var(--button-color);
  border-radius: 30px;
  padding: 25px 60px 23px;
}

header .data_nav p {
  text-align: center;
  margin: 0;
  font-weight: 700;
  font-size: 32px;
}

header h1 {
  font-size: 50px;
  text-align: left;
}

main {
  padding: 38px;
}

main section {
  margin-bottom: 25px;

}

main section[id="1"] {}

main section[id="1"] h2 {
  font-size: 40px;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 16px;
}

main section[id="1"] .cart {
  width: 500px;
  min-height: 400px;
  background-color: #ffffff;
  border-radius: 30px;
  padding-top: 47px;
}

main section[id="1"] .cart .num_talon {
  font-size: 128px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 63px;
}

main section[id="1"] .cart .name_abu {
  width: 450px;
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
  font-size: 40px;
  font-weight: 700;
  color: #000000;
}

main section[id="1"] button {
  display: block;
  width: 444px;
  height: 171px;
  border-radius: 30px;
  background-color: var(--button-color);
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  border: none;
}

main section[id="1"] .flex {
  display: flex;
  gap: 60px;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding-top: 58px;
}

main section[id="1"]+button {
  width: 100%;
  padding: 35px 0;
  background-color: var(--button-color);
  border-radius: 30px;
  border: none;
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  margin: 75px 0 75px 0;
}

main section[id="2"] {}


main section[id="3"] {}

main section[id="3"] h2 {
  font-size: 60px;
  margin: 50px 0 40px 0;
  text-align: left;
  color: #ffffff;
}
</style>