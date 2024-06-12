<script>
export default {
  data() {
    return {
      date: new Date(),
      event_preglossion: true,
      activating_call_button: true,
      preglossion_button: true,
      carts: {
        now: {
          num: '10A',
          surname: 'Иван',
          name: 'Ивонов',
          patronymic: 'Иванович',
        },
        collection: [
          {
            num: '11A',
            surname: 'Иван',
            name: 'Ивонов',
            patronymic: 'Иванович',
            waitingTime: '11:00',
            window: '1'
          },
          {
            num: '12A',
            surname: 'Иван',
            name: 'Ивонов',
            patronymic: 'Иванович',
            waitingTime: '11:00',
            window: '1'
          }
        ]
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

    /*Нажатие на кнопку "Пригласить" и 
    вызывается номер карты и меняется интерфейс*/
    CallTalon() {
      this.preglossion_button = false;
      setTimeout(() => {
        this.activating_call_button = false
      }, 30000)
    },

    /*  */
    startCommission() {
      this.event_preglossion = false
    },

    /*  */
    endCommission() {
      this.event_preglossion = true
      this.activating_call_button = true
      this.preglossion_button = true;
    }
  }
}
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
          <h3 class="num_talon">{{ this.carts.now.num }}</h3>
          <h3 class="name_abu">{{ this.carts.now.name }} {{ this.carts.now.surname }} {{ this.carts.now.patronymic }}
          </h3>
        </div>
      </div>
      <div class="col flex">

        <!-- меняется кнопка -->
        <div v-if="this.event_preglossion">
          <button v-if="this.preglossion_button" @click="CallTalon()">
            <p>Пригласить</p>
          </button>
          <button v-else @click="startCommission()">
            <p>Начать</p>
          </button>
        </div>
        <div v-else>
          <button @click="200">
            <p>Вернуть в очереть</p>
          </button>
        </div>

        <button @click="200">
          <p>Найти</p>
        </button>
      </div>
    </section>




    <div v-if="this.event_preglossion"> <!-- секция отвечает за вызов человека на приём -->
      <button @click="console.log(200)" :class="{ none_block: this.activating_call_button }">
        Повторить вызов
      </button>
      <button @click="console.log(200)" style="visibility: collapse;">
        /
      </button>
    </div>
    <div v-else>
      <button @click="200">Сменить тип толона</button>
      <button class="end" @click="endCommission()">Завершить</button>
    </div>


    <!-- <button class="in_profile" @click="200">Перейти в анкету</button> -->
    <!-- <section class="row justify-content-around" id="2">
      <button class="end" @click="200">Завершить</button>
      <button class="col" @click="200">Вернуть в очередь</button>
    </section> -->


    <section id="3">
      <h2>Следующие:</h2>
      <div class="flax">
        <button v-for="(cart, index) in this.carts.collection" :key="index" class="next_card row" @click="200">
          <div class="cart col-md-auto">
            {{ cart.num }}
          </div>
          <p class="col">Поступление в очередь {{ cart.waitingTime }}</p>
          <div class="cabinet col-md-auto">
            Окно {{ cart.window }}
          </div>
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
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
  width: 90%;
  height: 172px;

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

main section[id="1"] .flex div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

main section[id="1"]+div button {
  width: 100%;
  padding: 35px 0;
  background-color: var(--button-color);

  border: none;
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  margin: 75px 0 75px 0;
}

main section[id="1"]+div .end {
  background-color: #ffffff;
  color: #000;
  box-shadow: 0px 0px 0px 10px rgb(255, 0, 0);
}

main section[id="2"] {}


main section[id="3"] {
  margin-top: 50px;
}

main section[id="3"] h2 {
  font-size: 60px;
  margin: 50px 0 40px 0;
  text-align: left;
  color: #ffffff;
}

main section[id="3"] .flax {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 35px;
}

main section[id="3"] button {
  width: 100%;
  height: 260px;
  padding: 27px 43px 27px 43px;
}

main section[id="3"] button .cart {
  width: 150px;
  height: 82px;
  border-radius: 30px;
  background-color: var(--button-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 64px;
  font-weight: 700;
}

main section[id="3"] button p {
  font-size: 60px;
  font-weight: 700;
}

main section[id="3"] button .cabinet {
  min-width: 187px;
  height: 82px;
  border-radius: 30px;
  border: 6px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 40px;
  font-weight: 700;
}


.none_block {
  visibility: collapse;
}
</style>