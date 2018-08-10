<template>
  <div class="panigation-box" :class="theme">
    <div class="panigation-inner">
      <span class="active">1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span class="disabled">...</span>
      <span class="next">下一页</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Panigation',
  props: {
    // 分页数据
    page: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
    // 主题(白色/灰色)
    theme: {
      type: String,
      required: false
    }
  }
}
</script>
<style lang="scss">
  .panigation {
    &-box {
      margin: 60px auto 70px;
      width: 1180px;
      &.panigation-left {
        margin-top: 40px;
        width: 800px;
        .active {
          color: #fff;
          background: #3583ff;
        }
        span {
          background: #e7e7e7;
        }
      }
      &.gray {
        .active {
          color: #fff;
          background: #3583ff;
        }
        span {
          background: #e7e7e7;
        }
      }
    }
    &-inner {
      display: flex;
      justify-content: center;
      text-align: center;
      .active {
        color: #fff;
        background: #3583ff;
      }
      span {
        margin-right: 12px;
        width: 40px;
        height: 34px;
        line-height: 34px;
        color: #999;
        background: #fff;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          @extend .active;
        }
        &.prev,
        &.next {
          width: 80px;
        }
        &.disabled {
          cursor: no-drop;
          &:hover {
            color: #999;
            background: #fff;
          }
        }
      }
    }
  }
</style>
