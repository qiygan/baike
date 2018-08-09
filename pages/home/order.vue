<template>
  <section class="order-wrap">
    <ul class="order-type">
      <li :class="selectType === 0 ? 'active': ''" @click="selectTypeHandler(0)">全部</li>
      <li :class="selectType === 1 ? 'active': ''" @click="selectTypeHandler(1)">待支付</li>
      <li :class="selectType === 2 ? 'active': ''" @click="selectTypeHandler(2)">已支付</li>
    </ul>
    <p class="order-num">共100条内容</p>
    <div class="order-list">
      <div
        class="order-item"
        v-for="(item, index) in orderList"
        :key="index">
        <div class="order-detail">
          <div class="order-cover">
            <img :src="item.cover" :alt="item.title">
            <div class="play-ico small-ico"></div>
          </div>
          <div class="order-name">
            <h5 class="order-title">{{item.title}}</h5>
            <div class="order-price"><span>￥</span>{{item.price}}</div>
          </div>
          <div class="order-act" :aaa="item.status">
            <template v-if="item.status === 0">
              <button type="button" class="pay-btn">立即支付</button>
              <button type="button" class="cancle-pay-btn">取消订单</button>
            </template>
            <template v-if="item.status === 1">
              <span class="pay-finish">支付完成</span>
              <button type="button" class="cancle-pay-btn">删除订单</button>
            </template>
            <template v-else-if="item.status === 2">
              <span class="pay-lose">已失效</span>
            </template>
          </div>
        </div>
        <p class="order-number">订单编号：{{item.id}}<span>{{item.date}}</span></p>
      </div>
    </div>
    <panigation :page="[]" style="margin-top: 75px;"></panigation>
  </section>
</template>
<script>
import axios from '~/plugins/axios'
import Panigation from '~/components/Panigation.vue'
export default {
  layout: 'home',
  name: 'Order',
  components: {
    Panigation
  },
  data () {
    return {
      selectType: 0
    }
  },
  head () {
    return {
      title: '百课_个人主页_订单',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '百课_个人主页_订单' },
        { hid: 'description', name: 'description', content: '百课_个人主页_订单' }
      ]
    }
  },
  async asyncData () {
    let { orderList } = await axios.get('/orderList')
    return {
      orderList
    }
  },
  methods: {
    // 切换类型
    selectTypeHandler (type) {
      this.selectType = type
    }
  }
}
</script>

<style lang="scss" scoped>
  .order {
    &-type {
      display: flex;
      align-items: center;
      margin-top: 30px;
      height: 18px;
      font-size: 18px;
      line-height: 20px;
      .active {
        color: #3583ff;
      }
      li {
        padding: 0 22px;
        border-right: 1px solid #666;
        cursor: pointer;
        &:first-child {
          padding-left: 0;
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
    &-item {
      margin-bottom: 20px;
      height: 234px;
      background: #fff;
    }
    &-detail {
      display: flex;
      padding: 24px 0;
      border-bottom: 1px solid #f2f2f2;
    }
    &-cover {
      position: relative;
      margin: 0 26px 0 30px;
      width: 188px;
      height: 140px;
      img {
        width: 100%;
        height: 100%;
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
    &-title {
      margin-top: -5px;
      margin-bottom: 28px-5px;
      width: 360px;
      font-size: 18px;
      color: #333;
      line-height: 18px+10px;
    }
    &-price {
      font-size: 34px;
      color: #3583ff;
      line-height: 34px;
      span {
        font-size: 20px;
      }
    }
    &-act {
      margin-top: 55px-24px;
      margin-left: 338px;
      width: 104px;
      text-align: center;
      button {
        width: 104px;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        border-radius: 2px;
        cursor: pointer;
      }
      .pay-btn {
        margin-bottom: 14px;
        color: #fff;
        background: #3583ff;
        &:hover {
          background: #1f75fe;
        }
      }
      .cancle-pay-btn {
        color: #666;
        background: #f2f2f2;
        &:hover {
          background: #e7e6e6;
        }
      }
      span {
        display: inline-block;
        width: 104px;
        font-size: 16px;
        line-height: 32px;
      }
      .pay-lose {
        color: #666;
        line-height: 16px+120px-60px;
      }
      .pay-finish {
        margin-bottom: 14px;
      }
    }
    &-number {
      font-size: 12px;
      color: #333;
      line-height: 46px;
      text-indent: 30px;
      span {
        margin-left: 32px;
        color: #999;
      }
    }
  }
</style>
