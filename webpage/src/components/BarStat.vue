<template>
    <div id="myChart" :style="{width: '1500px', height: '1500px'}"></div>
</template>

<script>
    import Vue from "vue"
    export default {

        name: "BarStat",
        mounted()
        {
            this.echartsInit()
        },


        methods:{

            createCityDataAxis(caseList)
            {

                let ret = []
                for(let i = 0;i<caseList.length;i++)
                {
                    ret.push(caseList[i].city)
                }
                return ret
            },
            createDataAxis(caseList)
            {
                let ret = []
                for(let i = 0;i<caseList.length;i++)
                {
                    ret.push(caseList[i].area)
                }
                return ret
            },
            createData(caseList)
            {
                let ret = []
                for(let i = 0;i<caseList.length;i++)
                {
                    ret.push(parseInt(caseList[i].curConfirm))
                }
                return ret
            },
            createCityData(caseList)
            {
                let ret = []
                for(let i = 0;i<caseList.length;i++)
                {
                    ret.push(parseInt(caseList[i].confirmed))
                }
                return ret
            },
            getyMax(data)
            {
                let max = 0;
                for(let i =0;i<data.length;i++)
                {
                    if(data[i] > max)
                    {
                        max = data[i]
                    }
                }
                max +=10
                return max
            },
            echartsInit()
            {



                // 基于准备好的dom，初始化echarts实例
                let myChart = Vue.prototype.echarts.init(document.getElementById('myChart'))
                if(this.$route.params.location == "国内" && !this.$route.params.area)
                {       //国内总体
                    console.log(this.$route.params.location)
                    let dataAxis =  this.createDataAxis(Vue.prototype.todayData.caseList)
                    let data =this.createData(Vue.prototype.todayData.caseList)

                    let ymax = this.getyMax(data)
                    console.log(data)
                    console.log(ymax)
                    let dataShadow=[]
                    for(let i =0;i<data.length;i++)
                    {
                        dataShadow.push(ymax)
                    }
                    let option = {
                        title: {
                            text: '国内现存确诊',
                            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
                        },
                        xAxis: {
                            data: dataAxis,
                            axisLabel: {
                                inside: true,
                                textStyle: {
                                    color: 'black'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            z: 10
                        },
                        yAxis: {
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        dataZoom: [
                            {
                                type: 'inside'
                            }
                        ],
                        series: [
                            { // For shadow
                                type: 'bar',
                                itemStyle: {
                                    color: 'rgba(0,0,0,0.05)'
                                },
                                barGap: '-100%',
                                barCategoryGap: '40%',
                                data: dataShadow,
                                animation: false
                            },
                            {
                                type: 'bar',
                                itemStyle: {
                                    color: new Vue.prototype.echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    itemStyle: {
                                        color: new Vue.prototype.echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#2378f7'},
                                                {offset: 0.7, color: '#2378f7'},
                                                {offset: 1, color: '#83bff6'}
                                            ]
                                        )
                                    }
                                },
                                data: data
                            }
                        ]
                    };
                    // 绘制图表
                    myChart.setOption(option);
                }
                else if(this.$route.params.location == "国内" && this.$route.params.area)
                {
                    console.log(this.$route.params.area)
                    console.log(Vue.prototype.todayData)
                    let index = this.$route.params.areaindex
                    let dataAxis =  this.createCityDataAxis(Vue.prototype.todayData.caseList[index].subList)
                    let data =this.createData(Vue.prototype.todayData.caseList[index].subList)
                    console.log(data)
                    let ymax = this.getyMax(data)
                    console.log(ymax)
                    let dataShadow=[]
                    for(let i =0;i<data.length;i++)
                    {
                        dataShadow.push(ymax)
                    }
                    let option = {
                        title: {
                            text: this.$route.params.area+'现存确诊',
                            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
                        },
                        xAxis: {
                            data: dataAxis,
                            axisLabel: {
                                inside: true,
                                textStyle: {
                                    color: 'black'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            z: 10
                        },
                        yAxis: {
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        dataZoom: [
                            {
                                type: 'inside'
                            }
                        ],
                        series: [
                            { // For shadow
                                type: 'bar',
                                itemStyle: {
                                    color: 'rgba(0,0,0,0.05)'
                                },
                                barGap: '-100%',
                                barCategoryGap: '40%',
                                data: dataShadow,
                                animation: false
                            },
                            {
                                type: 'bar',
                                itemStyle: {
                                    color: new Vue.prototype.echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    itemStyle: {
                                        color: new Vue.prototype.echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#2378f7'},
                                                {offset: 0.7, color: '#2378f7'},
                                                {offset: 1, color: '#83bff6'}
                                            ]
                                        )
                                    }
                                },
                                data: data
                            }
                        ]
                    };
                    // 绘制图表
                    myChart.setOption(option);
                }
                else if(this.$route.params.location == "国外" && !this.$route.params.area)
                {
                    console.log(this.$route.params.location)
                    let dataAxis =  this.createDataAxis(Vue.prototype.todayData.caseOutsideList)
                    let data =this.createData(Vue.prototype.todayData.caseOutsideList)

                    let ymax = this.getyMax(data)
                    console.log(data)
                    console.log(ymax)
                    let dataShadow=[]
                    for(let i =0;i<data.length;i++)
                    {
                        dataShadow.push(ymax)
                    }
                    let option = {
                        title: {
                            text: '国外现存确诊',
                            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
                        },
                        xAxis: {
                            data: dataAxis,
                            axisLabel: {
                                inside: true,
                                textStyle: {
                                    color: 'black'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            z: 10
                        },
                        yAxis: {
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        dataZoom: [
                            {
                                type: 'inside'
                            }
                        ],
                        series: [
                            { // For shadow
                                type: 'bar',
                                itemStyle: {
                                    color: 'rgba(0,0,0,0.05)'
                                },
                                barGap: '-100%',
                                barCategoryGap: '40%',
                                data: dataShadow,
                                animation: false
                            },
                            {
                                type: 'bar',
                                itemStyle: {
                                    color: new Vue.prototype.echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    itemStyle: {
                                        color: new Vue.prototype.echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#2378f7'},
                                                {offset: 0.7, color: '#2378f7'},
                                                {offset: 1, color: '#83bff6'}
                                            ]
                                        )
                                    }
                                },
                                data: data
                            }
                        ]
                    };
                    // 绘制图表
                    myChart.setOption(option);
                }
                else if(this.$route.params.location == "国外" && this.$route.params.area)
                {
                    console.log(this.$route.params.area)
                    console.log(Vue.prototype.todayData)
                    let index = this.$route.params.areaindex
                    let dataAxis =  this.createCityDataAxis(Vue.prototype.todayData.caseOutsideList[index].subList)
                    let data =this.createCityData(Vue.prototype.todayData.caseOutsideList[index].subList)

                    console.log(data)
                    let ymax = this.getyMax(data)
                    console.log(ymax)
                    let dataShadow=[]
                    for(let i =0;i<data.length;i++)
                    {
                        dataShadow.push(ymax)
                    }
                    let option = {
                        title: {
                            text: this.$route.params.area+'现存确诊',
                            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
                        },
                        xAxis: {
                            data: dataAxis,
                            axisLabel: {
                                inside: true,
                                textStyle: {
                                    color: 'black'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            z: 10
                        },
                        yAxis: {
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        dataZoom: [
                            {
                                type: 'inside'
                            }
                        ],
                        series: [
                            { // For shadow
                                type: 'bar',
                                itemStyle: {
                                    color: 'rgba(0,0,0,0.05)'
                                },
                                barGap: '-100%',
                                barCategoryGap: '40%',
                                data: dataShadow,
                                animation: false
                            },
                            {
                                type: 'bar',
                                itemStyle: {
                                    color: new Vue.prototype.echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    itemStyle: {
                                        color: new Vue.prototype.echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: '#2378f7'},
                                                {offset: 0.7, color: '#2378f7'},
                                                {offset: 1, color: '#83bff6'}
                                            ]
                                        )
                                    }
                                },
                                data: data
                            }
                        ]
                    };
                    // 绘制图表
                    myChart.setOption(option);
                }
            }
        }

    }
</script>

<style scoped>

</style>