<template>
  <div class="user-wrap">
    <div class="user-bg">
      <div class="user-info">
        <img class="avatar" :src="userInfo.avatar" :alt="userInfo.nickname">
        <p class="nickname">{{userInfo.nickname}}</p>
        <p class="intro">{{userInfo.intro}}</p>
        <button class="attention-btn" v-if="userInfo.isAttention == 0">关注</button>
        <button class="attention-btn has-attention" v-else-if="userInfo.isAttention == 1">已关注</button>
        <p class="major">{{userInfo.major}}</p>
        <ul class="output">
          <li>课程<span>{{userInfo.courseNum}}</span></li>
          <li>关注<span>{{userInfo.attentionNum}}</span></li>
        </ul>
      </div>
    </div>
    <section class="video-box">
      <ul class="video-type">
        <li :class="selectType === 0 ? 'active': ''" @click="selectTypeHandler(0)">免费视频</li>
        <li :class="selectType === 1 ? 'active': ''" @click="selectTypeHandler(1)">付费视频</li>
      </ul>
      <p class="video-num">共100条内容</p>
      <course-list :data="videoList"></course-list>
      <panigation :page="[]" style="margin-top: 46px;"></panigation>
    </section>
  </div>
</template>
<script>
import axios from '~/plugins/axios'
import CourseList from '~/components/CourseList.vue'
import Panigation from '~/components/Panigation.vue'
export default {
  name: 'User',
  components: {
    CourseList,
    Panigation
  },
  data () {
    return {
      selectType: 0
    }
  },
  head () {
    return {
      title: '百课_个人中心',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '百课_个人中心' },
        { hid: 'description', name: 'description', content: '百课_个人中心' }
      ]
    }
  },
  async asyncData ({ params }) {
    let { userInfo, videoList } = await axios.get(`/user/${params.id}`)
    return {
      userInfo,
      videoList
    }
  },
  methods: {
    selectTypeHandler (type) {
      this.selectType = type
    }
  }
}
</script>
<style lang="scss" scoped>
  .user {
    &-bg {
      position: relative;
      width: 100%;
      height: 545px;
      background: url(../../assets/images/user/background.jpg) center no-repeat;
    }
    &-info {
      padding-top: 100px;
      text-align: center;
      .avatar {
        display: block;
        margin: 0 auto;
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
      .nickname {
        margin-top: 4px;
        font-size: 26px;
        color: #333;
        line-height: 26px+28px;
      }
      .intro {
        font-size: 20px;
        line-height: 1;
      }
      .attention-btn {
        display: block;
        margin: 24px auto 30px-5px;
        width: 128px;
        height: 36px;
        background: #3583ff;
        font-size: 16px;
        color: #fff;
        line-height: 36px;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
          background: #1f75fe;
        }
        &.has-attention {
          color: #666;
          background: #f2f2f2;
          &:hover {
            background: #e7e6e6;
          }
        }
      }
      .major {
        margin: 0 auto;
        width: 720px;
        line-height: 24px;
      }
      .output {
        position: absolute;
        bottom: -35px;
        left: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 296px;
        width: 900px;
        height: 70px;
        background: #fff;
        font-size: 24px;
        transform: translateX(-50%);
        span {
          margin-left: 14px;
          font-size: 28px;
          color: #333;
          vertical-align: -2px;
        }
      }
    }
  }
  .video {
    &-type {
      display: flex;
      align-items: center;
      margin-top: 75px;
      font-size: 18px;
      line-height: 20px;
      .active {
        color: #3583ff;
      }
      li {
        cursor: pointer;
        &:first-child {
          margin-right: 22px;
          padding-right: 22px;
          border-right: 1px solid #666;
        }
        &:hover {
          @extend .active;
        }
      }
    }
    &-num {
      margin-top: 10px;
      font-size: 12px;
      line-height: 32px;
      color: #999;
      text-indent: 20px;
    }
  }
</style>
