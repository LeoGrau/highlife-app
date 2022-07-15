<template>
  <div class="circle">
    <img
      src="https://images.pexels.com/photos/10242803/pexels-photo-10242803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
  </div>
</template>

<script>
export default {
  name: "round-avatar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.circle {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  object-fit: cover;
  overflow: hidden;
}

.circle > img {
  cursor: pointer;
  width: 100%;
  transform: scale(2) translateY(-5%);
  transition: all 0.1s ease-in-out;
}

.circle:hover > img {
  transform: scale(2.3) translateY(-5%) translateX(-5%);
}
</style>
