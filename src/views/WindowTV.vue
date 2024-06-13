<script lang="ts">
import { defineComponent } from 'vue';
import Ks54Video from '../components/Ks54Video.vue';
import AppProgress from '../components/AppProgress.vue';
import AppQueue from '../components/AppQueue.vue';


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
      <div class="col-xl-5 col">
        <!-- Процесс толончиков -->
        <AppProgress></AppProgress>
      </div>
      <div class="col col2">
        <div class="row video_mask">
          <!-- Видио -->
          <Ks54Video></Ks54Video>
        </div>
        <div class="row">
          <!-- Очередь толончиков -->
           <AppQueue></AppQueue>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  margin: 1vw 1.5vw 1.5vw 0.9vw;
}

.data_nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 2vw;
}

.data_nav div {
  padding: 0.5vw;
  background-color: #ffffff;

}

.data_nav p {
  color: rgba(56, 104, 216, 0.9);
  font-weight: 800;
  font-size: 3.5vw;
}

.data_nav .col2 {
  width: 15vw;
}

h1 {
  color: #ffffff;
  font-size: 3.5vw;
  text-align: left;
}

img {
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
</style>