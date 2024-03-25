<template>
  <div class="part-one">
    <div class="part-one-text">
      <p class="part-one-title">
        Welcome to ChainQuill, where the future of digital currency management
        unfolds.
      </p>
      <p class="part-one-desc">
        At the forefront of blockchain innovation, we provide sophisticated
        solutions designed to seamlessly integrate with your business needs.
      </p>
      <p class="part-one-desc">
        Our state-of-the-art technology enables secure API connections that
        empower real-time notifications and automated transactions for virtual
        currencies.
      </p>
    </div>
    <img class="part-one-banner" src="@/assets/banner_1.png" alt="" />
    <i class="part-one-bg"></i>
    <span class="part-one-btn" @click="contactUs">Contact Us</span>
  </div>
</template>

<script>
export default {
  methods: {
    contactUs() {
      this.$router.push({ name: "contact" });
    },
  },
};
</script>

<style lang="scss" scoped>
.part-one {
  position: relative;
  padding: 236px 240px 242px;
  text-align: left;
  overflow: hidden;
  &-text {
    position: relative;
    z-index: 2;
  }
  &-title {
    max-width: 1016px;
    font-size: 66px;
    @include gradientText();
  }
  &-desc {
    font-weight: 600;
    max-width: 998px;
    font-family: PingFangSC, PingFang SC;
    font-size: 28px;
    line-height: 36px;
    color: #c8c8c8;
    &:nth-child(2) {
      margin-top: 25px;
    }
    &:nth-child(3) {
      margin-top: 38px;
    }
  }
  &-banner {
    position: absolute;
    width: 962px;
    top: 38px;
    right: -80px;
    z-index: 2;
  }
  &-btn {
    display: inline-block;
    font-size: 30px;
    line-height: 42px;
    padding: 5px 18px;
    border-radius: 30px;
    margin-top: 60px;
    @include gradientBtn();
  }
  &-bg {
    position: absolute;
    width: 1000px;
    height: 1100px;
    background: linear-gradient(
      122deg,
      #000dc3 0%,
      #000dc3 5%,
      #b758d9 40%,
      #ef9961 80%,
      #ef9961 100%
    );
    filter: blur(50px);
    border-radius: 50%;
    top: -300px;
    right: -150px;
    z-index: 1;
  }
}
</style>
