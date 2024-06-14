<script>

export default {
  data() {
    return {
      date: new Date(),
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
  }
}
</script>


<template>
  <div class="row">
    <h1 class="col">Электронная<br>очередь</h1>
    <div class="col align-self-center justify-content-end row">
      <div class="data_nav row">
        <p class="col">{{ CheckingZeroAdditionTime(this.date.getDate()) }}.{{
          CheckingZeroAdditionTime(this.date.getMonth() + 1) }}</p>
        <p class="col">{{ CheckingZeroAdditionTime(this.date.getHours()) }}:{{
          CheckingZeroAdditionTime(this.date.getMinutes()) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.data_nav {
  width: 40vw;
  border: 0.6vw solid var(--button-color);
  padding: 1vw 0vw;
  margin-right: 1.5vw;
}

.data_nav p {
  text-align: center;
  margin: 0;
  /* width: 14vw; */

  font-size: 3vw;
}

h1 {
  font-size: 4vw;
  text-align: left;
}
</style>