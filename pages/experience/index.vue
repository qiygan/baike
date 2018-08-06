<template>
  <div class="experience-wrap">
    <div class="banner-swiper">
      <img src="~assets/images/banner/banner9.jpg" alt="经验分享banner">
    </div>
    <section class="experience-skill">
      <div class="experience-skill-inner">
        <h2><span>技巧分享</span></h2>
        <p>做阅读题的第一步就是读题，读完题以后带着问题阅读文章，进行答案的定位。在读文章定位的时候要注意同义词替换。很多时候题目中使用的单词和原文中出现的单词并不完全一样，而是同义词。只有带着这种意识，才能在读文章的时候准确的找到问题所对应的的段落或者句子。在找到每个题目对应句子以后，就要使用划分句子成分的方法才能找准答案所对应的词汇。例如：问题实际上要求我们去找动词的主语，而答案却写成动词所带的宾语。我就是这么错了很多题，好像很多阅读分数难以提高的同学或多或少都有这些问题。这种错误实际上就是逻辑不清，而解决这个问题的方法就是划分句子成分，采用这种方法理清句子中的信息。</p>
        <div class="experience-member">
          <img src="http://tx.haiqq.com/uploads/allimg/170828/021032I53-9.jpg" alt="孙同学">
          <span>孙同学</span>
        </div>
      </div>
    </section>
    <section class="experience-recommend">
      <h3>大家都在看</h3>
      <course-list :data="courseRecommendList"></course-list>
    </section>
  </div>
</template>
<script>

import axios from 'axios'
import CourseList from '~/components/CourseList.vue'

export default {
  name: 'Experience',
  components: {
    CourseList
  },
  data () {
    return {
    }
  },
  // Set Meta Tags for this Page
  head () {
    return {
      title: '百课_经验分享',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '百课_经验分享' },
        { hid: 'description', name: 'description', content: '百课_经验分享' }
      ]
    }
  },
  async asyncData (context) {
    let { data } = await axios.get('https://www.easy-mock.com/mock/5a55b6c8de90b06840dda966/lkker/experienceList')
    return {
      courseRecommendList: data.courseRecommendList
    }
  }
}
</script>
<style lang="scss" scoped>
  .banner-swiper {
    height: 500px;
  }
  .experience {
    &-skill {
      position: relative;
      // padding: 60px-14px 76px 60px;
      height: 434px-45px;
    }
    &-skill-inner {
      position: absolute;
      top: -45px;
      left: 0;
      padding: 60px-14px 76px 60px;
      width: 100%;
      height: auto;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 0 5px rgba(52, 51, 51, .07);
      h2 {
        font-size: 24px;
        color: #333;
        text-align: center;
        line-height: 24px+28px;
      }
      p {
        margin-top: 40px-7px;
        font-size: 18px;
        line-height: 18px+14px;
        text-indent: 2em;
      }
    }
    &-member {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px-7px;
      height: 50px;
      font-size: 16px;
      color: #999;
      text-align: center;
      img {
        margin-right: 16px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    &-recommend {
      margin: 60px auto 70px-24px;
      h3 {
        margin-bottom: 30px;
        font-size: 24px;
        color: #333;
        line-height: 24px;
        text-indent: 14px;
        border-left: 2px solid #3583ff;
      }
    }
  }
</style>
