<template>
  <div class="toast" v-if="show">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "common-toast",
  data() {
    return {
      message: "",
      show: false,
    };
  },
  methods: {
    showToast(message) {
      this.message = message;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 20px;
  max-width: 500px;
}
</style>
