<template>
  <div class="pc">
    <h1>This is a PC page</h1>
    <div class="pc_box">
      <img src="../assets/pic1.jpg" alt="">
      <img src="../assets/pic1.jpg" alt="">
      <img src="../assets/pic1.jpg" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.pc {
  color: #888888;
  h1 {
    font-size: 18px;
  }
  .pc_box{
    width: 1100px;
    height: auto;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background: #eeeeee;
    img{
      width: 350px;
    }
  }
}
</style>
