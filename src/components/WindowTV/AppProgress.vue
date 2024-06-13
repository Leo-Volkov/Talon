<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      Call_index: 0, 
    }
  },
  mounted() {
    this.pulData()
  },
  methods: {
    pulData() {

    }
  }
})
</script>

<template>
  <div class="process">
    <div  id="0" class="cart">
      <p class="num_doc">{{ "Б4" }}</p>
      <p class="window">Окно 1</p>
    </div>
    <div id="1" class="cart">
      <p class="num_doc">{{ 'Б3' }}</p>
      <p class="window">Окно 2</p>
    </div>
    <div id="2" class="cart">
      <p class="num_doc">{{ 'Б2' }}</p>
      <p class="window">Окно 3</p>
    </div>
    <div id="3" class="cart">
      <p class="num_doc">{{ "ВБ3" }}</p>
      <p class="window">Окно 4</p>
    </div>
    <div id="4" class="cart">
      <p class="num_doc">{{ 'ВБ2' }}</p>
      <p class="window">Окно 5</p>
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
  gap: 2vw;
  padding-left: 1.5vw;
}

.process .cart {
  padding: 0.5vw 2vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  color: rgb(56, 104, 216);
}

.process .cart p {
  font-size: 3vw;
  font-weight: 900;
}


.mirth_cart {
  animation-duration: 5s;
  animation-name: mirth_cart;
}

@keyframes mirth_cart {
  from {
    background-color: red;
    color: #ffffff;
  }
  60% {
    background-color: red;
    color: #ffffff;
  }
  to {
    background-color: white;
  }
}
</style>