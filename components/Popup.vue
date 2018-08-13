<template>
  <div class="layer" v-if="showLayer == 'avatar'">
    <div class="layer-avatar">
      <i class="layer-close" @click="close">×</i>
      <h6 class="layer-title">更换头像</h6>
      <div class="layer-avatar-box">
        <img class="avatar" src="http://tx.haiqq.com/uploads/allimg/170828/021032I53-9.jpg" alt="头像">
        <button type="button" class="btn btn-default btn-small">重新上传</button><button type="button" class="btn btn-primary btn-small">确认</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Popup',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  watch: {
    type () {
      this.showLayer = arguments[0]
    }
  },
  data () {
    return {
      showLayer: ''
    }
  },
  methods: {
    close (type) {
      this.$emit('hideHandler', '')
    }
  }
}
</script>
<style lang="scss" scoped>
  .layer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    &-avatar {
      position: fixed;
      top: 50%;
      left: 50%;
      padding: 0 30px;
      width: 560px;
      height: 363px;
      background: #fff;
      border-radius: 6px;
      transform: translate(-50%, -50%);
    }
    &-close {
      position: absolute;
      top: 0;
      right: 20px;
      font-size: 30px;
      color: #999;
      font-style: normal;
      cursor: pointer;
      &:hover {
        color: #666;
      }
    }
    &-title {
      padding-top: 38px;
      font-size: 18px;
      line-height: 1;
      font-weight: 400;
    }
    &-avatar-box {
      margin: 30px auto 0;
      width: 196px;
      height: 232px;
      .avatar {
        display: block;
        margin: 0 auto 36px;
        width: 164px;
        height: 164px;
        border-radius: 50%;
      }
      button {
        width: 88px;
        height: 32px;
        &.btn-default {
          margin-right: 20px;
        }
      }
    }
  }
</style>
