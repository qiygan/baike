<template>
  <div class="classroom-wrap">
    <div class="banner-swiper">
      <img src="~/assets/images/banner/banner7.png" alt="推荐教师讲堂">
    </div>
    <div class="classroom-filter-box">
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
      <div class="filter-box first">
        <span class="type-title">方向：</span>
        <ul class="type-box">
          <li class="active">全部</li>
          <li>阅读</li>
          <li>听力</li>
          <li>口语</li>
          <li>写作</li>
        </ul>
      </div>
      <div class="filter-box first">
        <span class="type-title">方向：</span>
        <ul class="type-box">
          <li class="active">全部</li>
          <li>免费课程</li>
          <li>收费课程</li>
        </ul>
      </div>
      <ul class="filter-box second">
        <li class="active">综合推荐</li>
        <li>最新</li>
        <li>最热</li>
      </ul>
    </div>
    <div class="course-list classroom-recommend">
      <div
        class="course-item"
        v-for="(item, index) in courseRecommendList"
        :key="index">
        <nuxt-link
          :to="'/classroom/'+item.id"
          tag="div"
          class="course-cover">
          <img :src="item.cover" :alt="item.name">
          <p class="course-time">{{item.duration}}</p>
          <div class="course-badge strong" v-if="index == 0"></div>
          <div class="course-badge choice" v-else-if="index == 1"></div>
          <div class="course-badge hottest" v-else-if="index == 2"></div>
          <!-- 播放 -->
          <i class="play-ico"></i>
        </nuxt-link>
        <div class="course-cont">
          <p class="course-title" :type="item.type">{{item.title}}</p>
          <p class="course-money" :class="item.price < 10 ? 'txt' : ''">
            <template v-if="item.price >= 10">
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
    <course-list :data="courseList"></course-list>
    <panigation :page="[]" style="margin-top: 36px;"></panigation>
  </div>
</template>
<script>

import axios from '~/plugins/axios'
import CourseList from '~/components/CourseList.vue'
import Panigation from '~/components/Panigation.vue'

export default {
  name: 'Classroom',
  components: {
    CourseList,
    Panigation
  },
  data () {
    return {
    }
  },
  // Set Meta Tags for this Page
  head () {
    return {
      title: '百课_教师讲堂',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '百课_教师讲堂' },
        { hid: 'description', name: 'description', content: '百课_教师讲堂' }
      ]
    }
  },
  async asyncData (context) {
    let { banner, courseRecommendList, courseList } = await axios.get('/classroomList')
    return {
      banner,
      courseRecommendList,
      courseList
    }
  }
}
</script>
<style lang="scss" scoped>
  .classroom {
    &-filter-box {
      margin: 20px auto;
      width: 1180px;
      // height: 122px;
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
    &-recommend {
      margin-top: 30px;
      // 推荐课程
      &.course-list {
        .course {
          &-item {
            width: 380px;
            height: 258px+151px;
            border-radius: 6px;
            &:nth-child(3) {
              margin-right: 0;
            }
            .play-ico {
              display: none;
            }
            &:hover {
              .play-ico {
                display: block;
              }
            }
          }
          &-cont {
            padding: 0 14px;
          }
          &-cover {
            height: 258px;
          }
          &-time {
            height: 22px;
            font-size: 14px;
            line-height: 22px;
          }
          &-title {
            margin-top: 24px;
            margin-bottom: 12px;
            width: 360px;
            height: 18px;
            font-size: 18px;
            line-height: 18px;
            &:before {
              line-height: 16px;
            }
          }
          &-money {
            font-size: 22px;
            line-height: 32px;
            &.txt {
              font-size: 18px;
            }
          }
          &-info {
            height: 42px;
            img {
              margin-right: 10px;
              width: 42px;
              height: 42px;
            }
            .nickname {
              font-size: 16px;
            }
          }
          &-num .good-ico-box {
            margin-right: 6px;
          }
          // 新增
          &-badge {
            position: absolute;
            top: -7px;
            left: -8px;
            width: 98px;
            height: 98px;
            &.strong {
              background: url(../../assets/images/classroom/strong.png);
            }
            &.choice {
              background: url(../../assets/images/classroom/choice.png);
            }
            &.hottest {
              background: url(../../assets/images/classroom/hottest.png);
            }
          }
        }
      }
    }
  }
</style>
