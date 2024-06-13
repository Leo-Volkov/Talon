<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {

  }
})
</script>

<template>
  <div class="process">
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
</template>

<style scoped>
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

</style>