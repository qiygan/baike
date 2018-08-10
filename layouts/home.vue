<template>
  <div>
    <app-header></app-header>
    <div class="personal-wrap">
      <div class="personal-bg">
        <div class="personal-info">
          <div class="avatr">
            <img src="http://tx.haiqq.com/uploads/allimg/170828/021032I53-9.jpg" alt="头像">
            <p @click="layoutType = 'avatar'">更换头像</p>
          </div>
          <p class="nickname">会吃草的鱼</p>
        </div>
      </div>
      <div class="personal-modules">
        <ul>
          <nuxt-link
            tag="li"
            v-for="(item, index) in linkArr"
            :key="index"
            :to="item.link"
          >{{item.navName}}</nuxt-link>
        </ul>
      </div>
      <nuxt/>
      <popup :type="layoutType" @hideHandler="hideLayer"></popup>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import Popup from '~/components/Popup.vue'
export default {
  name: 'LayoutHome',
  components: {
    AppHeader,
    AppFooter,
    Popup
  },
  data () {
    return {
      linkArr: [
        { link: '/home', navName: '观看记录' },
        { link: '/home/attention', navName: '我的关注' },
        { link: '/home/collect', navName: '我的收藏' },
        { link: '/home/share', navName: '我的分享' },
        { link: '/home/order', navName: '我的订单' },
        { link: '/home/setting', navName: '账号设置' }
      ],
      // avatar
      layoutType: ''
    }
  },
  methods: {
    hideLayer (val) {
      this.layoutType = val
    }
  }
}
</script>
<style lang="scss" scoped>
  .personal {
    &-bg {
      width: 100%;
      height: 400px;
      background: url(../assets/images/user/bg.jpg) center no-repeat;
    }
    &-info {
      padding-top: 104px;
      .avatr {
        position: relative;
        display: block;
        margin: 0 auto;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        cursor: pointer;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        p {
          position: absolute;
          left: 0;
          bottom: 0;
          display: none;
          width: 150px;
          height: 40px;
          font-size: 12px;
          color: #fff;
          text-align: center;
          line-height: 40px;
          background: rgba(0, 0, 0, .29);
        }
        &:hover {
          p {
            display: block;
          }
        }
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
        &.nuxt-link-exact-active {
          @extend .active;
        }
      }
    }
  }
</style>
