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
}

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
        <div class="col">
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
        <div class="row video-mask">
          <video src="../asset\KS54_2012.mp4" poster="../asset/image.png" autoplay muted playsinline type="video/mp4"></video>
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
  margin: 20px 30px 40px 30px;
}

header .data_nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
}

header .data_nav div {
  padding: 5px 15px;
  background-color: #ffffff;
  text-align: center;
  border-radius: 15px;
}

header .data_nav p {
  color: rgba(56, 104, 216, 0.9);
  font-weight: 800;
  font-size: 32px;
}

header h1 {
  color: #ffffff;
  font-size: 3.5vw;
  text-align: left;
}

header img {
  width: 13vw;
}

main  {
  height: 100%;
  padding: 0 25px 0 5px;
}
main > .row  {
  height: 75%;
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
  justify-content: center;
  flex-wrap: nowrap;
  gap: 25px;
  padding-left: 30px;
}

.process .cart {
  padding: 10px 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 30px;
}
.process .cart p {
  font-size: 35px;
  font-weight: 900;
  color: rgb(56, 104, 216);
}

.queue {}

.queue h2 {
  font-size: 40px;
  color: #ffffff;
}

.queue .carts {
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 28px;
}

.queue .cart {
  width: 150px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--button-color);
  border-radius: 30px;
  font-size: 57px;
  font-weight: 700;
  color: #ffffff;
}

video {
  /* height: 30vw; */
  border-radius: 30px;
}
</style>