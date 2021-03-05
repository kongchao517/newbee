<template>
<div>
    <header>
      <div class="header">
          <van-row>
            <van-col span="2" style="color:#77787b">
                ＜
            </van-col>
            <van-col span="22">
              <van-search v-model="value" shape="round" style="height:50px;" @click="toSearch" placeholder="请输入搜索关键词" />
            </van-col>
        </van-row>
      </div>
    </header>
    <van-tree-select height="90vh" :items="items" :main-active-index.sync="active">
        <template #content>
            <van-image v-if="active === 0" src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
            <van-image v-if="active === 1" src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
        </template>
    </van-tree-select>
</div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            items: [{
                text: '分组 1'
            }, {
                text: '分组 2'
            }],
            value: '',
        };
    },

    components: {},

    computed: {},

    mounted() {
     

    },

    methods: {
toSearch(){
  console.log(1111)
}
    },
    created() {
    }
}
</script>

<style lang="less" scoped>
header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #777777;
}
.header{
  width: 95%;
  font-size: 24px;
    margin: 0 auto;
line-height: 50px;
}

</style>
<style >

</style>
