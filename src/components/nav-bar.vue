<template>
  <div class="navbar flex flex-row justify-content-between align-items-center">
    <logo-highlife></logo-highlife>
    <div class="flex flex-row justify-content-between align-items-center">
      <div class="notifications flex gap-2">
        <pv-button
          v-for="notification in notifications"
          :key="notification.id"
          :icon="notification.icon"
          class="p-button-rounded p-button-info"
        />
      </div>
      <div class="options flex gap-2">
        <pv-button
          v-for="option in options"
          :key="option.id"
          :icon="option.icon"
          @click="goToPath(option.to)"
          class="p-button-rounded p-button-info"
        />
      </div>
      <profile-options></profile-options>
    </div>
  </div>
</template>

<script>
import LogoHighlife from "./logo-highlife.vue";
import ProfileOptions from "./profile-options.vue";
export default {
  components: { ProfileOptions, LogoHighlife },
  name: "nav-bar",
  data() {
    return {
      data: 12,
      notifications: [{ id: 1, icon: "pi pi-bell" }],
      options: [
        { id: 1, icon: "pi pi-home", to: "" },
        { id: 2, icon: "pi pi-star", to: "favorites" },
      ],
    };
  },
  methods: {
    goToPath(path) {
      this.$router.push(`/${path}`);
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: rgb(19, 27, 59);
  min-height: 75.27px;
  height: 8vh;
  padding: 10px;
}

.navbar > div:nth-child(2) {
  width: 200px;
}
:deep(span.pi) {
  color: var(--marine-blue);
}
:deep(button.p-button.p-component.p-button-icon-only.p-button-rounded.p-button-info) {
  background: var(--ducky-yellow);
  border: none;
}
</style>
