<template>
  <div class="part-three">
    <span class="part-three-title">Let's Connect</span>
    <p class="part-three-subtitle">
      Interested in Crypto transfer solutions for your business?
    </p>
    <p class="part-three-desc">
      Fill out the form and we will get back to you. We'd love to help you with
      your business.
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
          We have received your information a dedicated member of our team will
          be in contact with you shortly.
        </p>
        <div class="back-btn" @click="showThanks = false">Go back</div>
      </div>
    </div>
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
  margin-top: -150px;
  padding: 0 240px;
  &-title {
    font-size: 62px;
    line-height: 74px;
    @include gradientText();
  }
  &-subtitle {
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
  }
  &-card {
    margin-top: 40px;
    border-radius: 40px;
    text-align: center;
    @include cardBorder();
    &-content {
      padding: 64px 60px;
    }
    .input-content {
      display: flex;
      > div {
        flex: 0 0 50%;
        &.base-input {
          padding-right: 26px;
          box-sizing: border-box;
          input {
            background: transparent;
            outline: none;
            border: none;
            width: 100%;
            border-bottom: 2px dashed #ffffff;
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 32px;
            line-height: 85px;
            text-align: left;
            font-style: normal;
            color: #ffffff;

            &:nth-child(n + 2) {
              margin-top: 40px;
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
          display: flex;
          flex-direction: column;
          padding-left: 26px;
          .help-input-desc {
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 32px;
            color: #ffffff;
            line-height: 45px;
            text-align: left;
          }
          textarea {
            margin-top: 15px;
            flex: 1;
            border-radius: 40px;
            border: 2px dashed #ffffff;
            background: transparent;
            color: #ffffff;
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            font-size: 32px;
            color: #ffffff;
            line-height: 45px;
            text-align: left;
            padding: 25px;
            outline: none;
            resize: none;
          }
        }
      }
    }
    .submit {
      position: relative;
      margin-top: 60px;
      display: inline-block;
      &-btn {
        display: inline-block;
        font-size: 30px;
        color: #ffffff;
        line-height: 42px;
        padding: 10px 48px;
        border-radius: 30px;
        @include gradientBtn();
      }
      > i {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        background: rgba($color: #ffffff, $alpha: 0.3);
        border-radius: 30px;
      }
    }
  }
  .thanks-card {
    margin-top: 40px;
    border-radius: 40px;
    text-align: center;
    @include cardBorder();
    &-content {
      padding: 286px 190px 58px;
    }
    .thanks-title {
      font-family: Barlow, Barlow;
      font-weight: bold;
      font-size: 62px;
      color: #ffffff;
      line-height: 74px;
    }
    .thanks-desc {
      margin-top: 20px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 600;
      font-size: 32px;
      color: #ffffff;
      line-height: 45px;
    }
    .back-btn {
      display: inline-block;
      font-size: 30px;
      color: #ffffff;
      line-height: 42px;
      padding: 10px 48px;
      border-radius: 30px;
      margin-top: 220px;
      @include gradientBtn();
    }
  }
}
</style>
