<template>
  <div>
    <round-avatar @click="toggle"></round-avatar>
    <div class="menu-container">
      <pv-tiered-menu
        id="overlay_tmenu"
        ref="menu"
        :model="items"
        :popup="true"
      />
    </div>
  </div>
</template>

<script>
import RoundAvatar from "./round-avatar.vue";
export default {
  components: { RoundAvatar },
  data() {
    return {
      items: [
        {
          label: "Profile",
          icon: "pi pi-fw pi-user",
        },
        {
          label: "Configuration",
          icon: "pi pi-fw pi-cog",
        },
        {
          label: "Events",
          icon: "pi pi-fw pi-calendar",
        },
        {
          separator: true,
        },
        {
          label: "About",
          icon: "pi pi-fw pi-info-circle",
        },
        {
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
        },
      ],
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
  },
};
</script>

<style scoped>
.menu-container {
  transform: translateY(200px);
}
</style>
