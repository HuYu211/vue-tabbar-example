<template>
  <div id="app">
    <router-view/>
    <tabBar>
      <tar-bar-item path="/home1" active-color="blue">
        <img slot="item-icon" src="./assets/img/1.svg" alt="1">
        <img slot="item-icon-active" src="./assets/img/3.svg" alt="1">
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/home2">
        <img slot="item-icon" src="./assets/img/1.svg" alt="1">
        <img slot="item-icon-active" src="./assets/img/3.svg" alt="1">
        <div slot="item-text">首页2</div>
      </tar-bar-item>
      <tar-bar-item path="/home3">
        <img slot="item-icon" src="./assets/img/1.svg" alt="1">
        <img slot="item-icon-active" src="./assets/img/3.svg" alt="1">
        <div slot="item-text">首页3</div>
      </tar-bar-item>
      <tar-bar-item path="/home4">
        <img slot="item-icon" src="./assets/img/1.svg" alt="1">
        <img slot="item-icon-active" src="./assets/img/3.svg" alt="1">
        <div slot="item-text">首页4</div>
      </tar-bar-item>
    </tabBar>

  </div>
</template>
<script>
  import TabBar from "./views/TabBar";
  import TarBarItem from "./views/TarBarItem";
  export default {
    name: 'App',
    components: {
      TabBar,
      TarBarItem
    }
  }
</script>
<style>
  @import "./assets/css/base.css";

</style>
