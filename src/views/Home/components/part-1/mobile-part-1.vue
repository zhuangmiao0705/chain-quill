<template>
  <div class="part-one">
    <div class="part-one-content">
      <img class="part-one-banner" src="@/assets/banner_1.png" alt="" />
      <p class="part-one-title">
        Welcome to ChainQuill, where the future of digital currency management
        unfolds.
      </p>
      <p class="part-one-desc mp_12">
        At the forefront of blockchain innovation, we provide sophisticated
        solutions designed to seamlessly integrate with your business needs.
      </p>
      <p class="part-one-desc mp_17">
        Our state-of-the-art technology enables secure API connections that
        empower real-time notifications and automated transactions for virtual
        currencies.
      </p>
      <span class="part-one-btn" @click="contactUs">Contact Us</span>
    </div>
    <i class="part-one-bg-1"></i>
    <i class="part-one-bg-2"></i>
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
  font-size: 0;
  padding: 17px 40px 0;
  overflow: hidden;
  &-content {
    position: relative;
    z-index: 2;
  }
  &-banner {
    width: 380px;
    height: 380px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  &-title {
    font-size: 24px;
    line-height: 32px;
    margin-top: -20px;
    @include gradientText();
  }
  &-desc {
    font-weight: 600;
    font-family: PingFangSC, PingFang SC;
    font-size: 14px;
    line-height: 24px;
    color: #c8c8c8;
    &.mp_12 {
      margin-top: 12px;
    }
    &.mp_17 {
      margin-top: 17px;
    }
  }
  &-btn {
    display: inline-block;
    font-size: 18px;
    line-height: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    margin-top: 24px;
    @include gradientBtn();
  }
  &-bg-1 {
    position: absolute;
    width: 250px;
    height: 300px;
    background: linear-gradient(
      122deg,
      #000dc3 0%,
      #000dc3 15%,
      #b758d9 50%,
      #ef9961 90%,
      #ef9961 100%
    );
    filter: blur(20px);
    top: -33px;
    right: -50px;
    border-radius: 50%;
    z-index: 1;
  }
  &-bg-2 {
    position: absolute;
    width: 150px;
    height: 248px;
    border-radius: 50%;
    background: linear-gradient(
      162deg,
      #000dc3 0%,
      #000dc3 20%,
      #b758d9 50%,
      #ef9961 70%,
      #ef9961 100%
    );
    filter: blur(20px);
    top: 140px;
    left: -85px;
  }
}
</style>
