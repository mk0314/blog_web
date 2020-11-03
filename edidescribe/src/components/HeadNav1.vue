<template>
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

</template>

<script>
    export default {
        name: "HeadNav1",
        data(){
            return{

            }
        },
        methods:{
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

<style scoped>
  .headimg{
    height: 40px;
    width: 5%;
    margin-top: 10px;
    margin-left: 20px;
  }
  .tips{
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-indent: 5px;
  }
  /* 通知 */
  .headtext{
    width: 10%;
  }

</style>
