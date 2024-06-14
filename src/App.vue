<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  transition-duration: .2s;
  border-radius: 2vw;
  font-weight: 700;
}

body {
  background-color: rgb(56, 104, 216);
}

:root {
  --button-color: rgb(255, 106, 0);
}

button {  
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 30px;
}

p,
h1,
h2,
h3 {
  margin: 0;
  text-align: center;
  font-weight: 700;
}
</style>
