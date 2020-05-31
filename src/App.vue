<template>
  <div id="app">
   <!-- 默认按钮 -->
    <dj-button>默认按钮</dj-button>
    <br>
    <!-- 带类型的按钮 -->
    <dj-button type="primary">主要按钮</dj-button>
    <dj-button type="warning">警告按钮</dj-button>
    <dj-button type="danger">危险按钮</dj-button>
    <dj-button type="success">成功按钮</dj-button>
    <dj-button type="info">信息按钮</dj-button>
    <br>
    <!-- 带icon的按钮 -->
    <dj-button type="info" icon="sousuo">信息按钮</dj-button>
    <dj-button type="primary" icon="sousuo"></dj-button>
    <dj-button type="success" icon="sousuo" icon-position="right">内容</dj-button>
    <br>
    <!-- loading按钮 -->
    <dj-button type="success" loading>加载中</dj-button>
    <br>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style lang="scss">
</style>
