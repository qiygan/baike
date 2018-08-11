<template>
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
</template>
<script>
import axios from '~/plugins/axios'
import CourseList from '~/components/CourseList.vue'
import * as _array from 'lodash/array'
export default {
  layout: 'home',
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
      title: '百课_个人主页_观看记录',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '百课_个人主页_观看记录' },
        { hid: 'description', name: 'description', content: '百课_个人主页_观看记录' }
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
          width: 90px;
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
