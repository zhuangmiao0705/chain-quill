<template>
  <div class="part-three">
    <div class="part-three-content">
      <span class="part-three-title">Let's Connect</span>
      <p class="part-three-subtitle">
        Interested in Crypto transfer solutions for your business?
      </p>
      <p class="part-three-desc">
        Fill out the form and we will get back to you. We'd love to help you
        with your business.
      </p>
      <div v-if="!showThanks" class="part-three-card">
        <div class="part-three-card-content">
          <div class="input-content">
            <div class="base-input">
              <input
                v-model="formObj.first_name"
                :class="{ error_input: errorParamList.includes('first_name') }"
                type="text"
                placeholder="First name*"
                @input="inputFn('first_name')"
              />
              <input
                v-model="formObj.last_name"
                :class="{ error_input: errorParamList.includes('last_name') }"
                type="text"
                placeholder="Last Name*"
                @input="inputFn('last_name')"
              />
              <input
                v-model="formObj.email"
                :class="{ error_input: errorParamList.includes('email') }"
                type="text"
                placeholder="Email address*"
                @input="inputFn('email')"
              />
              <input
                v-model="formObj.phone"
                type="text"
                placeholder="Contact number:"
              />
              <input
                v-model="formObj.company"
                type="text"
                placeholder="Business website:"
              />
            </div>
            <div class="help-input">
              <p class="help-input-desc">What we can help you*</p>
              <textarea v-model="formObj.content"></textarea>
            </div>
          </div>
          <div class="submit">
            <div class="submit-btn" @click="submitFn">Submit</div>
            <i v-if="loading"></i>
          </div>
        </div>
      </div>
      <div v-else class="thanks-card">
        <div class="thanks-card-content">
          <p class="thanks-title">Thank you for reaching out to us.</p>
          <p class="thanks-desc">
            We have received your information a dedicated member of our team
            will be in contact with you shortly.
          </p>
          <div class="back-btn" @click="showThanks = false">Go back</div>
        </div>
      </div>
    </div>
    <i v-if="!showThanks" class="card-bottom-bg"></i>
    <i class="part-three-bg-1"></i>
    <i class="part-three-bg-2"></i>
  </div>
</template>

<script>
import mixins from "./mixins";
export default {
  mixins: [mixins],
};
</script>

<style lang="scss" scoped>
.part-three {
  position: relative;
  margin-top: 40px;
  padding: 0 20px;
  font-size: 0;
  &-content {
    position: relative;
    z-index: 2;
  }
  &-title {
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    @include gradientText();
  }
  &-subtitle {
    font-family: PingFangSC, PingFang SC;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    line-height: 22px;
    text-align: center;
    padding: 0 38px;
    margin-top: 5px;
  }
  &-desc {
    font-family: PingFangSC, PingFang SC;
    font-weight: 600;
    font-size: 14px;
    color: #c8c8c8;
    line-height: 24px;
    text-align: center;
    margin-top: 8px;
    padding: 0 38px;
  }
  &-card {
    margin-top: 20px;
    border-radius: 18px;
    text-align: center;
    @include cardBorder();
    &-content {
      padding: 30px 20px;
    }
    .input-content {
      > div {
        &.base-input {
          input {
            background: transparent;
            outline: none;
            border: none;
            width: 100%;
            border-bottom: 1px dashed #ffffff;
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 16px;
            line-height: 36px;
            text-align: left;
            font-style: normal;
            color: #ffffff;

            &:nth-child(n + 2) {
              margin-top: 14px;
            }

            &::placeholder {
              color: rgba(255, 255, 255, 0.43);
            }
            &.error_input {
              color: #ff3c3c;
              &::placeholder {
                color: #ff3c3c;
              }
            }
          }
        }
        &.help-input {
          .help-input-desc {
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 16px;
            color: #ffffff;
            line-height: 22px;
            text-align: left;
            margin-top: 20px;
          }
          textarea {
            width: 100%;
            height: 400px;
            box-sizing: border-box;
            margin-top: 8px;
            border-radius: 18px;
            border: 2px dashed #ffffff;
            background: transparent;
            color: #ffffff;
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 16px;
            color: #ffffff;
            line-height: 22px;
            text-align: left;
            padding: 14px 18px;
            outline: none;
            resize: none;
          }
        }
      }
    }
    .submit {
      position: relative;
      margin-top: 20px;
      display: inline-block;
      &-btn {
        display: inline-block;
        font-size: 18px;
        color: #ffffff;
        line-height: 20px;
        padding: 10px 28px;
        border-radius: 20px;
        @include gradientBtn();
      }
      > i {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        background: rgba($color: #ffffff, $alpha: 0.3);
        border-radius: 20px;
      }
    }
  }
  .thanks-card {
    position: relative;
    z-index: 2;
    margin-top: 20px;
    border-radius: 18px;
    text-align: center;
    @include cardBorder();
    &-content {
      padding: 140px 28px 20px;
    }
    .thanks-title {
      font-family: Barlow;
      font-weight: bold;
      font-size: 32px;
      color: #ffffff;
      line-height: 38px;
    }
    .thanks-desc {
      margin-top: 8px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      font-size: 16px;
      color: #ffffff;
      line-height: 22px;
    }
    .back-btn {
      display: inline-block;
      font-size: 18px;
      color: #ffffff;
      line-height: 20px;
      padding: 10px 28px;
      border-radius: 30px;
      margin-top: 120px;
      @include gradientBtn();
    }
  }
  .card-bottom-bg {
    position: absolute;
    width: 200px;
    height: 136px;
    background: linear-gradient(
      162deg,
      #000dc3 0%,
      #000dc3 20%,
      #b758d9 66%,
      #ef9961 100%
    );
    filter: blur(33px);
    bottom: -140px;
    right: -100px;
    z-index: 1;
    border-radius: 50%;
  }
  &-bg-1 {
    position: absolute;
    width: 150px;
    height: 200px;
    background: linear-gradient(
      227deg,
      #000dc3 0%,
      #b758d9 40%,
      #ef9961 60%,
      #ef9961 100%
    );
    filter: blur(33px);
    right: -60px;
    top: -50px;
    border-radius: 50%;
    z-index: 1;
  }
  &-bg-2 {
    position: absolute;
    width: 120px;
    height: 260px;
    background: linear-gradient(
      162deg,
      #000dc3 0%,
      #b758d9 50%,
      #ef9961 80%,
      #ef9961 100%
    );
    filter: blur(20px);
    left: -70px;
    top: 85px;
    border-radius: 50%;
  }
}
</style>
