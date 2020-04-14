<template>
    <div>
        <el-container>

            <el-menu router
                    default-active="2"
                    class="el-menu-vertical-demo"
                     @open="open"
                     @close="close"
                    >

                <el-submenu index="国内">

                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>国内</span>
                    </template>

                    <el-menu-item v-for="(item,itemindex) in todayData.caseList" :index="'/Home/国内/'+item.area+'/'+itemindex" :key="item.area">{{item.area}}</el-menu-item>


                </el-submenu>


                <el-submenu index="国外">

                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>国外</span>
                    </template>

                    <el-menu-item v-for="(item,itemindex) in todayData.caseOutsideList" :index="'/Home/国外/'+item.area+'/'+itemindex" :key="item.area">{{item.area}}</el-menu-item>


                </el-submenu>



            </el-menu>


            <router-view :key="$route.path"></router-view>
        </el-container>
    </div>
</template>

<script>
    import Vue from "vue"
    export default {
        name: "Home",
        data:function()
        {
            return {
                todayData:null,

            }
        },
        async created()
        {
            if(Vue.prototype.todayData)
            {
                return
            }

            let res = await Vue.prototype.server.get("mongo/getTodayData")
            console.log(res.data)
            Vue.prototype.todayData = res.data
            this.todayData = res.data
        },
        methods:{

            open(index)
            {
                this.$router.push("/Home/"+index)

            },
            close(index)
            {
                this.$router.push("/Home/"+index)
            }
        }
    }
</script>

<style scoped>

</style>