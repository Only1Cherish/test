<template>
  <div>
    <div class="box-3">
        <div class="box-left">sider</div>
        <div class="box-right">
            <div class="box-right-top">header</div>
            <div class="box-right-middle">content</div>
            <div class="box-right-bottom">footer</div>
        </div>
</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//1.局部调用组件
import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    //2.注册组件
    Users
  }
}
</script>

<style>
.box-3{
    display: flex;
    flex-direction: row;
    height: 1000px;
    font-size:x-large;
    text-align: center;
}
.box-left{
    flex-grow: 3;
    background-color:lightskyblue;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-right{
    display: flex;
    flex-direction: column;
    flex-grow:7 ;
    display: flex;
}
.box-right-top{
    position: sticky;
    top:0;
    background-color:cornflowerblue;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-right-middle{
    background-color:dodgerblue;
    flex-grow:3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-right-bottom{
    background-color:cornflowerblue;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
