<template>
<div>
    <div class="head">
        <div class="head-left">
          <span class="photo"><img src="../assets/logo.png" alt="" style="width:60px"></span>
          <span class="name">
            <p>张三三</p>
            <span class="time">2019毕业/23岁</span>
          </span>
        </div>
        <div class="head-right">
          <div class="right-top">
            <span class="fen">54分</span>
            <span class="fu">></span>
          </div>
          <span>在线简历</span>
        </div>
    </div>
    <div class="centent">
      <div class="jian">
        <img src="../assets/deng.png" alt="" style="width:35px">
          <p> 附件简历</p>
      </div>
      <div class="tou" >
        <img src="../assets/deng.png" alt="" style="width:35px">
          <p> 我的投递</p>
      </div>
      <div class="zhi" >
        <img src="../assets/deng.png" alt="" style="width:35px">
          <p> 订阅职位</p>
      </div>
      <div class="shou">
        <img src="../assets/deng.png" alt="" style="width:35px">
          <p> 职位收藏</p>
      </div>
    </div>
    <div class="foot">
     <van-cell icon="../assets/deng.png" is-link title="求职意向"  />
     <van-cell is-link title="隐私设置"  />
     <van-cell is-link title="我的钱包"  />
     <van-cell is-link title="切换身份"  />
     <van-cell is-link title="设置"  />
     <van-cell is-link title="反馈与帮助"  />
     <van-cell is-link title="基础用法"  />
     <van-cell is-link title="基础用法"  />
     <van-cell is-link title="基础用法"  />
     <van-cell is-link title="基础用法"  />
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {

      active: 0
    }
  },
  created () { },
  methods: {

  }
}
</script>
<style lang='scss'>
body {
  background-color: #f8f9fa;
}
.head {
  width: 100%;
  height: 200px;
  background-color: #0fc488;
  position: relative;
  .head-left {
    display: flex;
    flex-wrap: nowrap;
    padding-top: 60px;
    padding-left: 10px;
    width: 200px;
    .photo {
      border: 1px solid #fff;
      border-radius: 50%;
      background: #ebf6ff;
    }
    .name {
      padding-left: 10px;
      color: #ffffff;
      p {
        margin-top: 0px;
        margin-bottom: 5px;
        font-size: 22px;
        text-align: center;
        font-weight: 600;
      }
      .time {
        font-size: 12px;
        text-align: center;
        font-family: SimSun;
      }
    }
  }
  .head-right {
    position: absolute;
    width: 50px;
    height: 40px;
    right: 0px;
    top: 70px;
    color: #977924;
    background: #f2dd61;
    font-size: 11px;
    font-family: SimSun;
    padding-left: 20px;
    border-radius: 20px 0 0 20px;
    .right-top {
      padding-top: 5px;
      padding-bottom: 5px;
      .fen {
        margin-right: 15px;
      }
      .fu {
        font-weight: 600;
      }
    }
  }
}
.centent {
  height: 70px;
  width: 330px;
  /* border: 1px solid red; */
  border-radius: 12px;
  display: flex;
  color: #6e6e6e;
  background-color: #fff;
  font-size: 12px;
  position: absolute;
  top: 160px;
  left: 25px;
  display: flex;
  justify-content: space-around;
  .centent > div {
    height: 60px;
  }
  div {
    margin-top: 5px;
    img {
      margin-left: 5px;
    }
    p {
      margin: 5px auto;
    }
  }
}
.foot {
  left: 25px;
  position: absolute;
  width: 330px;
  top: 250px;
  .van-cell {
    height: 60px;
  }
}
</style>
