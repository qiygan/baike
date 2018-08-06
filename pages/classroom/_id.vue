<template>
  <div class="classroom-wrap detail">
    <!-- {{$route.params.id}} -->
    <div class="course-box">
      <section class="course-cont">
        <h2 class="classroom-course-title">写作高分技巧提高课程讲解</h2>
        <div class="classroom-course-info">
          <div class="classroom-course-time"><span>雅思</span>2013-05-01</div>
          <div class="classroom-course-num">
            <span class="view-ico-box"><i class="view-ico"></i>100</span>
            <span class="good-ico-box"><i class="good-ico"></i>300</span>
          </div>
        </div>
        <div class="course-detail">
          <div class="course-video">
            <i class="play-ico big-ico" @click="playVideo"></i>
            <video preload="auto" loop src="http://www.lkker.com/sources/LKKVIDWO.mp4" ref="videoRef">
              <source src="http://219.239.26.10/mp4files/222400000AF8B315/www.lkk-edu.com/media/LKKVIDWO.mp4" type="video/mp4" webkit-playsinline="true">
            </video>
            <div class="course-act">
              <button type="button" class="collect-btn">收藏</button>
              <!-- <button type="button" class="collect-btn has-collect">已收藏</button> -->
              <button type="button" class="like-btn">点赞<span>3246</span></button>
              <!-- <button type="button" class="like-btn has-like">点赞<span>3246</span></button> -->
            </div>
          </div>
          <div class="course-intro">
            <div class="teacher-item">
              <div class="teacher-base">
                <img class="teacher-avatar" src="http://www.qqzhi.com/uploadpic/2014-12-10/172422803.jpg">
                <p class="teacher-name">熊明</p>
                <p class="teacher-major">熊明熊明熊明熊明</p>
                <div class="teacher-output">
                  <div>课程<span class="num">223</span></div>
                  <div>关注<span class="num">334</span></div>
                </div>
                <button type="button" class="attention-btn">关注</button>
                <!-- <button type="button" class="attention-btn active">已关注</button> -->
              </div>
              <div class="teacher-info">
                <p class="cont" txt="本课程简介 : ">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="classroom-detail-cont">
      <div class="classroom-comment">
        <div class="classroom-comment-act">
          <textarea placeholder="在这里可以写下你的想法" maxlength="1000"></textarea>
          <div class="num-limit">1000字以内</div>
          <div class="publish-box">
            <button type="button" class="publish-btn">发表</button>
          </div>
        </div>
      </div>
      <div class="classroom-recommend"></div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ClassroomDetail',
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  methods: {
    playVideo () {
      let { videoRef } = this.$refs
      if (videoRef.paused) {
        videoRef.play()
      } else {
        videoRef.pause()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .classroom-wrap.detail {
    .course-box {
      margin: 20px 0;
      width: 100%;
      height: 704px;
      background: #fff;
      border-radius: 6px;
    }
    .course-cont {
      padding: 22px 0 70px;
    }
    .classroom-course-title {
      font-size: 22px;
      color: #333;
      line-height: 22px+28px;
    }
    .classroom-course-info {
      display: flex;
      align-items: center;
      margin-bottom: 26px;
      height: 16px;
      font-size: 12px;
      color: #999;
    }
    .classroom-course-time span{
      display: inline-block;
      margin-right: 10px;
      padding: 0 1px;
      line-height: 14px;
      color: #1cad67;
      border: 1px solid #1cad67;
    }
    .classroom-course-num {
      margin-left: 30px;
    }
    .view-ico-box {
      margin-right: 12px;
    }
    .course-detail {
      display: flex;
    }
    .course-video {
      position: relative;
      width: 820px;
      height: 520px;
      font-size: 0;
      video {
        width: 820px;
        height: 460px;
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
    .course-act {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 60px;
      background: #393939;
      button {
        width: 110px;
        height: 32px;
        line-height: 30px;
        cursor: pointer;
        border: 1px solid #3583ff;
        color: #3583ff;
        text-align: center;
      }
      .collect-btn {
        margin-right: 30px;
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
        margin-right: 50px;
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
    .course-intro {
      width: 360px;
      height: 520px;
      background: #f3f3f3;
    }
    .teacher {
      &-item {
        padding-top: 36px;
        width: 360px;
        height: 520px;
      }
      &-base {
        text-align: center;
        border-bottom: 1px solid #f2f2f2;
        .attention-btn {
          width: 104px;
          height: 30px;
          line-height: 30px;
          background: #3583ff;
          color: #fff;
          border-radius: 2px;
          cursor: pointer;
          &:hover {
            background: #1f75fe;
          }
          &.active {
            color: #666;
            background: #f2f2f2;
            &:hover {
              background: #e7e6e6;
            }
          }
        }
      }
      &-avatar {
        display: block;
        margin: 0 auto;
        width: 94px;
        height: 94px;
        border-radius: 50%;
        border: 4px solid #d7e6ff;
      }
      &-name {
        margin-top: 4px;
        font-size: 18px;
        line-height: 18px+10px+10px;
        color: #333;
      }
      &-major {
        font-size: 12px;
        line-height: 1;
      }
      &-output {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px-14px;
        padding: 0 40px;
        font-size: 16px;
        line-height: 16px+14px+14px;
        .num {
          margin-left: 12px;
        }
      }
      &-info {
        margin-top: 20px;
        margin-right: 22px;
        padding: 0 32px;
        line-height: 26px;
        max-height: 26px*8;
        overflow-y: auto;
        .cont {
          position: relative;
          width: 296px;
          text-indent: 82px;
          &:before {
            content: attr(txt);
            position: absolute;
            top: 0;
            left: 0;
            display: inline-block;
            color: #999;
            line-height: 26px;
            text-indent: 0;
          }
        }
        // 滚动条 http://visugar.com/FrontEnd-examples/12%E8%87%AA%E5%AE%9A%E4%B9%89%E6%BB%9A%E5%8A%A8%E6%9D%A1%E6%A0%B7%E5%BC%8F/index.html
        &::-webkit-scrollbar {
          // 滚动条整体样式
          width: 2px;
        }
        &::-webkit-scrollbar-thumb {
          // 滚动条里面小方块
          background: #ccc;
        }
        &::-webkit-scrollbar-track {
          // 滚动条里面轨道
          background: #dedede;
        }
      }
    }
  }
  .classroom-detail-cont {
    display: flex;
    justify-content: space-between;
    .classroom-comment {
      padding: 40px 30px 0;
      width: 800px;
      background: #fff;
    }
    .classroom-recommend {
      width: 360px;
      background: #fff;
    }
    .classroom-comment-act {
      position: relative;
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
      text-align: center;
      border-radius: 2px;
      cursor: pointer;
      &:hover {
        background: #1f75fe;
      }
    }
  }
</style>
