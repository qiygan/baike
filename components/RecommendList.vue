<template>
  <div class="recommend">
    <h3 class="recommend-title">{{title}}</h3>
    <div class="recommend-list">
      <div
        class="recommend-item"
        v-for="(item, index) in data"
        :key="index">
        <div class="cover">
          <img :src="item.cover" :alt="item.title">
        </div>
        <div class="detail">
          <p class="intro">{{item.intro}}</p>
          <div class="time"><span>{{item.type}}</span>{{item.date}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecommendList',
  props: {
    // title
    title: {
      type: String,
      required: false,
      default: function () {
        return '热门推荐'
      }
    },
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
  .recommend {
    padding: 20px 30px 0;
    width: 360px;
    height: 610px;
    background: #fff;
    border-radius: 6px;
  }
  .recommend-title {
    height: 16px;
    font-size: 16px;
    color: #333;
    line-height: 16px;
    border-left: 2px solid #3583ff;
    text-indent: 12px;
  }
  .recommend-item {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #f2f2f2;
    &:last-child {
      border-bottom: 0;
    }
    .cover {
      width: 104px;
      height: 70px;
      img {
        widows: 100%;
        height: 100%;
      }
    }
    .detail {
      margin-top: -4px;
    }
    .intro {
      display: -webkit-box;
      width: 360px-60px-104px-16px;
      color: #333;
      line-height: 22px;
      cursor: pointer;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      word-break: break-all;
      overflow: hidden;
      &:hover {
        color: #3583ff;
      }
    }
    .time {
      margin-top: 14px;
      height: 16px;;
      font-size: 12px;
      line-height: 16px;
      color: #999;
      span {
        display: inline-block;
        margin-right: 8px;
        padding: 0 1px;
        color: #1cad67;
        line-height: 14px;
        border: 1px solid #1cad67;
      }
    }
  }
</style>
