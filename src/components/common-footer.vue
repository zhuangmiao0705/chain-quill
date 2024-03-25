<template>
  <div class="common-footer">
    <p>© 2022-2024 Bchannel Inc. All rights reserved.</p>
    <i></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.common-footer {
  position: relative;
  height: 100px;
  overflow: hidden;
  @include max768() {
    height: 70px;
  }
  > p {
    position: relative;
    z-index: 99;
    font-size: 28px;
    color: #fff;
    font-family: PingFangSC, PingFang SC;
    line-height: 100px;
    background: #1a1a1a;
    @include max768() {
      font-size: 14px;
    }
  }
  > i {
    position: absolute;
    width: 462px;
    height: 120px;
    background: #ef9961;
    filter: blur(50px);
    right: -380px;
    bottom: -40px;
  }
}
</style>
