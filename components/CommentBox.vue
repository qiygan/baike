<template>
  <div class="comment-wrap">
    <div class="comment-act">
      <textarea placeholder="在这里可以写下你的想法" maxlength="1000"></textarea>
      <div class="num-limit">1000字以内</div>
      <div class="publish-box">
        <button type="button" class="publish-btn">发表</button>
      </div>
      <div class="comment-list">
        <p class="comment-total-num">共{{data.length}}条内容</p>
        <div
          class="comment-item"
          v-for="(item, index) in commentList"
          :key="index">
          <div class="comment-content">
            <nuxt-link
              class="comment-avatar"
              :to="`/user/${item.userId}`">
              <img :src="item.avatar" :alt="item.nickname">
            </nuxt-link>
            <div class="comment-info">
              <p class="comment-nickname">{{item.nickname}}<span class="time">时间：{{item.time}}</span></p>
              <p class="comment-cont">{{item.content}}</p>
            </div>
          </div>
          <div class="comment-btns">
            <div class="comment-btn comment-good" @click="goodHandler(index)"><i class="good-ico"></i><span>{{item.goodNum}}</span></div>
            <div class="comment-btn comment-reply" @click="showReplyHandler(index)"><i class="comment-ico"></i></div>
          </div>
          <div class="comment-reply-box" v-show="item.isShowReplay">
            <textarea placeholder="请输入回复内容" v-model="item.replyCont"></textarea>
            <p class="reply-num">100字以内</p>
            <div class="reply-btns">
              <button type="button" class="reply-btn cancle-btn" @click="hideReplyHandler(index)">取消</button>
              <button type="button" class="reply-btn confirm-btn" @click="replyHandler(index)">回复</button>
            </div>
          </div>
        </div>
      </div>
      <panigation class="panigation-left" style="width: 740px;" :page="page"></panigation>
    </div>
  </div>
</template>
<script>
import Panigation from '~/components/Panigation.vue'
export default {
  name: 'CommentBox',
  props: {
    // 评论列表数据
    data: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
    // 分页数据
    page: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  },
  components: {
    Panigation
  },
  data () {
    return {}
  },
  computed: {
    commentList () {
      let result = []
      for (let item of this.data) {
        item.isShowReplay = 0
        item.replyCont = ''
        result.push(item)
      }
      return result
    }
  },
  methods: {
    // 点赞
    goodHandler (index) {
      this.commentList[index].goodNum++
    },
    // 显示评论框
    showReplyHandler (index) {
      this.commentList[index].isShowReplay = !this.commentList[index].isShowReplay
    },
    // 隐藏评论框
    hideReplyHandler (index) {
      this.commentList[index].isShowReplay = 0
    },
    // 回复事件
    replyHandler (index) {
      alert(this.commentList[index].replyCont)
      this.commentList[index].isShowReplay = 0
    }
  }
}
</script>
<style lang="scss">
  .comment-wrap {
    padding: 40px 30px 0;
    width: 800px;
    background: #fff;
    border-radius: 6px;
  }
  .comment-act {
    position: relative;
    display: flex;
    flex-direction: column;
    textarea {
      padding: 20px-2px 20px;
      width: 740px;
      height: 140px;
      line-height: 16px;
      border: 1px solid #ccc;
      &:focus {
        border-color: #999;
      }
    }
    .num-limit {
      position: absolute;
      right: 11px;
      top: 118px;
      font-size: 12px;
      color: #ccc;
      line-height: 12px;
    }
  }
  .publish-box {
    margin-top: 16px;
    text-align: right;
  }
  .publish-btn {
    width: 112px;
    height: 34px;
    background: #3583ff;
    font-size: 16px;
    color: #fff;
    line-height: 34px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      background: #1f75fe;
    }
  }
  .comment {
    &-list {
      margin-top: 30px-12px;
    }
    &-total-num {
      color: #999;
      line-height: 14px+24px;
      border-bottom: 1px solid #f2f2f2;
    }
    &-item {
      padding: 20px 0 14px;
      border-bottom: 1px solid #f2f2f2;
    }
    &-content {
      display: flex;
    }
    &-avatar {
      margin-right: 16px;
      width: 62px;
      height: 62px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    &-info {
      width: 740px-62px-16px;
    }
    &-nickname {
      margin-bottom: 16px-9px-5px;
      line-height: 14px+9px+9px;
    }
    .time {
      margin-left: 30px;
      font-size: 12px;
      color: #999;
    }
    &-cont {
      color: #333;
      line-height: 24px;
    }
    &-btns {
      display: flex;
      justify-content: flex-end;
      margin-top: 2px;
      margin-bottom: 14px;
      .comment-btn  {
        width: 78px;
        height: 26px;
        color: #999;
        line-height: 26px;
        text-align: center;
        background: #f0f5fe;
        cursor: pointer;
        &:hover {
          background: #e9f1fe;
        }
      }
      .comment-good {
        margin-right: 10px;
      }
    }
    &-reply-box {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-left: 62px+16px;
      width: 740px-62px-16px;
      textarea {
        width: 100%;
        height: 92px;
      }
      .reply-num {
        position: absolute;
        top: 70px;
        right: 10px;
        font-size: 12px;
        color: #ccc;
        line-height: 12px;
      }
      .reply-btns {
        margin-top: 10px;
        height: 28px;
        text-align: right;
      }
      .reply-btn {
        height: 28px;
        line-height: 28px;
        cursor: pointer;
      }
      .cancle-btn {
        margin-right: 20px;
        background: transparent;
        color: #666;
        &:hover {
          color: #3583ff;
        }
      }
      .confirm-btn {
        width: 80px;
        color: #fff;
        line-height: 28px;
        background: #3583ff;
        border-radius: 2px;
        &:hover {
          background: #1f75fe;
        }
      }
    }
  }
</style>
