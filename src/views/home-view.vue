<template>
  <div id="home">
    <div class="carousel-container">
      <pv-galleria
        :value="imagesUp"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 100%"
        :showThumbnails="false"
        :showIndicators="true"
        :changeItemOnIndicatorHover="true"
        :showIndicatorsOnItem="true"
        indicatorsPosition="right"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%; display: block"
          />
        </template>
      </pv-galleria>
    </div>
    <div class="browse-games">
      <h1><span>Browse</span> <span>Games</span></h1>
      <div class="flex gap-3 justify-content-center">
        <game-card
          :game="gameCard"
          v-for="gameCard in gameCards"
          :key="gameCard.id"
        ></game-card>
      </div>
    </div>
    <div class="tournaments">
      <h1><span>Tournaments</span></h1>
      <div class="flex gap-3 justify-content-center">
        <tournament-card
          v-for="tournamentCard in tournamentCards"
          :key="tournamentCard.id"
        ></tournament-card>
      </div>
    </div>
    <div class="community">
      <h1><span>Community</span></h1>
    </div>
  </div>
</template>

<script>
import GameCard from "../components/game-card.vue";
import GalleriaService from "../galleria/services/galleria.service";
import GameService from "../games/services/game.service";
import TournamentCard from "../components/tournament-card.vue";
export default {
  components: { GameCard, TournamentCard },
  data() {
    return {
      imagesUp: [],
      imagesDown: [],
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 5,
        },
        {
          breakpoint: "768px",
          numVisible: 3,
        },
        {
          breakpoint: "560px",
          numVisible: 1,
        },
      ],
      gameCards: [
        { id: 1, name: "valorant-card" },
        { id: 2, name: "csgo-card" },
        { id: 3, name: "valorant-card" },
        { id: 4, name: "csgo-card" },
      ],
      tournamentCards: [
        { id: 1, name: "valorant-card" },
        { id: 2, name: "csgo-card" },
        { id: 3, name: "valorant-card" },
      ],
    };
  },
  created() {
    this.getAllPictures();
    this.getAllCardPictures();
  },
  methods: {
    getAllPictures() {
      return GalleriaService.getAllPictures().then((data) => {
        let imageUrls = data;
        this.imagesUp = imageUrls;
        this.imagesDown = imageUrls.slice(0, 5);
      });
    },
    getAllCardPictures() {
      return GameService.getAllGamePictures().then(
        (data) => (this.gameCards = data)
      );
    },
  },
};
</script>

<style scoped>
:deep(.custom-indicator-galleria > .indicator-text) {
  color: #e9ecef;
  cursor: pointer;
}

:deep(.custom-indicator-galleria > .p-highlight > .indicator-text) {
  /*color: var(--primary-color);*/
  color: red;
}

:deep(div.p-galleria-item) {
  width: 100%;
  height: 92vh;
  overflow: hidden;
}

.card {
  display: flex;
  color: white;
}

:deep(div.p-galleria-item > img) {
  width: 100vmax;
  object-fit: cover;
}

:deep(div.p-galleria-item-wrapper) {
  width: 100%;
}

.tournaments,
.community,
.browse-games {
  width: 100%;
  height: 650px;
  background-color: var(--marine-blue);
}
.community > h1,
.tournaments > h1,
.browse-games > h1 {
  padding: 40px 0 35px 100px;
  font-size: 3rem;
}
.community > h1 > span,
.tournaments > h1 > span,
.browse-games > h1 > span {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 200;
}

.browse-games h1 > span:nth-child(1) {
  color: white;
}

.community h1 > span:nth-child(1),
.browse-games h1 > span:nth-child(2) {
  color: var(--ducky-yellow);
}

.tournaments > h1 > span {
  color: var(--red-berry);
}
</style>
