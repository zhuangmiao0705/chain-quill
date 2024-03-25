<template>
  <div class="contact">
    <div class="contact-content">
      <span class="contact-title">Contact Us</span>
      <p class="contact-desc">
        For any business inquiries and general questions please contact us.
      </p>
      <div class="contact-info">
        <p class="contact-email">support@chainquill.com</p>
        <p class="contact-phone">
          <a href="tel:+14168798184">(+1) 4168798184</a>
        </p>
      </div>
    </div>
    <img class="contact-icon" src="@/assets/contact_icon.png" alt="" />
    <i class="contact-bg"></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  position: relative;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 610px 0 240px;
  overflow: hidden;
  &-content {
    position: relative;
    text-align: left;
    z-index: 3;
  }
  &-title {
    width: 520px;
    text-align: left;
    font-size: 92px;
    line-height: 110px;
    @include gradientText();
  }
  &-desc {
    font-family: PingFangSC, PingFang SC;
    font-weight: 600;
    font-size: 45px;
    color: #ffffff;
    line-height: 58px;
    text-align: left;
  }
  &-info {
    margin-top: 75px;

    > p {
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      font-size: 32px;
      color: #ffffff;
      line-height: 45px;
      text-align: left;
      font-style: normal;
      padding-left: 60px;
      &:nth-child(n + 2) {
        margin-top: 36px;
      }
      &.contact-email {
        background: url("~@/assets/email_icon.png") no-repeat left center / 42px
          auto;
      }
      &.contact-phone {
        background: url("~@/assets/phone_icon.png") no-repeat left center / 46px
          auto;
        > a {
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
  }
  &-icon {
    position: absolute;
    width: 740px;
    height: 740px;
    right: 0;
    top: 50%;
    transform: translateY(-394px);
    z-index: 2;
  }
  &-bg {
    position: absolute;
    width: 1050px;
    height: 1200px;
    background: linear-gradient(
      122deg,
      #000dc3 0%,
      #b758d9 60%,
      #ef9961 80%,
      #ef9961 100%
    );
    filter: blur(50px);
    top: 50%;
    transform: translateY(-843px);
    right: -200px;
    border-radius: 50%;
    z-index: 1;
  }
}
</style>
