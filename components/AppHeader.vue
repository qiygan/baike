<template>
  <div class="app-header">
    <div class="header-top-wrap">
      <div class="header-top-inner">
        <!-- <nuxt-link to="/login" class="login-btn">登录</nuxt-link>
        <nuxt-link to="/register" class="register-btn">注册</nuxt-link> -->
        <nuxt-link
          tag="div"
          class="user-info"
          to="/home"
          title="会吃草的鱼">
          <img src="http://tx.haiqq.com/uploads/allimg/170828/021032I53-9.jpg" class="avatar">
          <span class="name">会吃草的鱼</span>
        </nuxt-link>
      </div>
    </div>
    <div class="header-nav-wrap">
      <div class="header-nav-inner">
        <nuxt-link to="/" class="login-btn">
          <img src="~/assets/images/common/logo.png" alt="logo">
        </nuxt-link>
        <ul class="header-nav">
          <nuxt-link to="/" tag="li">首页</nuxt-link>
          <nuxt-link to="/subject" tag="li">学科介绍</nuxt-link>
          <nuxt-link to="/teacher" tag="li">教师风采</nuxt-link>
          <nuxt-link to="/classroom" tag="li">教师讲堂</nuxt-link>
          <nuxt-link to="/dynamic" tag="li">文章动态</nuxt-link>
          <nuxt-link to="/experience" tag="li">经验分享</nuxt-link>
        </ul>
        <div class="header-search-box">
          <input type="text">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
  %aligncenter {
    margin: 0 auto;
    width: 1180px;
  }
  .header-top {
    &-wrap {
      width: 100%;
      height: 40px;
      background: #fff;
    }
    &-inner {
      @extend %aligncenter;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 40px;
      a {
        display: inline-block;
        padding: 0 12px;
        line-height: 14px;
      }
      .login-btn {
        border-right: 1px solid #666;
      }
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      .name {
        margin: 0 20px 0 10px;
        color: #333;
      }
      .user-info {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
  .header-nav {
    display: flex;
    margin-left: 144px;
    height: 80px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      height: 100%;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      // 当前模块高亮
      &.nuxt-link-exact-active {
        background: #1155c1;
      }
      &:hover {
        @extend .nuxt-link-exact-active;
      }
    }
    &-wrap {
      width: 100%;
      height: 80px;
      background: #3583ff;
      box-shadow: 0 0 10px rgba(75, 142, 250, .5);
    }
    &-inner {
      @extend %aligncenter;
      display: flex;
      align-items: center;
      height: 80px;
    }
  }
  .header-search-box {
    position: relative;
    margin-left: 48px;
    input {
      width: 260px;
      height: 36px;
      background: transparent;
      color: #fff;
      line-height: 36px;
      text-indent: 17px;
      border: 1px solid #fff;
      border-radius: 17px;
      &:focus {
        border-color: #1155c1;
        color: #1155c1;
      }
    }
    /* ::-webkit-input-placeholder {
      color: #fff;
    }
    :-moz-placeholder {
      color: #fff;
    }
    ::-moz-placeholder {
      color: #fff;
    }
    :-ms-input-placeholder {
      color: #fff;
    } */
  }
</style>
