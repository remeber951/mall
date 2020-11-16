<template>
    <div class='appNav'>
        <!-- <router-link 
            to="路径:属性名称"
            class="添加css" 
            "replace,表示直接跳转页面，但是不会有往history中push内容" 
            tag="将原来的<a>标签替换成别的标签"
            active-class="将被激活的路由样式替换为指定名称，也可以通过router中设置linkActiveClass将默认样式名称替换成别的"   
        >分类页</router-link> -->
        <router-link to="/home" class="item" active-class="active">首页</router-link>
        <router-link to="/category" class="item" active-class="active">分类</router-link>
        <router-link to="/cart" class="item" active-class="active">购物车</router-link>
        <router-link to="/user" class="item" active-class="active">用户</router-link>
    </div>
</template>

<script>

export default {
  name: 'appNav',
  components: {
      
  }
}
</script>

<style>
    .appNav{
        position: fixed;
        bottom: 0;
        display: -webkit-flex;
        display: flex;
        width: 100%;
        height: 49px;
        font-size: 16px;
        line-height: 49px;
        background: #fff;
    }
    .appNav .item{
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
    }
    .item.active{
        color:#ff0000;
    }
</style>