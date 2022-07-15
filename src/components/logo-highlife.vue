<template>
  <div class="logo flex">
    <span>HI</span>
    <span>GH</span>
    <span>L</span>
    <img src="../assets/bullet.svg" alt="bullet svg image" />
    <span>FE</span>
  </div>
</template>

<style scoped>
.logo {
  width: 200px;
}

.logo > span {
  font-family: "Highlife", sans-serif;
  font-size: 40px;
}

.logo > span:nth-child(1),
.logo > span:nth-child(5) {
  color: var(--ducky-yellow);
}

.logo > span:nth-child(2),
.logo > span:nth-child(3) {
  color: white;
}

.logo > img {
  width: 15px;
  height: 37px;
}
</style>
