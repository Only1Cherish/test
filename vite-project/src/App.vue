<script>
import HelloWorld from './components/HelloWorld.vue'
import Main1 from './components/main1.vue'
import hello from'./components/Hello.vue'
export default{
  components:{
    HelloWorld,
    Main1,
    hello
  }
}
</script>

<template>
  <hello msg="press to continue"></hello>
  <div>
  <router-link to="/">首页</router-link>|
  <router-link to="/about">关于我们</router-link>
  </div>
  <router-view></router-view>
</template>

<style >

</style>
