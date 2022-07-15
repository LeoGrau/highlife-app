<template>
  <div class="card-container">
    <div class="card">
      <img :src="game.itemImageSrc" alt="" />
    </div>
    <p>{{ game.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  border-radius: 10px;
  width: 250px;
  height: 420px;
  background-color: maroon;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 12px;
}

.card > img {
  width: 100%;
  min-height: 420px;
  object-fit: cover;
  transition: all 0.2s ease-in;
}
.card:hover > img {
  transform: scale(1.1);
}

.card-container > p {
  color: white;
  font-family: "Teko", sans-serif;
  font-size: 28px;
}
</style>
