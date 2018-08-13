<template>
  <section class="share-box">
    <div class="share-comment-box">
      <textarea placeholder="在这里可以写下你的分享" maxlength="1000"></textarea>
      <div class="num-limit">1000字以内</div>
      <div class="publish-box">
        <button type="button" class="publish-btn">发表</button>
      </div>
    </div>
    <div class="share-article-list">
      <p class="article-num">共{{shareList.length}}条内容</p>
      <div
        class="article-item"
        v-for="(item, index) in shareList"
        :key="index">
        <h6 class="article-title"><i class="pen-ico"></i>{{item.date}}</h6>
        <div class="article-cont">
          <p class="article-txt">{{item.content}}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from '~/plugins/axios'
export default {
  layout: 'home',
  name: 'Share',
  components: {
    // Panigation
  },
  data () {
    return {
    }
  },
  head () {
    return {
      title: '百课_个人主页_分享',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '百课_个人主页_分享' },
        { hid: 'description', name: 'description', content: '百课_个人主页_分享' }
      ]
    }
  },
  async asyncData () {
    let { shareList } = await axios.get('/shareList')
    return {
      shareList
    }
  }
}
</script>
<style lang="scss" scoped>
  .share {
    &-box {
      margin: 20px auto 70px;
      padding: 50px 60px 0;
      background: #fff;
      border-radius: 6px;
    }
    &-comment-box {
      position: relative;
      display: flex;
      flex-direction: column;
      textarea {
        padding: 18px 20px;
        width: 100%;
        height: 160px;
        line-height: 16px;
        border: 1px solid #ccc;
      }
      .num-limit {
        position: absolute;
        top: 140px;
        right: 11px;
        font-size: 12px;
        color: #ccc;
        line-height: 12px;
      }
      .publish-box {
        margin-top: 28px;
        text-align: right;
      }
      .publish-btn {
        width: 132px;
        height: 36px;
        background: #3583ff;
        font-size: 16px;
        color: #fff;
        line-height: 36px;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
          background: #1f75fe;
        }
      }
    }
    &-article-list {
      margin-top: 30px-18px;
      padding-bottom: 178px;
      .pen-ico {
        margin-right: 14px;
      }
      .article {
        &-num {
          color: #999;
          line-height: 14px+18px+18px;
          border-bottom: 1px solid #f2f2f2;
        }
        &-title {
          margin-top: 28px;
          margin-bottom: 20px;
          font-size: 18px;
          line-height: 21px;
          font-weight: 400;
        }
        &-cont {
          padding: 30px-5px 26px 0;
          height: 148px;
          background: #f0f5fe;
        }
        &-txt {
          color: #999;
          line-height: 24px;
        }
      }
    }
  }
</style>
