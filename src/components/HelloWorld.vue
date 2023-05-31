<script setup lang="ts">
    /***
     *  script setup 语法糖提供了三个新的API: defineEmits、defineProps、useContext
     *  defineProps是用来接收父组件传来的值
     *  defineEmits是用来申明出发事件表
     *  useContext 是用来获取组件上下文
     *  reactive返回对象的响应式副本
     */
    import { ref, onMounted } from 'vue';
    import * as echarts from 'echarts';
    defineProps<{ msg: string }>();
    const count = ref(0);

    const emit = defineEmits(['changeValue']);
    const onChangeValue = () => {
        emit('changeValue', 'changeValue');
    };
    onMounted(() => {
        type EChartsOption = echarts.EChartsOption;

        const id = document.getElementById('demo') as HTMLElement;
        const myChart = echarts.init(id);
        var option: EChartsOption;

        option = {
            color: ['#80FFA5', '#00DDFF'],
            legend: {
                data: ['p1.p2', 'p3.p4'],
            },
            title: [
                {
                    text: '0.1',
                    bottom: -6,
                    left: 70,
                    padding: 5,
                    backgroundColor: '#b2b2b2',
                    textStyle: {
                        lineHeight: 20,
                    },
                },
                {
                    text: '0.5',
                    bottom: -6,
                    right: 70,
                    padding: 5,
                    backgroundColor: '#b2b2b2',
                    textStyle: {
                        lineHeight: 20,
                    },
                },
            ],
            tooltip: {
                trigger: 'none',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '6%',
                containLabel: false,
            },

            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        show: false,
                    },

                    axisPointer: {
                        show: true,
                        value: 'Thu',
                        type: 'line',
                        snap: true,
                        lineStyle: {
                            type: 'solid',
                            width: 2,
                        },
                        label: {
                            show: false,
                        },
                        handle: {
                            show: true,
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    position: 'left',
                    offset: -60,
                    axisLabel: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                    },
                    splitLine: {
                        show: false,
                    },
                },
                {
                    type: 'value',
                    position: 'right',
                    offset: -60,
                    axisLabel: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                    },
                    splitLine: {
                        show: false,
                    },
                },
            ],
            series: [
                {
                    name: 'p1.p2',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        width: 0,
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)',
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)',
                            },
                        ]),
                    },
                    data: [0, 0, 244, 655, 90, 0, 0],
                },
                {
                    name: 'p3.p4',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        width: 0,
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(0, 221, 255)',
                            },
                            {
                                offset: 1,
                                color: 'rgb(77, 119, 255)',
                            },
                        ]),
                    },

                    data: [0, 0, 111, 403, 220, 0, 0],
                },
            ],
        };

        option && myChart.setOption(option);
    });
</script>

<template>
    <h1>{{ msg }}</h1>
    <div class="card">
        <button type="button" @click="onChangeValue">
            count is {{ count }}
        </button>
    </div>
    <div id="demo" style="height: 450px; width: 850px"></div>
</template>

<style scoped>
    .read-the-docs {
        color: #888;
    }
</style>
