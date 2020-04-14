<template>
    <div>
        <el-select v-model="value" placeholder="请选择" @change="change">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                options: [{
                    value: '现存确诊',
                    label: '现存确诊'
                }, ],
                value: ''
            }
        },
        methods:{
            change(selected)
            {
                if(selected == "现存确诊")
                {
                    this.$router.push("/Home")
                }
            }
        }
    }
</script>

<style scoped>

</style>