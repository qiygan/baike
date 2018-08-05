<template>
  <div class="teacher-wrap">
    <div class="banner-swiper">
      <img src="~/assets/images/banner/banner8.png" alt="推荐金牌讲师">
    </div>
    <div class="teacher-filter-box">
      <div class="filter-box first">
        <span class="type-title">分类：</span>
        <ul class="type-box">
          <li class="active">全部</li>
          <li>托福</li>
          <li>雅思</li>
          <li>SAT</li>
          <li>SSAT</li>
          <li>ACT</li>
          <li>iTECP</li>
        </ul>
      </div>
      <ul class="filter-box second">
        <li class="active">综合推荐</li>
        <li>课程数</li>
        <li>关注度</li>
      </ul>
    </div>
    <section class="teacher-list">
      <div
        class="teacher-item"
        v-for="(item, index) in teacherList"
        :key="index">
        <div class="teacher-base">
          <img class="teacher-avatar" :src="item.avatar" :alt="item.nickname">
          <p class="teacher-name">{{item.nickname}}</p>
          <div class="teacher-output">
            <div>课程<span class="num">{{item.courseNum}}</span></div>
            <div>关注<span class="num">{{item.attentionNum}}</span></div>
          </div>
          <button
            type="button"
            class="attention-btn"
            :class="item.isAttention ? 'active' : ''">
            {{item.isAttention ? '已关注' : '关注'}}
          </button>
        </div>
        <div class="teacher-info">
          <p class="cont course" txt="课程 : ">{{item.courseName}}</p>
          <p class="cont detail" txt="简介 : ">{{item.intro}}</p>
        </div>
      </div>
    </section>
    <panigation :page="[]"></panigation>
  </div>
</template>
<script>
import axios from 'axios'
import Panigation from '~/components/Panigation.vue'
export default {
  name: 'Teacher',
  components: {
    Panigation
  },
  data () {
    return {
    }
  },
  async asyncData (context) {
    let { data } = await axios.get('https://www.easy-mock.com/mock/5a55b6c8de90b06840dda966/lkker/teacherList')
    return {
      banner: data.banner,
      teacherList: data.teacherList
    }
  }
}
</script>
<style lang="scss" scoped>
  .teacher {
    &-filter-box {
      margin: 20px auto;
      width: 1180px;
      height: 122px;
      background: #fff;
      border-radius: 6px;
      .active {
        color: #3583ff;
      }
      .filter-box {
        display: flex;
        align-items: center;
        font-size: 16px;
        &.first {
          height: 60px;
          line-height: 60px;
          border-bottom: 1px solid #f2f2f2;
        }
        &.second {
          height: 62px;
          li {
            padding: 0 20px;
            line-height: 16px;
            cursor: pointer;
            border-right: 1px solid #666;
            &:last-child {
              border-right: 0;
            }
            &:hover {
              @extend .active;
            }
          }
        }
      }
      .type-title {
        padding: 0 20px;
        color: #999;
      }
      .type-box {
        display: flex;
        cursor: pointer;
        li {
          padding: 0 20px;
          &:hover {
            @extend .active;
          }
        }
      }
    }
    &-list {
      display: flex;
      flex-wrap: wrap;
    }
    &-item {
      margin: 0 20px 22px 0;
      padding-top: 22px;
      width: 280px;
      height: 376px;
      background: #fff;
      border-radius: 6px;
      &:hover {
        box-shadow: 0 0 6px rgba(98, 98, 98, .09);
      }
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
    &-base {
      height: 236px-22px;
      text-align: center;
      border-bottom: 1px solid #f2f2f2;
      .attention-btn {
        width: 88px;
        height: 24px;
        background: #3583ff;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
          background: #1f75fe;
        }
        &.active {
          color: #666;
          background: #f2f2f2;
          &:hover {
            background: #e7e6e6;
          }
        }
      }
    }
    &-avatar {
      display: block;
      margin: 0 auto;
      width: 88px;
      height: 88px;
      border-radius: 50%;
      border: 4px solid #d7e6ff;
    }
    &-name {
      font-size: 18px;
      line-height: 18px+12px+12px;
      color: #333;
    }
    &-output {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px-4px;
      padding: 0 40px;
      font-size: 16px;
      line-height: 16px+8px;
      .num {
        margin-left: 12px;
      }
    }
    &-info {
      margin-top: 20px-6px;
      padding: 0 22px;
      line-height: 26px;
      .cont {
        position: relative;
        width: 236px;
        text-indent: 40px;
        overflow: hidden;
        &:before {
          content: attr(txt);
          position: absolute;
          top: 0;
          left: 0;
          display: inline-block;
          color: #999;
          line-height: 26px;
          text-indent: 0;
        }
        &.course {
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        &.detail {
          // display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          word-break: break-all;
        }
      }
    }
  }
</style>
