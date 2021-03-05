<template>
<div>

    <div class="searchBar" id="searchBar">
        <ul :class="searchBarFixed == true ? 'isFixed' :''">
            <li>区域<i class="iconfont icon-jiantouxia"></i></li>
            <li>价格<i class="iconfont icon-jiantouxia"></i></li>
            <li>房型<i class="iconfont icon-jiantouxia"></i></li>
            <li>更多<i class="iconfont icon-jiantouxia"></i></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            searchBarFixed:false
        };
    },

    components: {},

    computed: {},
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let offsetTop = document.querySelector('#searchBar').offsetTop
            scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
        },
    },
    created() {}
}
</script>

<style lang="less" scoped>
div{
  height: 2000px;
}
.searchBar {
    .isFixed {
        position: fixed;
        background-color: red;
        top: 0;
        z-index: 999;
    }

    ul {
        WIDTH: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;

        li {
            font-size: 0.8rem;
            text-align: center;
            flex: 1;

            i {
                font-size: 0.9rem;
                padding-left: 5px;
                color: #ccc;
            }
        }

        border-bottom: 1px solid #ddd;
    }
}
</style>
