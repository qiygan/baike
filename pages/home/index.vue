<template>
  <div class="personal-wrap">
    <div class="personal-bg">
      <div class="personal-info">
        <img class="avatar" src="http://tx.haiqq.com/uploads/allimg/170828/021032I53-9.jpg" alt="头像">
        <p class="nickname">会吃草的鱼</p>
      </div>
    </div>
    <div class="personal-modules">
      <ul>
        <li class="active">观看记录</li>
        <li>我的关注</li>
        <li>我的收藏</li>
        <li>我的分享</li>
        <li>我的订单</li>
        <li>账号设置</li>
      </ul>
    </div>
    <section class="personal-detail personal-record">
      <h4 class="record-title">只显示近一周内的观看记录</h4>
      <div class="record-list">
        <div
          class="record-item"
          v-for="(item, index) in recordList"
          :key="index">
          <div class="record-time">
            <p class="day">{{item[0].date.substr(8, 9)}}</p>
            <p class="date">{{item[0].date.substr(0, 7)}}</p>
          </div>
          <div class="record-badge">&lt;<i></i>&gt;</div>
          <button type="button" class="page-btn page-prev">&lt;</button>
          <button type="button" class="page-btn page-next">&gt;</button>
          <course-list :data="item"></course-list>
          <div class="record-badge bottom" v-if="index == recordList.length - 1">&lt;<i></i>&gt;</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from '~/plugins/axios'
import CourseList from '~/components/CourseList.vue'
import * as _array from 'lodash/array'
export default {
  name: 'Home',
  components: {
    CourseList
  },
  data () {
    return {
    }
  },
  head () {
    return {
      title: '百课_个人主页',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '百课_个人主页' },
        { hid: 'description', name: 'description', content: '百课_个人主页' }
      ]
    }
  },
  async asyncData () {
    let { recordList } = await axios.get('/recordList')
    return {
      recordList: _array.chunk(recordList, 3)
    }
  }
}
</script>
<style lang="scss">
  .personal {
    &-bg {
      width: 100%;
      height: 400px;
      background: url(../../assets/images/user/bg.jpg) center no-repeat;
    }
    &-info {
      padding-top: 104px;
      .avatar {
        display: block;
        margin: 0 auto;
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
      .nickname {
        font-size: 26px;
        line-height: 26px+32px;
        text-align: center;
      }
    }
    &-modules {
      height: 60px;
      background: #fff;
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 1180px;
      }
      .active {
        color: #3583ff;
        border-bottom: 2px solid #3583ff;
      }
      li {
        margin: 0 25px;
        height: 60px;
        font-size: 16px;
        line-height: 60px;
        cursor: pointer;
        &:hover {
          @extend .active;
        }
      }
    }
    &-detail {
      margin-top: 18px;
      margin-bottom: 70px;
      width: 1180px;
      background: #fff;
      border-radius: 6px;
    }
    &-record {
      .record {
        &-title {
          font-size: 12px;
          color: #999;
          line-height: 50px;
          border-bottom: 1px solid #f2f2f2;
          text-indent: 24px;
        }
        &-list {
          padding: 40px 0 312px 28px;
        }
        &-item {
          position: relative;
          margin-left: 132px-24px;
          padding: 30px 0;
          height: 362px;
          border-left: 2px solid #d4d4d4;
          .course-list {
            margin-left: 88px-4px;
            padding: 0 4px;
            width: 880px+8px;
            flex-wrap: nowrap;
            overflow: hidden;
          }
          .course-item {
            box-shadow: 0 0 8px rgba(22, 22, 22, .14);
            &:nth-child(4n) {
              margin-right: 20px;
            }
          }
          .page-btn {
            position: absolute;
            top: (302px-62px)/2+31px;
            width: 28px;
            height: 62px;
            font-size: 20px;
            color: #999;
            background: #fff;
            border: 1px solid #e8e8e8;
            cursor: pointer;
            &:hover {
              border-color: #999;
            }
          }
          .page-prev {
            left: 34px;
          }
          .page-next {
            right: 24px;
          }
        }
        &-time {
          position: absolute;
          top: -5px;
          left: -(88px+18px);
          width: 88px;
          color: #999;
          text-align: center;
          .day {
            font-size: 26px;
            line-height: 36px;
            border-bottom: 2px solid #a7a6a6;
          }
          .date {
            font-size: 22px;
            line-height: 32px;
          }
        }
        &-badge {
          position: absolute;
          top: 0;
          left: -35px;
          height: 18px;
          font-size: 24px;
          color: #c1c1c1;
          line-height: 18px;
          i {
            display: inline-block;
            margin: 0 8px;
            width: 18px;
            height: 18px;
            background: #c1c1c1;
            border-radius: 50%;
          }
          &.bottom {
            top: auto;
          }
        }
      }
    }
  }
</style>
