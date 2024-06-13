<script>
export default {
  data() {
    return {
      tickets: [
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
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<template>
  <h2>Следующие:</h2>
      <div class="flax">
        <button v-for="(cart, index) in this.tickets" :key="index" class="next_card row" @click="200">
          <div class="cart col-md-auto">
            {{ cart.num }}
          </div>
          <p class="col">Поступление в очередь {{ cart.waitingTime }}</p>
          <div class="cabinet col-md-auto">
            Окно {{ cart.window }}
          </div>
        </button>
      </div>
</template>

<style scoped>


h2 {
  font-size: 3.5vh;
  margin: 2.5vh 0;
  text-align: left;
  color: #ffffff;
}

.flax {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 2vh;
}

button {
  width: 90%;
  padding: 1.5vh 4vh;
}

button .cart {
  width: 7.5vh;
  height: 4vh;
  background-color: var(--button-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 3vh;
}

button p {
  font-size: 2vh;
}

button .cabinet {
  height: 4vh;
  width: 13vh;
  border: 0.6vh solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 2vh;

}


</style>