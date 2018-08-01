<template>
  <div>
    <swiper :options="swiperOption" class="banner-swiper" ref="mySwiper">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <section class="subject-box">
      <h2 class="title"><span class="point-ico point-left"></span>学科分类<span class="point-ico point-right"></span></h2>
      <div class="subject-list">
        <div class="subject-item"></div>
        <div class="subject-item"></div>
        <div class="subject-item"></div>
        <div class="subject-item"></div>
        <div class="subject-item"></div>
        <div class="subject-item"></div>
        <div class="subject-item"></div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
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
            console.log('init');
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
  .banner-swiper {
    height: 380px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  section {
    margin: 0 auto;
    padding-top: 60px;
    width: 1180px;
  }
  .title {
    position: relative;
    margin-bottom: 50px;
    font-size: 28px;
    color: #333;
    line-height: 28px;
    text-align: center;
  }
  .point {
    &-ico {
      position: absolute;
      top: 13px;
      width: 78px;
      height: 2px;
      background: #666;
      &:after {
        content: ' ';
        position: absolute;
        top: -6px;
        width: 13px;
        height: 13px;
        background: #666;
        transform: rotate(45deg)
      }
    }
    &-left {
      left: 424px;
      &:after {
        right: 2px;
      }
    }
    &-right {
      right: 424px;
      &:after {
        right: 63px;
      }
    }
  }
  .subject {
    &-list {
      display: flex;
      flex-wrap: wrap;
    }
    &-item {
      margin-bottom: 26px;
      width: 280px;
      height: 160px;
      background: #f00;
      border-radius: 6px;
    }
  }
</style>
