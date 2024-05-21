<template>
  <div class="contact">
    <div class="contact-content">
      <img class="contact-icon" src="@/assets/contact_icon.png" alt="" />
      <i class="top-bg" />
      <span class="contact-title">Contact Us</span>
      <p class="contact-desc">
        For any business inquiries and general questions please contact us.
      </p>
      <div class="contact-info">
        <div class="contact-email">
          <span> support@chainquill.com </span>
        </div>
        <div class="contact-phone">
          <span>
            <a href="tel:+14168798184">(+1) 4168798184</a>
          </span>
        </div>
      </div>
    </div>
    <i class="bottom-bg" />
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="scss" scoped>
.contact {
  position: relative;
  text-align: center;
  padding: 46px 70px 0;
  height: calc(100vh - 140px);
  font-size: 0;
  box-sizing: border-box;

  &-content {
    position: relative;
    z-index: 2;
  }

  &-icon {
    position: relative;
    width: 280px;
    height: 280px;
    z-index: 2;
  }
  .top-bg {
    position: absolute;
    width: 250px;
    height: 300px;
    background: linear-gradient(
      122deg,
      #000dc3 0%,
      #000dc3 10%,
      #b758d9 50%,
      #ef9961 90%,
      #ef9961 100%
    );
    filter: blur(21px);
    top: -90px;
    right: -130px;
    border-radius: 50%;
    z-index: 1;
  }
  &-title {
    font-size: 32px;
    color: #ffffff;
    line-height: 32px;
    margin-top: 30px;
    @include gradientText();
  }
  &-desc {
    font-family: PingFangSC, PingFang SC;
    font-weight: 600;
    font-size: 14px;
    color: #c8c8c8;
    line-height: 24px;
    text-align: center;
    margin-top: 10px;
  }
  &-info {
    margin-top: 80px;
    text-align: center;
    > div {
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      font-size: 16px;
      color: #ffffff;
      line-height: 22px;
      font-style: normal;
      &:nth-child(n + 2) {
        margin-top: 18px;
      }
      &.contact-email {
        > span {
          padding-left: 30px;
          background: url("~@/assets/email_icon.png") no-repeat left center /
            20px auto;
        }
      }
      &.contact-phone {
        > span {
          padding-left: 28px;
          background: url("~@/assets/phone_icon.png") no-repeat left center /
            20px auto;
          > a {
            color: #ffffff;
            text-decoration: none;
            outline: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        }
      }
    }
  }
  .bottom-bg {
    position: absolute;
    width: 400px;
    height: 500px;
    border-radius: 50%;
    background: linear-gradient(
      150deg,
      #000dc3 0%,
      #000dc3 20%,
      #b758d9 50%,
      #ef9961 70%,
      #ef9961 100%
    );
    filter: blur(21px);
    bottom: -300px;
    left: -150px;
    z-index: 1;
  }
}
</style>
