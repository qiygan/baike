<template>
  <section class="attention-wrap">
    <h5 class="attention-title">共100条内容</h5>
    <div class="attention-list">
      <div
        class="attention-item"
        v-for="(item, index) in attentionList"
        :key="index">
        <nuxt-link
          class="attention-avatar"
          tag="div"
          :to="`/user/${item.userId}`">
          <img :src="item.teacherAvatar" :alt="item.teacherNickname">
        </nuxt-link>
        <div class="attention-details">
          <div class="attention-cont">
            <div class="attention-info">
              <p class="name">{{item.teacherNickname}}</p>
              <p class="intro">{{item.teacherIntro}}</p>
              <ul class="output">
                <li class="course">课程<span>{{item.teacherCourseNum}}</span></li>
                <li>关注<span>{{item.teacherAttentionNum}}</span></li>
              </ul>
              <button type="button" class="btn-default">已关注</button>
            </div>
            <div class="attention-records">
              <div class="records-list">
                <div
                  class="records-item"
                  v-for="(ele, i) in item.courseList"
                  :key="i">
                  <img :src="ele.cover" :alt="ele.title">
                  <p class="records-time">{{ele.duration}}</p>
                </div>
                <button type="button" class="page-btn page-prev">&lt;</button>
                <button type="button" class="page-btn page-next">&gt;</button>
              </div>
            </div>
          </div>
          <p class="attention-major">{{item.teacherMajor}}</p>
        </div>
      </div>
    </div>
    <panigation :page="[]" theme="gray" style="margin: 0 auto; padding: 40px 0 80px;"></panigation>
  </section>
</template>
<script>
import axios from '~/plugins/axios'
import Panigation from '~/components/Panigation.vue'
export default {
  layout: 'home',
  name: 'Attention',
  components: {
    Panigation
  },
  data () {
    return {
    }
  },
  head () {
    return {
      title: '百课_个人主页_关注',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '百课_个人主页_关注' },
        { hid: 'description', name: 'description', content: '百课_个人主页_关注' }
      ]
    }
  },
  async asyncData () {
    let { attentionList } = await axios.get('/attentionList')
    return {
      attentionList
    }
  }
}
</script>
<style lang="scss" scoped>
  .attention {
    &-wrap {
      margin: 20px auto 70px;
      background: #fff;
      border-radius: 6px;
    }
    &-title {
      padding: 0 40px;
      font-size: 12px;
      font-weight: 400;
      color: #999;
      line-height: 52px;
      border-bottom: 1px solid #f2f2f2;
    }
    &-item {
      display: flex;
      justify-content: space-between;
      padding: 40px 40px 0;
      border-bottom: 1px solid #f2f2f2;
      &:last-child {
        border-bottom: 0;
      }
    }
    &-avatar {
      width: 96px;
      cursor: pointer;
      img {
        width: 96px;
        height: 96px;
        border-radius: 50%;
      }
    }
    &-details {
      width: 983px;
    }
    &-cont {
      display: flex;
      justify-content: space-between;
      height: 140px+20px;
      border-bottom: 1px solid #f2f2f2;
    }
    &-info {
      width: 240px;
      .name {
        font-size: 20px;
        color: #333;
        line-height: 1;
      }
      .intro {
        font-size: 16px;
        color: #999;
        line-height: 36px;
      }
      .output {
        display: flex;
        align-items: center;
        margin-top: 8px;
        margin-bottom: 25px;
        height: 20px;
        line-height: 20px;
        font-size: 18px;
        color: #666;
        span {
          margin-left: 14px;
          font-size: 20px;
        }
      }
      .course {
        width: 104px;
      }
      .btn-default {
        width: 90px;
        height: 30px;
        background: #f2f2f2;
        font-size: 14px;
        color: #666;
        line-height: 1;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
          background: #e7e6e6;
        }
      }
    }
    &-records {
      position: relative;
      width: 742px;
      .records-list {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 670px;
        overflow: hidden;
      }
      .records-item {
        position: relative;
        width: 210px;
        height: 140px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .records-time {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 0 4px;
        height: 18px;
        background: rgba(0, 0, 0, .2);
        line-height: 18px;
        font-size: 12px;
        color: #f3f3f3;
      }
      .page-btn {
        position: absolute;
        top: 50px;
        padding: 0;
        width: 20px;
        height: 40px;
        font-size: 18px;
        color: #999;
        background: #fff;
        border: 1px solid #e8e8e8;
        cursor: pointer;
        &:hover {
          border-color: #999;
        }
      }
      .page-prev {
        left: 0;
      }
      .page-next {
        right: 0;
      }
    }
    &-major {
      padding-top: 10px;
      height: 90px;
      color: #999;
      line-height: 24px;
    }
  }
</style>
