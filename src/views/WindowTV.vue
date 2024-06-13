<script lang="ts">
import { defineComponent } from 'vue';
import Ks54Video from '../components/Ks54Video.vue';

export default defineComponent({
  components: {
    Ks54Video
  },
  data() {
    return {
      date: new Date(),
    }
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    // Включение времени
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
  }
});

</script>

<template>
  <header>
    <div class="row">
      <div class="col row">
        <img class="col-md-auto" src="../asset/logo_ks54.png" alt="колледж связи 54">
        <h1 class="col">Электронная<br>очередь</h1>
      </div>
      <div class="col-md-auto align-self-center row data_nav">
        <div class="col">
          <p>Приёмная</p>
        </div>
        <div class="col">
          <p>{{ CheckingZeroAdditionTime(this.date.getDate()) }}.{{ CheckingZeroAdditionTime(this.date.getMonth() + 1)
            }}
          </p>
        </div>
        <div class="col col2">
          <p>{{ CheckingZeroAdditionTime(this.date.getHours()) }}:{{ CheckingZeroAdditionTime(this.date.getMinutes()) }}
          </p>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="row">
      <div class="col-xl-5 col process">
        <div class="cart">
          <p class="num_doc">A3</p>
          <p class="window">Окно 3</p>
        </div>
        <div class="cart">
          <p class="num_doc">A4</p>
          <p class="window">Окно 3</p>
        </div>
        <div class="cart">
          <p class="num_doc">A5</p>
          <p class="window">Окно 3</p>
        </div>
        <div class="cart">
          <p class="num_doc">A6</p>
          <p class="window">Окно 3</p>
        </div>
        <div class="cart">
          <p class="num_doc">A7</p>
          <p class="window">Окно 3</p>
        </div>
        <div class="cart">
          <p class="num_doc">A8</p>
          <p class="window">Окно 3</p>
        </div>
        <div class="cart">
          <p class="num_doc">A9</p>
          <p class="window">Окно 3</p>
        </div>
      </div>
      <div class="col col2">
        <div class="row video_mask">
          <!-- Видио -->
          <Ks54Video></Ks54Video>
        </div>
        <div class="row queue">
          <h2>Следующие в очереде</h2>
          <div class="carts">
            <div class="cart">{{ "A10" }}</div>
            <div class="cart">{{ "A11" }}</div>
            <div class="cart">{{ "A12" }}</div>
            <div class="cart">{{ "A13" }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  margin: 1vw 1.5vw 1.5vw 0.9vw;
}

header .data_nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 2vw;
}

header .data_nav div {
  padding: 0.5vw;
  background-color: #ffffff;

}

header .data_nav p {
  color: rgba(56, 104, 216, 0.9);
  font-weight: 800;
  font-size: 3.5vw;
}

header .data_nav .col2 {
  width: 15vw;
}

header h1 {
  color: #ffffff;
  font-size: 3.5vw;
  text-align: left;
}

header img {
  width: 13vw;
}

main {
  padding: 0 1.5vw 0 0.2vw;
}

.col2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.process {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 1.6vw;
  padding-left: 1.5vw;
}

.process .cart {
  padding: 0.5vw 2vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
}

.process .cart p {
  font-size: 2vw;
  font-weight: 900;
  color: rgb(56, 104, 216);
}

.queue {}

.queue h2 {
  font-size: 2.5vw;
  color: #ffffff;
}

.queue .carts {
  width: 100%;
  margin-top: 0.7vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5vw;
}

.queue .cart {
  width: 7.3vw;
  height: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--button-color);
  border-radius: 1.5vw;
  font-size: 3.5vw;
  font-weight: 700;
  color: #ffffff;
}
</style>