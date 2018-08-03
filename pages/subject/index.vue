<template>
  <div class="subject-wrap">
    <swiper :options="swiperOption" class="banner-swiper" ref="mySwiper">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <section class="subject-box">
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
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533140893550&di=79b61189cfc10d7c893f23b6641be241&imgtype=0&src=http%3A%2F%2Fwww.waterwood.cn%2Fuploads%2Fallimg%2F150213%2F1-1502131942143A.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533140893550&di=aec7fa50d926db0b488946bf4c311301&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F01%2F88%2F75%2F7ca50c9c73244bf9f5b2de8f3597fdae.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533140893550&di=85eea6149d8a7af149b51ae6d6d15eed&imgtype=0&src=http%3A%2F%2Fwww.china-gyt.com%2FUploadFiles%2Fimages%2Fbiking.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533140893550&di=6bce87fed342ffdfb61882f3ef6e5507&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fcms%2Fg15%2FM02%2F15%2F06%2FrBEhWFNHZcwIAAAAAADNI3n5PmMAALmPwHwTQoAAM07040.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533140937636&di=756d2543f031f0c03099e70a87d36d47&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2883147814%2C3241029447%26fm%3D214%26gp%3D0.jpg'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .subject {
    &-box {
      margin: 20px auto 50px;
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
  }
</style>
