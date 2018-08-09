<template>
  <div class="course-list" v-if="data.length">
    <div
      class="course-item"
      v-for="(item, index) in data"
      :key="index">
      <div class="course-cover">
        <img :src="item.cover" :alt="item.name">
        <p class="course-time">{{item.watchTime ? `已看到${item.watchTime}`: item.duration}}</p>
      </div>
      <div class="course-cont">
        <p class="course-title" :type="item.type">{{item.title}}</p>
        <p class="course-money">
          <template v-if="item.price > 0">
            <span class="rmb">￥</span>{{item.price}}
          </template>
          <template v-else>
            免费
          </template>
        </p>
        <div class="course-info">
          <div class="course-avatar">
            <img
              :src="item.avatar"
              :alt="item.nickname"><span class="nickname">{{item.nickname}}</span>
          </div>
          <div class="course-num">
            <span class="view-ico-box"><i class="view-ico"></i>{{item.viewNum}}</span>
            <span class="good-ico-box"><i class="good-ico"></i>{{item.goodNum}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CourseList',
  props: {
    // 列表数据
    data: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  }
}
</script>
<style lang="scss">
  %ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  %vt {
    vertical-align: top;
  }
  .course {
    &-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      width: 1180px;
    }
    &-item {
      margin-right: 20px;
      margin-bottom: 24px;
      width: 280px;
      height: 190px+112px;
      background: #fff;
      border-radius: 6px;
      &:nth-child(4n) {
        margin-right: 0;
      }
      &:hover {
        box-shadow: 0 0 8px rgba(22, 22, 22, .14);
      }
    }
    &-cover {
      position: relative;
      width: 100%;
      height: 190px;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }
    }
    &-time {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 0 4px;
      height: 18px;
      font-size: 12px;
      color: #f3f3f3;
      background: rgba(0, 0, 0, .2);
    }
    &-cont {
      padding: 0 10px;
    }
    &-title {
      margin: 18px 0 8px;
      width: 260px;
      height: 16px;
      font-size: 16px;
      color: #333;
      line-height: 16px;
      @extend %ellipsis;
      &:before {
        content: attr(type);
        display: inline-block;
        margin-right: 8px;
        padding: 0 2px;
        line-height: 14px;
        font-size: 12px;
        color: #05ae65;
        border: 1px solid #05ae65;
        @extend %vt;
      }
    }
    &-money {
      font-size: 18px;
      color: #3583ff;
      line-height: 18px+8px;
      text-align: center;
      .rmb {
        font-size: 16px;
      }
    }
    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 32px;
    }
    &-avatar {
      display: flex;
      align-items: center;
      img {
        margin-right: 8px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
      .nickname {
        font-size: 14px;
        color: #666;
      }
    }
    &-num {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #999;
      .view-ico-box {
        margin-right: 20px;
      }
      .good-ico-box {
        margin-right: 6px;
      }
    }
  }
</style>
