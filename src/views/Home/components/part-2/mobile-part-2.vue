<template>
  <div class="part-two">
    <div class="part-two-text">
      <p class="part-two-title">Our solutions <span>for you</span></p>
      <p class="part-two-subtitle">
        Seamless Cryptocurrency Transactions with ChainQuill API：
      </p>
      <p class="part-two-desc">
        At ChainQuill, we are committed to simplifying the intricacy of
        cryptocurrency transactions for our clients.<br />Our robust API
        solutions are designed to facilitate seamless interactions between your
        systems and the dynamic world of virtual currencies.
      </p>
    </div>
    <div class="part-two-content">
      <swiper class="part-two-card" :options="swiperOption">
        <swiper-slide>
          <p class="part-two-card-title">Receiving System Integration</p>
          <p class="part-two-card-desc">
            Connect your company's system with our API to enable a sophisticated
            monitoring and notification mechanism. Our service allows you to:
          </p>
          <p class="part-two-card-title top_20">
            Automatically Detect Transactions:
          </p>
          <p class="part-two-card-desc">
            Instantly identify when specified entities send virtual currency to
            designated wallets.
          </p>
          <p class="part-two-card-title top_20">Effortless Feedback Loop:</p>
          <p class="part-two-card-desc">
            Without manual intervention, our system confirms successful receipt
            and automatically relays detailed feedback to your company's
            backend. This includes Transaction Volume, Currency Type, Blockchain
            Variety.
          </p>
          <img class="swiper-icon_1" src="@/assets/banner_2.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <p class="part-two-card-title">Sending System Capability</p>
          <p class="part-two-card-desc">
            Our services extend to outbound transactions, enabling your
            company’s backend to:
          </p>
          <p class="part-two-card-title top_20">Initiate Transfer Requests:</p>
          <p class="part-two-card-desc">
            Easily send commands via our API to execute the transfer of virtual
            currencies to specified wallets.
          </p>
          <p class="part-two-card-title top_20">Control and Command:</p>
          <p class="part-two-card-desc">
            Direct the flow of virtual currency with confidence, knowing that
            our system handles the complexities of blockchain transactions on
            your behalf.
          </p>
          <img class="swiper-icon_2" src="@/assets/banner_3.png" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <i class="part-two-bg-1"></i>
    <i class="part-two-bg-2"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
      },
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {},
  },
};
</script>

<style lang="scss" scoped>
.part-two {
  position: relative;
  margin-top: 40px;
  padding: 0 20px;
  overflow: hidden;
  font-size: 0;
  &-text {
    position: relative;
    padding: 0 24px;
    z-index: 2;
  }
  &-title {
    font-family: Barlow;
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
    line-height: 30px;
    text-align: center;
    font-style: normal;

    > span {
      @include gradientText();
    }
  }
  &-subtitle {
    font-family: PingFangSC, PingFang SC;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    line-height: 22px;
    text-align: center;
    font-style: normal;
  }
  &-desc {
    font-family: PingFangSC, PingFang SC;
    font-weight: 600;
    font-size: 14px;
    color: #c8c8c8;
    line-height: 24px;
    text-align: center;
    margin-top: 8px;
  }
  &-content {
    position: relative;
    z-index: 2;
    margin-top: 20px;
    border-radius: 18px;
    @include cardBorder();
    .swiper-icon_1 {
      width: 280px;
      height: 280px;
      margin-top: 10px;
    }
    .swiper-icon_2 {
      width: 320px;
      height: 320px;
      margin-top: 10px;
      margin-left: 34px;
    }
  }
  &-card {
    padding: 30px 0;
    .swiper-slide {
      padding: 0 20px;
      box-sizing: border-box;
    }
    &-title {
      font-family: Barlow;
      font-weight: bold;
      font-size: 24px;
      color: #ffffff;
      line-height: 30px;
      text-align: center;

      &.top_20 {
        margin-top: 20px;
      }
    }
    &-desc {
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      font-size: 14px;
      color: #ffffff;
      line-height: 24px;
      text-align: center;
      padding: 0 22px;
    }
    .swiper-pagination {
      top: auto;
      bottom: 16px;

      ::v-deep .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        background: #5b567e;
        &:nth-child(n + 2) {
          margin-left: 8px;
        }
        &.swiper-pagination-bullet-active {
          background: #fff;
        }
      }
    }
  }
  &-bg-1 {
    position: absolute;
    width: 160px;
    height: 228px;
    background: linear-gradient(
      122deg,
      #000dc3 0%,
      #000dc3 15%,
      #b758d9 50%,
      #ef9961 90%,
      #ef9961 100%
    );
    filter: blur(20px);
    right: -80px;
    top: 100px;
    border-radius: 50%;
    z-index: 1;
  }
  &-bg-2 {
    position: absolute;
    width: 32px;
    height: 156px;
    background: linear-gradient(162deg, #000dc3 0%, #b758d9 66%, #ef9961 100%);
    filter: blur(20px);
    border-radius: 50%;
    left: -16px;
    top: 260px;
    z-index: 1;
  }
}
</style>
