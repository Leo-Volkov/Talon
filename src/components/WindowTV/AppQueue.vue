<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<template>
  <div class="queue">
    <h2>Следующие в очереде</h2>
    <div class="carts">
      <div class="cart">{{ "A10" }}</div>
      <div class="cart">{{ "A11" }}</div>
      <div class="cart">{{ "A12" }}</div>
      <div class="cart">{{ "A13" }}</div>
    </div>
  </div>
</template>

<style scoped>
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