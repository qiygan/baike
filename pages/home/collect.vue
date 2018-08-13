<template>
  <section class="collect-wrap">
    <ul class="collect-type">
      <li :class="selectType === 0 ? 'active': ''" @click="selectTypeHandler(0)">视频</li>
      <li :class="selectType === 1 ? 'active': ''" @click="selectTypeHandler(1)">文章</li>
    </ul>
    <p class="collect-num">共100条内容</p>
    <course-list :data="collectList"></course-list>
    <panigation :page="[]" style="margin-top: 16px;"></panigation>
  </section>
</template>
<script>
import axios from '~/plugins/axios'
import CourseList from '~/components/CourseList.vue'
import Panigation from '~/components/Panigation.vue'
export default {
  layout: 'home',
  name: 'Collect',
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
      title: '百课_个人主页_收藏',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '百课_个人主页_收藏' },
        { hid: 'description', name: 'description', content: '百课_个人主页_收藏' }
      ]
    }
  },
  async asyncData () {
    let { collectList } = await axios.get('/collectList')
    return {
      collectList
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
  .collect {
    &-type {
      display: flex;
      align-items: center;
      margin-top: 30px;
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
