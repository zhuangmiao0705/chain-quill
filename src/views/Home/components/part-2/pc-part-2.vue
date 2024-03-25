<template>
  <div class="part-two">
    <p class="part-two-title">Our solutions <span>for you</span></p>
    <p class="part-two-subtitle">
      Seamless Cryptocurrency Transactions with ChainQuill API：
    </p>
    <p class="part-two-desc">
      At ChainQuill, we are committed to simplifying the intricacy of
      cryptocurrency transactions for our clients. Our robust API solutions are
      designed to facilitate seamless interactions between your systems and the
      dynamic world of virtual currencies.
    </p>
    <div class="part-two-content">
      <swiper class="part-two-card" :options="swiperOption">
        <swiper-slide>
          <p class="part-two-card-title">Receiving System Integration</p>
          <p class="part-two-card-desc width_1014">
            Connect your company's system with our API to enable a sophisticated
            monitoring and notification mechanism. Our service allows you to:
          </p>
          <p class="part-two-card-title top_40">
            Automatically Detect Transactions:
          </p>
          <p class="part-two-card-desc">
            Instantly identify when specified entities send virtual currency to
            designated wallets.
          </p>
          <p class="part-two-card-title top_40">Effortless Feedback Loop:</p>
          <p class="part-two-card-desc width_948">
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
          <p class="part-two-card-title top_85">Initiate Transfer Requests:</p>
          <p class="part-two-card-desc">
            Easily send commands via our API to execute the transfer of virtual
            currencies to specified wallets.
          </p>
          <p class="part-two-card-title top_40">Control and Command:</p>
          <p class="part-two-card-desc">
            Direct the flow of virtual currency with confidence, knowing that
            our system handles the complexities of blockchain transactions on
            your behalf.
          </p>
          <img class="swiper-icon_2" src="@/assets/banner_3.png" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-navigation" slot="navigation">
        <span class="swiper-button-prev"></span>
        <span class="swiper-button-next"></span>
      </div>
    </div>
    <i class="end-bg"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
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
  padding: 0 240px 250px;
  overflow: hidden;
  &-title {
    font-family: Barlow, Barlow;
    font-weight: bold;
    font-size: 64px;
    color: #ffffff;
    line-height: 77px;
    text-align: center;
    font-style: normal;

    > span {
      @include gradientText();
    }
  }
  &-subtitle {
    margin-top: 20px;
    font-family: PingFangSC, PingFang SC;
    font-weight: 600;
    font-size: 32px;
    color: #ffffff;
    line-height: 45px;
    text-align: center;
    font-style: normal;
  }
  &-desc {
    font-family: PingFangSC, PingFang SC;
    font-weight: 600;
    font-size: 24px;
    color: #c8c8c8;
    line-height: 36px;
    text-align: center;
    font-style: normal;
    margin-top: 4px;
  }
  &-content {
    position: relative;
    z-index: 2;
    margin-top: 40px;
    border-radius: 40px;
    @include cardBorder();
    .swiper-navigation {
      position: absolute;
      top: 60px;
      right: 100px;

      > img {
        width: 40px;
        height: 40px;
      }
      ::v-deep .swiper-button-disabled {
        opacity: 1;
      }
    }
    .swiper-icon_1 {
      position: absolute;
      width: 520px;
      height: 520px;
      right: -10px;
      bottom: 50px;
    }
    .swiper-icon_2 {
      position: absolute;
      width: 580px;
      height: 580px;
      right: 0;
      bottom: 0;
    }
  }
  &-card {
    padding: 60px 0 80px 60px;
    &-title {
      max-width: 800px;
      font-family: Barlow;
      font-weight: bold;
      font-size: 46px;
      color: #ffffff;
      line-height: 55px;
      text-align: left;

      &.top_85 {
        margin-top: 85px;
      }
      &.top_40 {
        margin-top: 40px;
      }
    }
    &-desc {
      max-width: 800px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      font-size: 32px;
      color: #ffffff;
      line-height: 45px;
      text-align: left;
      &.width_1014 {
        max-width: 1014px;
      }
      &.width_948 {
        max-width: 948px;
      }
    }
    .swiper-pagination {
      top: auto;
      bottom: 24px;

      ::v-deep .swiper-pagination-bullet {
        width: 16px;
        height: 16px;
        background: #5b567e;
        &:nth-child(n + 2) {
          margin-left: 20px;
        }
        &.swiper-pagination-bullet-active {
          background: #fff;
        }
      }
    }
  }
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    background: url("@/assets/arrow_left_active.png") no-repeat center / 100%;
    left: -50px;
    &::after {
      content: "";
    }
    &.swiper-button-disabled {
      background: url("@/assets/arrow_left.png") no-repeat center / 100%;
    }
  }
  .swiper-button-next {
    width: 40px;
    height: 40px;
    background: url("@/assets/arrow_right_active.png") no-repeat center / 100%;
    right: -50px;
    &::after {
      content: "";
    }
    &.swiper-button-disabled {
      background: url("@/assets/arrow_right.png") no-repeat center / 100%;
    }
  }
  .end-bg {
    position: absolute;
    width: 400px;
    height: 540px;
    border-radius: 50%;
    background: linear-gradient(
      122deg,
      #000dc3 0%,
      #000dc3 15%,
      #b758d9 60%,
      #ef9961 80%,
      #ef9961 100%
    );
    filter: blur(50px);
    right: -150px;
    top: 700px;
    z-index: 1;
  }
}
</style>
