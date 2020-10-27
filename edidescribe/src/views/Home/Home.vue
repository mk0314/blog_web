<template>
 <div>
    <HeadRotation/>
<!--   <div class="test-page" id="test-page" :class="{'p-fixed':searchBarFixed}">-->
<!--         <div style="display: flex;flex-wrap: wrap;width: 80%;margin: auto">-->
<!--           <p class="navcss" @click="Findcontent(1)">EDI</p>-->
<!--           <p class="navcss" @click="Findcontent(2)">格兰仕EDI</p>-->
<!--           <p class="navcss" @click="Findcontent(3)">系统介绍</p>-->
<!--           <p class="navcss" @click="Findcontent(4)">好处</p>-->
<!--           <p class="navcss" @click="Findcontent(5)">成果展示</p>-->
<!--           <p class="navcss" @click="Findcontent(6)">公告</p>-->
<!--           <p class="navcss" style="width: 10%;" @click="Findcontent(7)">支持</p>-->
<!--         </div>-->
<!--   </div>-->
   <div style="height: 900px;background: #EDF3FF">
     <p style="font-weight: bolder;font-size: 40px;text-align: center;padding-top: 80px;">立即与格兰仕EDI建立连接</p>
      <div style="display: flex;flex-wrap: wrap;width: 80%;margin:200px auto;">
        <div style="width: 20%;height: 400px;background: #ffffff;margin: auto;text-align: center;">
           <a-icon type="home"  style="margin:80px auto auto 0px;font-size: 200px;color: #0076FF;"/>
           <p style="padding-top: 10px;font-size: 20px;">贸易伙伴</p>
        </div>
        <div style="width: 20%;height: 400px;background: #ffffff;margin: auto;text-align: center;">
          <a-icon type="gold"  style="margin:80px auto auto 0px;font-size: 200px;color: #0076FF;"/>
          <p style="padding-top: 10px;font-size: 20px;">仓库</p>
        </div>
        <div style="width: 20%;height: 400px;background: #ffffff;margin: auto;text-align: center;">
          <a-icon type="global"  style="margin:80px auto auto 0px;font-size: 200px;color: #0076FF;"/>
          <p style="padding-top: 10px;font-size: 20px;">海外分公司</p>
        </div>
        <div style="width: 20%;height: 400px;background: #ffffff;margin: auto;text-align: center;" @click="login">
          <a-icon type="property-safety"  style="margin:80px auto auto 0px;font-size: 200px;color: #0076FF;"/>
          <p style="padding-top: 10px;font-size: 20px;" >格兰仕中国</p>
        </div>
      </div>
   </div>
   <div style="height: 900px;background: #D8D8D8;">
     <div style="height:100%;width:100%" ref="myEchart"></div>
   </div>
   <div style="height: 900px;background: #B1D1EF">
     <p style="font-weight: bolder;font-size: 40px;text-align: center;padding-top: 80px;">公告</p>

   </div>
   <div style="height: 800px;background: #FBFCFF;">
     <p style="font-weight: bolder;font-size: 40px;float: right;padding-top: 30px;width: 10%;text-align: center;">MORE>></p>
     <img src="../../assets/EDIpaternal.png" alt="" style="width: 80%;height: 80%;margin:10px 10%;">
   </div>
   <div style="height: 900px;background: #F1F3F4">
     <img src="../../assets/EDIfooter.png" alt="" style="width: 100%;height: 100%;" >
   </div>
 </div>
</template>


<script>
  import echarts from 'echarts';
  import HeadRotation from "../../components/HeadRotation";
    export default {
        name: "Home",
        components:{
          HeadRotation
        },
        props: ["renderData"],
        data(){
            return{
                chart: null,
                status: 1,
                scrollTop: 0,
                searchBarFixed: false,
                offsetTop: 0,
            }
        },
        mounted() {
            console.log(this.$route.path);
            // window.addEventListener('scroll', this.handleScroll);
            this.initEchartMap();
        },
        beforeDestroy() {
            if (!this.chart) {
                return;
            }
            this.chart.dispose();
            this.chart = null;
        },
        methods:{
            handleScroll() {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (this.offsetTop === 0) {
                    this.offsetTop = document.querySelector('#test-page').offsetTop;
                }
                this.scrollTop >= this.offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false;
            },
            login(){
                window.location.href = 'https://edi.galanz.com';
            },
            initEchartMap() {
                //console.log(this.renderData)
                //这里我们用固定的数据，真正使用时，用父组件传递来的数据替换series即可
                let myChart = echarts.init(this.$refs.myEchart);
                window.onresize = myChart.resize;
                myChart.setOption({
                    backgroundColor: "#C1C1C1",
                    title: {
                        text: '格兰仕国际EDI业务支持系统',
                        left: 'center',
                        top: '20px',
                        textStyle: {
                            color: '#fff',
                            opacity: 0.7,
                            "fontSize": 30
                        }
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    dataRange: {
                        show: false,
                        min: 0,
                        max: 1000,
                        text: ['High', 'Low'],
                        realtime: true,
                        calculable: true,
                        color: ['orangered', 'yellow', 'lightskyblue']
                    },
                    visualMap : {
                        show : true,
                        min : 0,
                        max : 255,
                        calculable : true,
                        inRange : {
                            color : ['aqua', 'lime', 'yellow', 'orange', '#ff3333']
                        },
                        textStyle : {
                            color : '#12223b'
                        }
                    },
                    geo: {
                        map: 'world',
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        roam: false,
                        silent: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#37376e',
                                borderColor: '#000'
                            },
                            emphasis: {
                                areaColor: '#2a333d'
                            }
                        }
                    },
                    series: [
                        {
                            "type": "lines",
                            "zlevel": 2,
                            "effect": {
                                "show": false,
                                "period": 4,
                                "trailLength": 0.02,
                                "symbol": "arrow",
                                "symbolSize": 5
                            },
                            "lineStyle": {
                                "normal": {
                                    "width": 1,
                                    "opacity": 0.6,
                                    "curveness": 0.2
                                }
                            },
                            "tooltip": {
                                "trigger": "item"
                            },
                            "data": [
                                {
                                    "fromName": "zhongshan",
                                    "toName": "American",
                                    "value": 19,
                                    "coords": [
                                        [
                                            113.3926,
                                            22.51595
                                        ],
                                        [
                                            "-90.66",
                                            "36.66"
                                        ]
                                    ]
                                },
                                {
                                    "fromName": "zhongshan",
                                    "toName": "Japan",
                                    "value": 17,
                                    "coords": [

                                        [
                                            113.3926,
                                            22.51595
                                        ],
                                        [
                                            "138.252924",
                                            "36.204824"
                                        ],
                                    ]
                                },
                                {
                                    "fromName": "zhongshan",
                                    "toName": "Korea",
                                    "value": 25,
                                    "coords": [
                                        [
                                            127.766922,
                                            35.907757
                                        ],
                                        [
                                            "121.465",
                                            "31.289"
                                        ],
                                    ]
                                },
                                {
                                    "fromName": "zhongshan",
                                    "toName": "Canada",
                                    "value": 31,
                                    "coords": [
                                        [
                                            113.3926,
                                            22.51595
                                        ],
                                        [
                                            "-106.346771",
                                            "56.130366"
                                        ],
                                    ]
                                },
                                {
                                    "fromName": "zhongshan",
                                    "toName": "Australia",
                                    "value": 12,
                                    "coords": [
                                        [
                                            113.3926,
                                            22.51595
                                        ],
                                        [
                                            "133.775136",
                                            "-25.274398"
                                        ],
                                    ]
                                },
                                {
                                    "fromName": "zhongshan",
                                    "toName": "Danish",
                                    "value": 19,
                                    "coords": [
                                        [
                                            113.3926,
                                            22.51595
                                        ],
                                        [
                                            "9.501785",
                                            "56.26392"
                                        ],
                                    ]
                                },
                                {
                                    "fromName": "zhongshan",
                                    "toName": "Russia",
                                    "value": 18,
                                    "coords": [
                                        [
                                            113.3926,
                                            22.51595
                                        ],
                                        [
                                            "27.953389",
                                            "53.709807"
                                        ],
                                    ]
                                },
                                {
                                    "fromName": "zhongshan",
                                    "toName": "Brazil",
                                    "value": 15,
                                    "coords": [
                                        [
                                            113.3926,
                                            22.51595
                                        ],
                                        [
                                            "-51.92528",
                                            "-14.235004"
                                        ],
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Shipping address",
                            "type": "effectScatter",
                            "coordinateSystem": "geo",
                            "zlevel": 2,
                            "rippleEffect": {
                                "period": 4,
                                "brushType": "stroke",
                                "scale": 4
                            },
                            "tooltip": {
                                "trigger": "item"
                            },
                            "label": {
                                "normal": {
                                    "show": true,
                                    "position": "left",
                                    "offset": [
                                        -5,
                                        5
                                    ],
                                    "formatter": "{b}"
                                },
                                "emphasis": {
                                    "show": true
                                }
                            },
                            "hoverAnimation": true,
                            "symbol": "circle",
                            "symbolSize": 10,
                            "itemStyle": {
                                "normal": {
                                    "show": false,
                                    "color": "#f00"
                                }
                            },
                            "data": [
                                {
                                    "name": "American",
                                    "value": [
                                        "-90.66",
                                        "36.86",
                                        19
                                    ]
                                },
                                {
                                    "name": "Japan",
                                    "value": [
                                        "138.252924",
                                        "36.204824",
                                        17
                                    ]
                                },
                                {
                                    "name": "Korea",
                                    "value": [
                                        "127.766922",
                                        "35.907757",
                                        25
                                    ]
                                },
                                {
                                    "name": "Canada",
                                    "value": [
                                        "-106.346771",
                                        "56.130366",
                                        31
                                    ]
                                },
                                {
                                    "name": "Australia",
                                    "value": [
                                        "133.775136",
                                        "-25.274398",
                                        22
                                    ]
                                },
                                {
                                    "name": "Danish",
                                    "value": [
                                        "9.501785",
                                        "56.26392",
                                        19
                                    ]
                                },
                                {
                                    "name": "Russia",
                                    "value": [
                                        "27.953389",
                                        "53.709807",
                                        18
                                    ]
                                },
                                {
                                    "name": "Brazil",
                                    "value": [
                                        "-51.92528",
                                        "-14.235004",
                                        15
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Send the address",
                            "type": "scatter",
                            "coordinateSystem": "geo",
                            "zlevel": 2,
                            "tooltip": {
                                "trigger": "item"
                            },
                            "label": {
                                "normal": {
                                    "show": true,
                                    "position": "right",
                                    "color": "#00ffff",
                                    "formatter": "{b}",
                                    "textStyle": {
                                        "color": "#00ffff"
                                    }
                                },
                                "emphasis": {
                                    "show": true
                                }
                            },
                            "symbol": "circle",
                            "symbolSize": 20,
                            "itemStyle": {
                                "normal": {
                                    "show": true,
                                    "color": "#EE0000"
                                }
                            },
                            "data": [
                                {
                                    "name": "zhongshan",
                                    "value": [
                                        113.3926,
                                        22.51595
                                    ]
                                }
                            ]
                        }
                    ]
                })
            }
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },


    }
</script>

<style >
  .navcss{
    width: 15%;
    text-align: center;
    font-size: 24px;
    font-weight: bolder;
  }
  .test-page {
    background-color: aqua;
    position: relative;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin: auto;
  }
  .EDIcontentcss{
    width: 80%;
    height: 80px;
    margin:40px auto;
    line-height: 80px;
    font-size: 30px;
  }
  .p-fixed {
    position: fixed;
    top: 0;
  }

</style>
