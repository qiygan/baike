<template>
  <div class="dynamic-wrap">
    <div class="dynamic-banner-wrap">
      <img src="~/assets/images/banner/banner5.png" alt="推荐文章动态">
    </div>
    <ul class="dynamic-filter-box">
      <li class="active">全部</li>
      <li>雅思</li>
      <li>托福</li>
      <li>SAT</li>
      <li>SSAT</li>
      <li>ACT</li>
      <li>iTEP</li>
    </ul>
    <section class="dynamic-content">
      <div class="dynamic-list">
        <div
          class="dynamic-item"
          v-for="(item, index) in dynamicList"
          :key="index"
          :style="index === dynamicList.length - 1 ? 'borderBottom: 0' : ''">
          <div class="dynamic-cover">
            <img :src="item.cover" :alt="item.title">
          </div>
          <div class="dynamic-detail">
            <h3 class="dynamic-title">{{item.title}}</h3>
            <p class="dynamic-intro">{{item.intro}}</p>
            <div class="dynamic-info">
              <div class="dynamic-time"><span>{{item.type}}</span>{{item.date}}</div>
              <div class="dynamic-num">
                <div class="view-ico-box"><i class="view-ico"></i>{{item.viewNum}}</div>
                <div class="good-ico-box"><i class="good-ico"></i>{{item.goodNum}}</div>
              </div>
            </div>
          </div>
        </div>
        <panigation class="panigation-left" :page="[]"></panigation>
      </div>
      <!-- <div class="dynamic-recommend">
        <h3 class="dynamic-recommend-title">热门推荐</h3>
        <div class="dynamic-recommend-list">
          <div
            class="dynamic-recommend-item"
            v-for="(item, index) in dynamicRecommendList"
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
      </div> -->
      <recommend-list :data="dynamicRecommendList"></recommend-list>
    </section>
  </div>
</template>
<script>

import axios from 'axios'
import RecommendList from '~/components/RecommendList.vue'
import Panigation from '~/components/Panigation.vue'

export default {
  name: 'Dynamic',
  components: {
    Panigation,
    RecommendList
  },
  data () {
    return {
    }
  },
  // Set Meta Tags for this Page
  head () {
    return {
      title: '百课_文章动态',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '百课_文章动态' },
        { hid: 'description', name: 'description', content: '百课_文章动态' }
      ]
    }
  },
  async asyncData (context) {
    let { data } = await axios.get('https://www.easy-mock.com/mock/5a55b6c8de90b06840dda966/lkker/dynamicList')
    let recommendRes = await axios.get('https://www.easy-mock.com/mock/5a55b6c8de90b06840dda966/lkker/recommendList/dynamic/0', { params: { limit: 5 } })
    return {
      dynamicList: data.dynamicList,
      dynamicRecommendList: recommendRes.data.recommendList
    }
  }
}
</script>
<style lang="scss" scoped>
  .dynamic {
    &-banner-wrap {
      margin: 20px auto 0;
      width: 1180px;
      height: 160px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }
    &-filter-box {
      display: flex;
      margin: 30px auto 20px;
      width: 1180px;
      .active {
        background: #3583ff;
        color: #fff;
      }
      li {
        margin-right: 30px;
        width: 88px;
        height: 40px;
        background: #e7e7e7;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          @extend .active;
        }
      }
    }
    &-content {
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
    }
    &-list {
      width: 800px;
      background: #fff;
      border-radius: 6px;
    }
    &-item {
      display: flex;
      justify-content: space-between;
      padding: 30px 36px 30px 24px;
      height: 210px;
      border-bottom: 1px solid #f2f2f2;
      &:last-child {
        border-bottom: 0;
      }
    }
    &-cover {
      // margin-right: 20px;
      width: 230px;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-detail {
      width: 800px-24px-230px-20px-36px;
    }
    &-title {
      margin-bottom: 16px-6px-5px;
      font-size: 18px;
      font-weight: 400;
      color: #333;
      line-height: 18px+12px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      &:hover {
        color: #3583ff;
      }
    }
    &-intro {
      display: -webkit-box;
      width: 800px-24px-230px-20px-36px;
      line-height: 24px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      word-break: break-all;
      overflow: hidden;
    }
    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px-5px;
      height: 16px;
      font-size: 12px;
      color: #999;
      line-height: 16px;
    }
    &-time {
      span {
        display: inline-block;
        margin-right: 10px;
        padding: 0 1px;
        color: #1cad67;
        line-height: 14px;
        border: 1px solid #1cad67;
      }
    }
    &-num {
      display: flex;
      .view-ico-box {
        margin-right: 12px;
      }
    }
  }
</style>
