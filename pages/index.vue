<template>
  <div class="index-wrap">
    <swiper :options="swiperOption" class="banner-swiper" ref="mySwiper">
      <swiper-slide v-for="(item, index) in [1, 2, 3, 4]" :key="index">
        <img v-if="index==0" src="~/assets/images/banner/banner1.png" />
        <img v-else-if="index==1" src="~/assets/images/banner/banner2.png" />
        <img v-else-if="index==2" src="~/assets/images/banner/banner3.png" />
        <img v-else-if="index==3" src="~/assets/images/banner/banner4.png" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <section class="subject-box">
      <h2 class="title"><span class="point-ico point-left"></span>学科分类<span class="point-ico point-right"></span></h2>
      <div class="subject-list">
        <div class="subject-item know">
          <!-- <i class="subject-ico know-ico" style="background-image: url(../assets/images/common/logo.png)"></i> -->
          <div class="subject-txt">
            <p>全面了解托福<nuxt-child/></p>
            <p>—></p>
          </div>
        </div>
        <div class="subject-item realize">
          <div class="subject-txt">
            <p>从零认识雅思</p>
            <p>—></p>
          </div>
        </div>
        <div class="subject-item sat">
          <div class="subject-txt">
            <p>解读SAT课程</p>
            <p>—></p>
          </div>
        </div>
        <div class="subject-item ssat">
          <div class="subject-txt">
            <p>深入了解SSAT</p>
            <p>—></p>
          </div>
        </div>
        <div class="subject-item act">
          <div class="subject-txt">
            <p>act课程讲解</p>
            <p>—></p>
          </div>
        </div>
        <div class="subject-item itep">
          <div class="subject-txt">
            <p>iTEP课程分析</p>
            <p>—></p>
          </div>
        </div>
        <div class="subject-item more">
          <div class="subject-more-txt">
            <p>更新中，敬请期待</p>
          </div>
        </div>
      </div>
    </section>
    <section class="course-box">
      <h2 class="title">
        <span class="point-ico point-left"></span>
        最新课程
        <span class="point-ico point-right"></span>
        <nuxt-link to="/classroom" class="view-more">更多>></nuxt-link>
      </h2>
      <course-list :data="courseList"></course-list>
    </section>
    <section class="teacher-box">
      <h2 class="title">
        <span class="point-ico point-left"></span>
        教师风采
        <span class="point-ico point-right"></span>
        <nuxt-link to="/teacher" class="view-more">更多>></nuxt-link>
      </h2>
      <div class="teacher-list">
        <div
          class="teacher-item"
          v-for="(item, index) in teacherList"
          :key="index">
          <img
            class="teacher-avatar"
            :src="item.avatar"
            :alt="item.nickname">
          <p class="teacher-name">{{item.nickname}}</p>
          <p class="teacher-intro">{{item.intro}}</p>
          <div class="teacher-output">
            <div>课程<span class="num">{{item.courseNum}}</span></div>
            <div>关注<span class="num">{{item.attentionNum}}</span></div>
          </div>
        </div>
      </div>
    </section>
    <section class="vista-box">
      <div class="vista-inner">
        <div class="vista-cont">
          <h6 class="vista-title">我们的发展，永无止境</h6>
          <p class="vista-intro">这里汇聚了众多知名的教师以及全是干货的教学视频，教师们以饱满的热情讲解自身的经验，旨在打造最新、最全、最便捷的一站式学习平台。</p>
          <ul class="vista-nums">
            <li>
              <p class="num">5000+</p>
              <p class="txt">视频</p>
            </li>
            <li>
              <p class="num">100+</p>
              <p class="txt">教师</p>
            </li>
            <li>
              <p class="num">1000+</p>
              <p class="txt">用户</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import CourseList from '~/components/CourseList.vue'
export default {
  components: {
    CourseList
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          init: () => {
          }
        }
      },
      swiperSlides: [
        '~/assets/images/banner/banner1.png',
        '~/assets/images/banner/banner2.png',
        '~/assets/images/banner/banner3.png',
        '~/assets/images/banner/banner4.png',
        '~/assets/images/banner/banner5.png'
      ]
    }
  },
  async asyncData (context) {
    let { courseList, teacherList } = await axios.get('/courseList')
    return {
      courseList,
      teacherList
    }
  }
}
</script>

<style lang="scss" scoped>
  section {
    padding-top: 60px;
  }
  .title {
    position: relative;
    margin-bottom: 50px;
    font-size: 28px;
    color: #333;
    line-height: 28px;
    text-align: center;
  }
  .point {
    &-ico {
      position: absolute;
      top: 13px;
      width: 78px;
      height: 2px;
      background: #666;
      &:after {
        content: ' ';
        position: absolute;
        top: -6px;
        width: 13px;
        height: 13px;
        background: #666;
        transform: rotate(45deg)
      }
    }
    &-left {
      left: 424px;
      &:after {
        right: 2px;
      }
    }
    &-right {
      right: 424px;
      &:after {
        right: 63px;
      }
    }
  }
  .view-more {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    font-size: 16px;
    color: #666;
    line-height: 28px;
    &:hover {
      color: #333;
    }
  }
  .subject {
    &-list {
      display: flex;
      flex-wrap: wrap;
    }
    &-item {
      margin-right: 20px;
      margin-bottom: 26px;
      width: 280px;
      height: 160px;
      border-radius: 6px;
      &:nth-child(4n) {
        margin-right: 0;
      }
      &.know {
        background: -webkit-linear-gradient(left,#bcbcfd, #bde4f7);
        background: -o-linear-gradient(right, #bcbcfd, #bde4f7);
        background: -moz-linear-gradient(right, #bcbcfd, #bde4f7);
        background: linear-gradient(to right,#bcbcfd, #bde4f7);
      }
      &.realize {
        background: -webkit-linear-gradient(left,#74ebd5, #eefdbe);
        background: -o-linear-gradient(right, #74ebd5, #eefdbe);
        background: -moz-linear-gradient(right, #74ebd5, #eefdbe);
        background: linear-gradient(to right,#74ebd5, #eefdbe);
      }
      &.sat {
        background: -webkit-linear-gradient(left,#ffafbd, #ffc3a0);
        background: -o-linear-gradient(right, #ffafbd, #ffc3a0);
        background: -moz-linear-gradient(right, #ffafbd, #ffc3a0);
        background: linear-gradient(to right,#ffafbd, #ffc3a0);
      }
      &.ssat {
        background: -webkit-linear-gradient(left,#c0aced, #fbc2eb);
        background: -o-linear-gradient(right, #c0aced, #fbc2eb);
        background: -moz-linear-gradient(right, #c0aced, #fbc2eb);
        background: linear-gradient(to right,#c0aced, #fbc2eb);
      }
      &.act {
        background: -webkit-linear-gradient(left,#4ca1af, #9fd5df);
        background: -o-linear-gradient(right, #4ca1af, #9fd5df);
        background: -moz-linear-gradient(right, #4ca1af, #9fd5df);
        background: linear-gradient(to right,#4ca1af, #9fd5df);
      }
      &.itep {
        background: -webkit-linear-gradient(left,#08bce3, #7af9f1);
        background: -o-linear-gradient(right, #08bce3, #7af9f1);
        background: -moz-linear-gradient(right, #08bce3, #7af9f1);
        background: linear-gradient(to right,#08bce3, #7af9f1);
      }
      &.more {
        background: #ebe9e9;
      }
    }
    &-txt {
      margin-top: 50px;
      padding-left: 20px;
      font-size: 20px;
      line-height: 1;
      color: #fff;
      p:first-child {
        margin-bottom: 20px;
      }
    }
    &-more-txt {
      font-size: 20px;
      color: #8c8c8c;
      line-height: 160px;
      text-align: center;
      text-shadow: 4px 3px #dcdcdc;
    }
    &-ico {
      display: inline-block;
      width: 100px;
      height: 60px;
      background-repeat: no-repeat;
    }
  }
  .teacher {
    &-list {
      display: flex;
      justify-content: space-between;
      margin: 110px 0 70px;
    }
    &-item {
      position: relative;
      padding: 0 28px;
      width: 280px;
      height: 342px;
      border-radius: 6px;
      color: #fff;
      &:nth-child(1) {
        background: #dae7fd;
      }
      &:nth-child(2) {
        background: #a6e1e4;
      }
      &:nth-child(3) {
        background: #dcca99;
      }
      &:nth-child(4) {
        background: #cfc0e2;
      }
    }
    &-avatar {
      position: absolute;
      top: -61px;
      left: 79px;
      width: 110px;
      height: 110px;
      border: 6px solid #fff;
      border-radius: 50%;
    }
    &-name {
      margin-top: 77px;
      margin-bottom: 26px-5px;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
    }
    &-intro {
      display: -webkit-box;
      margin-bottom: 22px;
      height: 24px*6;
      line-height: 24px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
      overflow: hidden;
      word-break: break-all;
    }
    &-output {
      display: flex;
      justify-content: space-around;
      font-size: 18px;
      .num {
        margin-left: 8px;
      }
    }
  }
  .vista {
    &-box {
      padding-top: 0;
      width: 100%;
      height: 460px;
      background: url(../assets/images/index/vista-bg.png) no-repeat center;
      background-size: cover;
      color: #fff;
    }
    &-inner {
      width: 100%;
      height: 100%;
      background: -webkit-linear-gradient(left,rgba(53, 131, 255, .5), rgba(51, 237, 200, .5));
      background: -o-linear-gradient(right, rgba(53, 131, 255, .5), rgba(51, 237, 200, .5));
      background: -moz-linear-gradient(right, rgba(53, 131, 255, .5), rgba(51, 237, 200, .5));
      background: linear-gradient(to right,rgba(53, 131, 255, .5), rgba(51, 237, 200, .5));
    }
    &-cont {
      margin: 0 auto;
      width: 960px;
      height: 100%;
      text-align: center;
    }
    &-title {
      padding: 90px 0 50px-7px;
      font-size: 28px;
      font-weight: 400;
      line-height: 28px;
    }
    &-intro {
      margin-bottom: 72px-7px-18px;
      font-size: 20px;
      line-height: 34px;
    }
    &-nums {
      display: flex;
      justify-content: center;
      li {
        padding: 0 45px;
      }
      .num {
        font-size: 40px;
        line-height: 40px+18px+18px;
      }
      .txt {
        font-size: 26px;
        line-height: 26px;
      }
    }
  }
</style>
