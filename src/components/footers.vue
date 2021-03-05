<template>
<div>
    <van-tabbar route inactive-color="#666666" active-color="#1baeae">
        <van-tabbar-item replace to="/" class="iconfont icon-shouye_huaban1" >首页</van-tabbar-item>
        <van-tabbar-item replace to="/classfy" class="iconfont icon-leimupinleifenleileibie">分类</van-tabbar-item>
         <van-tabbar-item replace to="/cart" class="iconfont icon-gouwuche">购物车</van-tabbar-item>
          <van-tabbar-item replace to="/mine" class="iconfont icon-wodedangxuan">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {
  
    data() {
        return {};
    },

    components: {
    },

    computed: {},

    mounted() {},

    methods: {},
    created() {}
}
</script>

<style lang='less' scoped>
.iconfont{
}
</style>
