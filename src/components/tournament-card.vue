<template>
  <div class="card flex flex-column">
    <div class="image-container">
      <img
        src="https://cdn-images.win.gg/resize/w/1000/format/webp/type/progressive/fit/cover/path/wp/uploads/2022/03/20160310181048_1.jpg"
        alt=""
      />
    </div>
    <section class="title flex justify-content-between">
      <div class="text-container flex">
        <img src="../assets/price.svg" alt="" />
        <span> $ {{ price }} </span>
        <span v-if="extra > 0"> + $ {{ extra }} </span>
      </div>
      <div class="text-container flex align-items-center gap-2">
        <img src="../assets/diamond.svg" alt="" />
        <span>Prime 50%</span>
      </div>
    </section>
    <section class="description flex">
      <div class="text-container">
        <h4>
          {{
            game +
            " " +
            duelType +
            " " +
            map +
            " - " +
            eventName +
            " - " +
            dayName
          }}
        </h4>
        <h4>Requisites</h4>
        <ul class="requisites">
          <li v-for="requisite in requisites" :key="requisite.id">
            &#x2022; {{ requisite.requisiteName }}
          </li>
        </ul>
        <hr style="width: 354px" />
        <span> {{ eventDate.toGMTString() + " - " + eventContinent }}</span>
        <article class="flex align-items-center">
          <h4 class="mr-2">Available</h4>
          <span>{{ registeredParticipants }}</span>
          <span>/</span>
          <span>{{ availableParticipants }}</span>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 6,
      extra: 9,
      game: "CS:GO",
      duelType: "1V1",
      map: "Aim Map",
      eventName: "Enemy Down",
      dayName: "Saturday",
      requisites: [
        { id: 1, requisiteName: "Free" },
        { id: 2, requisiteName: "Free" },
      ],
      eventDate: new Date(),
      eventContinent: "South America",
      availableParticipants: 2,
      registeredParticipants: 1,
    };
  },
};
</script>

<style scoped>
.card {
  background-color: var(--marine-blue-1);
  border-radius: 15px;
  width: 370px;
  height: 380px;
}

.card .image-container {
  overflow: hidden;
  height: 200px;
}

.card .image-container img {
  object-fit: cover;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
}

.card .text-container {
  font-family: "Poppins", sans-serif;
  padding: 8px;
}

.title {
  background-color: var(--marine-blue-2);
}

.title .text-container:nth-child(1) {
  min-width: 130px;
}

.title .text-container:nth-child(1) img {
  margin: 0px 3px 0 3px;
}
.title .text-container span:nth-child(3) {
  margin-left: 3px;
  color: var(--ducky-yellow);
}

.title .text-container:nth-child(2) span {
  color: var(--ducky-yellow);
}

.title .text-container:nth-child(2) span:hover {
  text-decoration: underline;
}

.description .text-container span,
.description .text-container h4 {
  font-size: 0.8rem;
}

.description .text-container h4:nth-child(2) {
  color: var(--ducky-yellow);
}

.requisites {
  list-style: none;
}
.requisites li {
  font-size: 0.75rem;
}
</style>
