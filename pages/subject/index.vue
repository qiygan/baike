<template>
  <div class="subject-wrap">
    <swiper :options="swiperOption" class="banner-swiper" ref="mySwiper">
      <swiper-slide v-for="(item, index) in [1, 2, 3, 4]" :key="index">
        <img v-if="index==0" src="~/assets/images/banner/banner6.png" />
        <img v-else-if="index==1" src="~/assets/images/banner/banner1.png" />
        <img v-else-if="index==2" src="~/assets/images/banner/banner2.png" />
        <img v-else-if="index==3" src="~/assets/images/banner/banner4.png" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <section class="subject-cont">
      <ul class="subject-filter">
        <li class="active">托福</li>
        <li>雅思</li>
        <li>SAT</li>
        <li>SSAT</li>
        <li>ACT</li>
        <li>iTEP</li>
      </ul>
      <div class="subject-intro">
        <p>托福是由美国教育测验服务社（ETS）举办的英语能力考试，全名为“检定非英语为母语者的英语能力考试”，中文由TOEFL而音译为“托福”。</p>
        <p>TOEFL有三种，分别是： pbt—paper based test 纸考 677, cbt—computer based test 机考 300, ibt—internet based test 网考 120, 新托福满分是120分。TOEFL考试的有效期为两年，是从考试日期开始计算的。例如：2003年1月18日参加考试，这次考试成绩的有效期是从2003年1月18日到2005年1月18日。托福复习主要资料为托福机经又称民间托福答案题库。</p>
      </div>
    </section>
    <section class="subject-list">
      <div class="subject-item">
        <img class="subject-cover" src="~/assets/images/subject/reading.png" alt="阅读"/>
        <div class="subject-detail">
          <div class="subject-title">阅读部分 Reading</div>
          <p class="subject-text">有三篇文章。与老托福不同的是，考生不需要在答题之前通读全文，而是在做题的过程中分段阅读文章。每篇文章对应有11道试题，均为选择题。除了最后一道题以外，其他试题都是针对文章的某一部分提问，试题的出现顺序与文章的段落顺序一致。最后一题针对整篇文章提问，要求考生从多选项中挑选若干项对全文进行总结或归纳。新一代托福阅读文章的篇幅比老托福阅读文章的篇幅略长，难度也有所增加。这部分持续时间为1小时，在此时限中考生可以复查、修改已递交的答案。</p>
        </div>
      </div>
      <div class="subject-item">
        <img class="subject-cover" src="~/assets/images/subject/listening.png" alt="阅读"/>
        <div class="subject-detail">
          <div class="subject-title">听力部分 Listening</div>
          <p class="subject-text">听力部分是由两篇较长的校园情景对话和四篇课堂演讲组成，课堂演讲每篇长约5分钟。由于是机考，考生在听录音资料之前无法得知试题。在播放录音材料时，电脑屏幕上会显示相应的背景图片。考生可以在听音过程中记笔记，不能复查、修改已递交的答案。这个部分持续大约50分钟。</p>
        </div>
      </div>
      <div class="subject-item">
        <img class="subject-cover" src="~/assets/images/subject/speaking.jpg" alt="阅读"/>
        <div class="subject-detail">
          <div class="subject-title">口语部分 Speaking</div>
          <p class="subject-text">把TSE（Test of Spoken English）融合在新托福中，然而与现行的TSE相比又有较大改动。这个部分共有6题，持续时间约为20分钟，每道口语会被一位考官给一个原始分（0-4之间的整数分）答案至少会被三个不同的考官评分。考生可以在听音的过程中记笔记以帮助答题，在准备答题的过程时，屏幕上会显示倒计时的时钟。值得注意的是，托福口语的回答重在如何去描述而并非你的回答，所以在回答的时候，可以在句子里面加上一些其他的成分使句子更加的复杂和流畅，彰显我们的语言能力。一定要记住轻视回答，重视表达， 避免中式的直接， 选择英美的“啰嗦”。</p>
        </div>
      </div>
      <div class="subject-item">
        <img class="subject-cover" src="~/assets/images/subject/writing.png" alt="阅读"/>
        <div class="subject-detail">
          <div class="subject-title">写作部分 Writing</div>
          <p class="subject-text">托福作文分为两个部分，要求考生在1小时内完成两篇作文。其中一篇要求考生在30分钟内就某一话题阐述自己的观点，字数要求为300字以上。另一篇则要求考生首先阅读一篇文章，五分钟以后，文章隐去，播放一段与文章有关的课堂演讲。课堂演讲列举了一些论据反驳文章中的论点、论据。随后要求考生在20分钟内写一篇作文，总结课堂演讲的论点、论据，并陈述这些论点、论据是如何反驳文章的论点、论据的，字数要求为250字左右。在写作时，文章会重新显示在屏幕上。作文不要求考生阐述自己的观点。共有四位老师评分，2位评综合，2位评独立，原始分数为0-5分。</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Subject',
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          init: () => {
          }
        }
      },
      swiperSlides: [
        '~/assets/images/banner/banner1.png',
        '~/assets/images/banner/banner2.png',
        '~/assets/images/banner/banner3.png',
        '~/assets/images/banner/banner4.png',
        '~/assets/images/banner/banner5.png',
        '~/assets/images/banner/banner6.png'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .subject {
    &-cont {
      margin: 20px auto 0;
      background: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, .09);
    }
    &-filter {
      display: flex;
      justify-content: center;
      height: 60px;
      font-size: 16px;
      border-bottom: 1px solid #f2f2f2;
      li {
        margin: 0 25px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        &.active {
          color: #3583ff;
          border-bottom: 2px solid #3583ff;
        }
        &:hover {
          @extend .active;
        }
      }
    }
    &-intro {
      position: relative;
      padding: 64px;
      p {
        text-indent: 2em;
        font-size: 16px;
        color: #333;
        line-height: 16px+12px;
      }
      &:before {
        content: '“';
        position: absolute;
        top: 30px;
        left: 22px;
        font-size: 44px;
        color: #999;
      }
      &:after {
        content: '”';
        position: absolute;
        bottom: 30px;
        right: 22px;
        font-size: 44px;
        color: #999;
      }
    }
    &-list {
      margin-bottom: 80px;
    }
    &-item {
      position: relative;
      margin-top: 130px;
      height: 280px;
      background: #fff;
      box-shadow: 0 0 6px rgba(98, 98, 98, .09);
      &:nth-child(2n) {
        .subject-cover {
          left: auto;
          right: 70px;
        }
        .subject-detail {
          right: auto;
          left: 40px;
        }
      }
    }
    &-cover {
      position: absolute;
      top: -80px;
      left: 40px;
      width: 428px;
      height: 262px;
      border: 8px solid #fff;
      box-shadow: 0 2px 6px rgba(187, 187, 187, .24);
    }
    &-detail {
      position: absolute;
      top: -72px;
      right: 70px;
      width: 580px;
      height: auto;
    }
    &-title {
      font-size: 28px;
      color: #333;
      line-height: 28px+22px+22px;
    }
    &-text {
      margin-top: 50px;
      line-height: 24px;
    }
  }
</style>
