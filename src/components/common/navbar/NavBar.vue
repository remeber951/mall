<template>
    <div class='nav-bar'>
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>

export default {
  name: 'NavBar',
  components: {
      
  }
}
</script>

<style>
.nav-bar{
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    height: 44px;
    font-size: 14px;
    line-height: 44px;
    background-color: pink;
}
.left, .right{
    width: 60px;
    background: #ff0000;
}
.center{
    flex: 1;
    background: #00ffff;
}
</style>