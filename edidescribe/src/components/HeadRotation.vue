<template>
  <div>
    <div class="tips" :style="headstyle" >
      <div  style="width: 100%;display: flex;flex-wrap: wrap;;height: 80px;line-height: 80px;" @mouseenter="enter(1)" @mouseleave="leave(1)">
        <img src="http://meicloud.com/public/static/index/img/logo_color.png" style="margin-left: 10%;" alt="" class="headimg"  @click="goHome">
        <a-dropdown class="headtext" :style="textColor" >
          <a class="ant-dropdown-link" @click="e => e.preventDefault()" style="font-size: 20px;text-align: center">
            支持
          </a>
          <a-menu slot="overlay" @click="onClick" style="text-align: center">
            <a-menu-item key="Disambiguation">
              Q&A解疑
            </a-menu-item>
            <a-menu-item key="SystemDescribe">
              系统介绍
            </a-menu-item>
            <a-menu-item key="Contact">
              联系我们
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <a-dropdown class="headtext" :style="textColor"  >
          <a class="ant-dropdown-link" @click="e => e.preventDefault()" style="font-size: 20px;text-align: center">
            格兰仕EDI
          </a>
          <a-menu slot="overlay" @click="onClick" style="text-align: center">
            <a-menu-item key="GalanzEDIArchitectureDiagram">
              格兰仕EDI架构图
            </a-menu-item>
            <a-menu-item key="Docking">
              对接
            </a-menu-item>
            <a-menu-item key="CaseAnalysis">
              案例分析
            </a-menu-item>
            <a-menu-item key="Benefits">
              好处
            </a-menu-item>
            <a-menu-item key="BusinessDataFlowDiagram">
              业务数据流图
            </a-menu-item>
          </a-menu>

        </a-dropdown>
        <a-dropdown class="headtext" :style="textColor" >
          <a class="ant-dropdown-link" @click="e => e.preventDefault()" style="font-size: 20px;text-align: center">
            公告
          </a>
          <a-menu slot="overlay" @click="onClick" style="text-align: center">
            <a-menu-item key="EDIProgressAnnouncement">
              EDI进展公告
            </a-menu-item>
            <a-menu-item key="SystemUpgradeAnnouncement">
              系统升级公告
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <div style="width: 30%;">
          <a-dropdown style="width: 30%;float: right;">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()" style="font-size: 15px;float: right;">
              {{selectLanguage}}
            </a>
            <a-menu slot="overlay" @click="onClick">
              <a-menu-item key="中文">
                中文
              </a-menu-item>
              <a-menu-item key="English" >
                English
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    </div>
    <a-carousel autoplay v-if="showAutoplay" >
      <div v-for="(item,index) in imgInfo" :key="index" >
          <div class="autoplaycss">
            <div class="autoplayLeftcss">
              <span style="padding-top: 40px;">{{item.textContent}}</span>
              <br>
              <br>
              <span style="padding-top: 40px;">{{item.textContent1}}</span>
            </div>
            <div class="autoplayRightcss">
              <img :src=item.imgUrl alt="" style="width: 400px;height: 400px;margin: auto">
            </div>
          </div>
      </div>
    </a-carousel>
    <div class="ShowImg"  v-if="showImg" :style="{backgroundImage:'url(' + url + ')'}">
    </div>
  </div>
</template>
<script>
    export default {
        name: "Headrotation",
        data(){
            return{
                showAutoplay: false,
                showImg: false,
                selectLanguage: '选择语言',
                headstyle:{
                    background: '',
                },
                url:'http://meicloud.com/public/uploads/image/20200629/1593398293340.jpg',
                textColor:{
                    color: '#fff',
                },
                imgInfo:[
                    {
                        imgUrl: 'http://meicloud.com/public/uploads/image/20200803/1596443157927.png',
                        textContent: '做最懂制造业的全价值链',
                        textContent1: '云服务专家速度快把不单单是离开'
                    },
                    {
                        imgUrl: 'http://meicloud.com/public/uploads/image/20200707/1594117444860.png',
                        textContent: 'TOP100 ',
                        textContent1: '渠道联盟计划启动'
                    },
                    {
                        imgUrl: 'http://meicloud.com/public/uploads/image/20200710/1594372231818.png',
                        textContent: '一站式云服务',
                        textContent1: '助力企业数字化转型'
                    },
                    {
                        imgUrl:'http://meicloud.com/public/uploads/image/20200723/1595490405850.png',
                        textContent: '移动平台免费' ,
                        textContent1: '企业移动互联解决方案'
                    },
                    {
                        imgUrl:'http://meicloud.com/public/uploads/image/20200723/1595490405850.png',
                        textContent:'主流行业',
                        textContent1:'报告限时获取'
                    }
                ]
            }
        },
        mounted(){
          if(this.$route.path =='/'){
              this.showAutoplay = true;
          } else {
              this.showImg = true;
          }
        },
        methods:{
            goHome(){
                this.$router.push('/');
            },
            onClick({ key }) {
                if(key == '中文'|| key == 'English')
                {
                    switch ( key ) {
                        case '中文':
                            this.selectLanguage = key;
                            break;
                        case 'English':
                            this.selectLanguage = key;
                            break;
                    }
                }else{
                    this.$router.push({name:key}).catch(err => err);
                }
            },
            enter(e){
                this.headstyle.background = '#fff';
                this.textColor.color = 'black';
                console.log(e)
            },
            leave(){
                this.headstyle.background = '';
                this.textColor.color = '#fff';
            },

        }
    }
</script>

<style >
  .headimg{
    height: 40px;
    width: 5%;
    margin-top: 10px;
    margin-left: 20px;
  }
  .ShowImg{
    width: 100%;
    height: 800px;
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-attachment: fixed;
  }
  .tips{
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-indent: 5px;
  }
  /* 轮播图 */
  .ant-carousel .slick-slide {
    text-align: center;
    height: 670px;
    line-height: 50px;
    background-image: url("http://meicloud.com/public/uploads/image/20200710/1594372231445.jpg");
    opacity: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .ant-carousel .slick-slide h1 {
    padding-top:80px;
  }
  .ant-carousel .slick-slide img{
    width: 100%;
    height:300px;
  }
  .autoplayLeftcss{
    width: 50%;
    margin-top:80px ;
    text-align: center;
    font-size: 50px;
    font-weight: bolder;
    color: #fff;
    font-family: Algerian;
  }
  .autoplayRightcss{
    width: 50%;
    padding: auto;
    float: contour;
    margin: auto;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .autoplaycss{
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    margin-top: 200px
  }

  /* 通知 */
  .headtext{
    width: 10%;
  }

</style>
