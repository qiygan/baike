<template>
  <section class="dynamic-detail-wrap">
    <div class="dynamic-details">
      <div class="dynamic-detail-cont">
        <h2 class="dynamic-detail-title">{{dynamicDetail.title}}</h2>
        <div class="dynamic-detail-info">
          <div class="dynamic-detail-time"><span>{{dynamicDetail.type}}</span>{{dynamicDetail.time}}</div>
          <div class="dynamic-detail-num">
            <span class="view-ico-box"><i class="view-ico"></i>{{dynamicDetail.viewNum}}</span>
            <span class="good-ico-box"><i class="good-ico"></i>{{dynamicDetail.goodNum}}</span>
          </div>
        </div>
        <div class="dynamic-detail-content">
          <p>对于托福听力怎么练，有很多种方法，但是大家在备考的时候要做的就是找到适合自己的方法进行练习。大家还要总结一些托福听力技巧，了解一下关于托福听力评分标准的相关内容。为大家整理了五个常用的托福听力练习方法，供大家参考和借鉴。</p>
          <p><span>第一项：</span>精听练习听力，对于任何一种英语考试来说，托福听力怎么练都少不了精听这一环节。到底该怎么精听呢？其步骤如下：一边听一边看听力材料原文，划出自己不认识或似曾相识但反应不过来的词;录音结束，开始查生词，写在原文的旁边，只要写出这个单词在这篇文章中的意思即可;然后将这篇材料当阅读文章快速精读一遍，彻底看懂;再一边看原文，一边放录音，嘴上要跟读，反复几遍，一直听到可以不看原文彻底听懂为止。</p>
          <p><span>第二项：</span>听写托福听力怎么练，大家比较常见的一种练习方法就是听写，这是大家比较熟悉的练习方法，也是相对来说对所有考生都行之有效的一种方法。它就是将一篇托福听力录音中的原文全部听录下来，一句一句丝毫不落，它是提高听力最有效的方法。</p>
          <p><span>第三项：</span>要培养时时在考试的感觉，时时听英语的感觉。要为自己创造一个英文的环境，比如早晨一起床，我们就打开音箱播放英语，可以是托福的听力材料，可以是英文广播，也可以是一部英文电影等，这样做的好处是随时都可以听到英语，在潜移默化中不知不觉地加深对英语的敏感度，培养语感。这是一个比较长期的任务。</p>
          <p><span>第四项：</span>用相对老说高于自己能力的材料进行挑战练习备考托福听力挑战性的材料有这几类：一是美国大学上课的课堂录像或录音，现在很多美国大学已经将许多公开课的课堂录像放在了互联网上，这是一个极佳的挑战听力难度的材料。二是巴朗和Kaplan上的试题可以选用或者用DELTA上的试题通过变速软件加2倍速来做，这样就会超越考试难度。虽然过程痛苦，而且容易打击信心，但是用更难的材料练习，再去听容易的就会比较容易听出来，心理上也有很大的自信心。</p>
          <p><span>第五项：</span>进行概括托福听力怎么练，我们首先推荐就是进行概括，概括就是在听过听力材料后，备考的同学可以对文章大意进行总结和概括。考生不需要听懂托福材料的每一个细节，但要抓住说话人的思路和框架。据谷天田研究表明：这个训练对于托福听力至关重要。练习概括的方法也很简单，可以用托福听力中的lecture为材料，一边听一边记笔记，录音结束后，根据大脑记忆和笔记，对全文重点内容用英文进行复述，这样反复练习，直到可以将一篇lecture文章完全复述出来为止。</p>
        </div>
        <div class="btns-box">
          <button type="button" class="collect-btn" v-if="dynamicDetail.isCollect == 0">收藏</button>
          <button type="button" class="collect-btn has-collect" v-else-if="dynamicDetail.isCollect == 1">已收藏</button>
          <button type="button" class="like-btn" v-if="dynamicDetail.isGood == 0">点赞<span>{{dynamicDetail.videoGoodNum}}</span></button>
          <button type="button" class="like-btn has-like" v-else-if="dynamicDetail.isGood == 1">点赞<span>{{dynamicDetail.videoGoodNum}}</span></button>
        </div>
      </div>
      <comment-box :data="commentList" :page="[]"></comment-box>
    </div>
    <recommend-list style="height:610px;" :data="recommendList"></recommend-list>
  </section>
</template>
<script>
import axios from 'axios'
import CommentBox from '~/components/CommentBox.vue'
import RecommendList from '~/components/RecommendList.vue'
export default {
  name: 'DynamicDetail',
  components: {
    CommentBox,
    RecommendList
  },
  async asyncData ({params}) {
    let baseURL = 'https://www.easy-mock.com/mock/5a55b6c8de90b06840dda966/lkker'
    let { data } = await axios.get(`${baseURL}/dynamicDetail/${params.id}`)
    let recommendRes = await axios.get(`${baseURL}/recommendList/dynamicDetail/${params.id}`, { params: { limit: 5 } })
    return {
      dynamicDetail: data.dynamicDetail,
      commentList: data.commentList,
      recommendList: recommendRes.data.recommendList
    }
  }
}
</script>
<style lang="scss" scoped>
  .dynamic-detail {
    &-wrap {
      display: flex;
      justify-content: space-between;
      margin: 20px auto 70px;
    }
    &s{
      width: 800px;
    }
    &-cont {
      margin-bottom: 20px;
      padding: 36px-14px 30px 80px;
      background: #fff;
      border-radius: 6px;
    }
    &-title {
      font-size: 22px;
      color: #333;
      line-height: 22px+28px;
    }
    &-info {
      display: flex;
      align-items: center;
      margin-bottom: 9px;
      height: 16px;
      font-size: 12px;
      color: #999;
    }
    &-time span{
      display: inline-block;
      margin-right: 10px;
      padding: 0 1px;
      line-height: 14px;
      color: #1cad67;
      border: 1px solid #1cad67;
    }
    &-num {
      margin-left: 30px;
      .view-ico-box {
        margin-right: 12px;
      }
    }
    &-content {
      p {
        padding: 14px 0;
        line-height: 28px;
        text-indent: 2em;
        span {
          color: #333;
        }
      }
    }
  }
  .btns-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 64px-28px;
    height: 38px;
    button {
      width: 130px;
      height: 38px;
      font-size: 16px;
      line-height: 30px;
      cursor: pointer;
      border: 1px solid #3583ff;
      color: #3583ff;
      text-align: center;
      border-radius: 2px;
    }
    .collect-btn {
      margin-right: 60px;
      background: transparent;
      &:hover {
        color: #fff;
        background: #3583ff;
      }
      &.has-collect {
        color: #999;
        border-color: #ccc;
        &:hover {
          color: #fff;
          background: #3583ff;
          border-color: #3583ff;
        }
      }
    }
    .like-btn {
      color: #fff;
      background: #3583ff;
      span {
        margin-left: 8px;
      }
      &:hover {
        background: #1f75fe;
      }
      &.has-like {
        color: #999;
        border-color: #f2f2f2;
        background: #f2f2f2;
        &:hover {
          cursor: no-drop;
        }
      }
    }
  }
</style>
