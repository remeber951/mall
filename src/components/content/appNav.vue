<template>
    <div class='appNav'>
        <!-- <router-link 
            to="路径:属性名称"
            class="添加css" 
            "replace,表示直接跳转页面，但是不会有往history中push内容" 
            tag="将原来的<a>标签替换成别的标签"
            active-class="将被激活的路由样式替换为指定名称，也可以通过router中设置linkActiveClass将默认样式名称替换成别的"   
        >分类页</router-link> -->
        <router-link to="/home" class="item" active-class="active">柱状图实现</router-link>
        <router-link to="/category" class="item" active-class="active">详情页</router-link>
        <router-link to="/detail" class="item" active-class="active">购物车</router-link>
        <router-link to="/cart" class="item" active-class="active">分类页</router-link>
        

        <!-- 直接将跳转事件绑定到元素上来实现页面跳转 -->
        <button @click="homeClick">首页</button>
        <button @click="cartClick">购物车</button>
    </div>
</template>

<script>

export default {
  name: 'appNav',
  methods:{
    homeClick(){
      //this.$router.replace('/home');    //直接跳转无返回
      this.$router.push('/home');   //普通跳转
    },cartClick(){
      this.$router.push('/cart');
    }
  },
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
        width: 800px;
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