<template>
  <section class="setting-wrap">
    <ul class="setting-type">
      <li :class="selectType === 0 ? 'active': ''" @click="selectTypeHandler(0)">基本资料</li>
      <li :class="selectType === 1 ? 'active': ''" @click="selectTypeHandler(1)">安全设置</li>
    </ul>
    <div class="setting-box">
      <div class="setting-basic-inner" v-show="selectType == 0">
        <div class="item">
          <label for="phone">手机号</label>
          <input type="text" v-model="form.phone" class="input-readonly" readonly>
          <span class="edit">修改</span>
        </div>
        <div class="item">
          <label for="name">昵称</label>
          <input type="text" v-model="form.name" class="input-pointer" readonly>
        </div>
        <div class="item">
          <label for="name">性别</label>
          <input type="text" v-model="form.sex" class="input-pointer" readonly @click="showDrop('sex')">
          <i class="down-ico" :class="drop.sex ? 'up-ico' : ''"></i>
          <ul class="drop-down" :class="!drop.sex ? 'hide' : ''">
            <li @click="selectHandler('sex', '男')">男</li>
            <li @click="selectHandler('sex', '女')">女</li>
            <li @click="selectHandler('sex', '保密')">保密</li>
          </ul>
        </div>
        <div class="item">
          <label for="name">所在地</label>
          <input type="text" v-model="form.city" class="input-pointer" readonly @click="showDrop('city')">
          <i class="down-ico" :class="drop.city ? 'up-ico' : ''"></i>
          <ul class="drop-down" :class="!drop.city ? 'hide' : ''">
            <li @click="selectHandler('city', '北京')">北京</li>
            <li @click="selectHandler('city', '上海')">上海</li>
            <li @click="selectHandler('city', '深圳')">深圳</li>
          </ul>
        </div>
        <button type="button" class="btn-primary">保存</button>
      </div>
      <div class="setting-safe-inner" v-show="selectType == 1">
        <div class="item">
          <h6 class="type">登录密码<span>（已设置）</span></h6>
          <div class="cont">
            <p class="declare">密码要求至少包含字母，符号或数字中的两项且长度超过6位，建议您经常修改密码，以保证帐号更加安全。</p>
            <button type="button" class="btn btn-primary btn-small">修改</button>
          </div>
        </div>
        <div class="item">
          <h6 class="type">手机绑定<span>（已绑定）</span></h6>
          <div class="cont">
            <p class="declare">可用手机号加密码登录，可通过手机号找回密码</p>
            <button type="button" class="btn btn-primary btn-small">修改</button>
          </div>
        </div>
        <div class="item social">
          <h6 class="type">社交账号</h6>
          <div class="cont">
            <p class="declare">绑定第三方账户后，就可以使用以下网站账户登录，并同步分享</p>
          </div>
          <ul class="other-login">
            <li>
              <div class="wx"></div>
              <p class="type">微信</p>
              <p class="status">（未绑定）</p>
              <button type="button" class="btn btn-primary btn-small">立即绑定</button>
            </li>
            <li>
              <div class="sina"></div>
              <p class="type">微信</p>
              <p class="status">（未绑定）</p>
              <button type="button" class="btn btn-default btn-small">立即绑定</button>
            </li>
            <li>
              <div class="qq"></div>
              <p class="type">微信</p>
              <p class="status">（未绑定）</p>
              <button type="button" class="btn btn-default btn-small">立即绑定</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: 'home',
  name: 'Setting',
  data () {
    return {
      selectType: 0,
      drop: {
        sex: 0,
        city: 0
      },
      form: {
        phone: 13693542314,
        name: 'angel',
        sex: '女',
        city: '北京'
      }
    }
  },
  head () {
    return {
      title: '百课_个人主页_设置',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '百课_个人主页_设置' },
        { hid: 'description', name: 'description', content: '百课_个人主页_设置' }
      ]
    }
  },
  methods: {
    // 切换类型
    selectTypeHandler (type) {
      this.selectType = type
    },
    // 下拉框
    showDrop (type) {
      this.drop[type] = !this.drop[type]
    },
    // 下拉框选择事件
    selectHandler (type, val) {
      this.form[type] = val
      this.drop[type] = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.setting {
  &-type {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
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
  &-box {
    margin-bottom: 70px;
    height: 800px;
    background: #fff;
    border-radius: 6px;
  }
  &-basic-inner {
    margin: 0 auto;
    padding-top: 80px-10px;
    width: 1180px-420px-420px;
    .item {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      height: 34px;
    }
    label {
      margin-right: 30px;
      width: 50px;
      font-size: 16px;
      color: #999;
      text-align: right;
      line-height: 34px;
    }
    .input-readonly {
      width: 102px;
      height: 34px;
      font-size: 16px;
      color: #666;
      line-height: 34px;
    }
    .input-pointer {
      width: 260px;
      height: 34px;
      background: #f2f2f2;
      font-size: 16px;
      color: #666;
      text-indent: 20px;
      line-height: 34px;
      cursor: pointer;
    }
    .edit {
      margin-left: 16px;
      color: #3583ff;
      line-height: 34px;
      cursor: pointer;
      &:hover {
        color: #1f75fe;
      }
    }
    button {
      margin-top: 40px-24px;
      margin-left: 80px;
    }
    i {
      position: absolute;
      top: 13px;
      right: 20px;
    }
    .drop-down {
      position: absolute;
      top: 34px;
      right: 0;
      z-index: 1;
      padding: 5px 20px;
      width: 260px;
      background: #f9f7f7;
      li {
        margin: 5px 0;
        height: 16px;
        line-height: 16px;
        color: #666;
        cursor: pointer;
        &:hover {
          color: #3583ff;
        }
      }
    }
  }
  &-safe-inner {
    margin: 0 auto;
    padding-top: 80px-30px;
    width: 790px;
    .item {
      padding: 14px 56px;
      border-bottom: 1px solid #f2f2f2;
      &.social {
        border-bottom: 0;
        .cont {
          height: 54px;
        }
      }
    }
    .type {
      font-size: 16px;
      color: #333;
      line-height: 16px+16px+16px;
      font-weight: 400;
      span {
        font-size: 14px;
        color: #1f75fe;
      }
    }
    .cont {
      display: flex;
      height: 68px;
      .declare {
        margin-top: -5px;
        margin-right: 50px;
        width: 540px;
        line-height: 24px;
      }
    }
    .other-login {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 454px;
      height: 177px;
      text-align: center;
      li {
        width: 90px;
        height: 177px;
      }
      div {
        margin: 0 auto;
        width: 80px;
        height: 80px;
        background-color: #f2f2f2;
        border-radius: 50%;
        background-repeat: no-repeat;
          background-position: center;
        &.wx {
          background-image: url(../../assets/images/common/wx.png);
        }
        &.sina {
          background-image: url(../../assets/images/common/sina.png);
        }
        &.qq {
          background-image: url(../../assets/images/common/qq.png);
        }
      }
      .type {
        margin: 10px 0 8px;
        font-size: 16px;
        line-height: 16px;
      }
      .status {
        margin-bottom: 18px;
        color: #3583ff;
        line-height: 14px;
      }
    }
  }
}
</style>
