<template>
    <div>
      <div style="width: 100%;display: flex;flex-wrap: wrap;;height: 90px;line-height: 90px;background: #0C0C0C ">
        <div style="width: 30%;">
          <img src="../assets/images/galanzEDIlogo.png" style="height: 62px;width: 90px;margin: 5px 50%;text-align: center;" alt=""   @click="goHome">
        </div>
        <div style="width: 70%;display: flex;flex-wrap: wrap;;height: 90px;line-height: 90px;">
          <a-dropdown class="headtext"  >
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
          <a-dropdown class="headtext"   >
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
          <a-dropdown class="headtext"  >
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
          <a-dropdown class="headtext"  >
            <a class="ant-dropdown-link" @click="e => e.preventDefault()" style="font-size: 20px;text-align: center">
              格兰仕全球
            </a>
            <a-menu slot="overlay" @click="onClick" style="text-align: center">
              <a-menu-item key="EDIProgressAnnouncement">
                格兰仕中国
              </a-menu-item>
              <a-menu-item key="SystemUpgradeAnnouncement2">
                格兰仕美国
              </a-menu-item>
              <a-menu-item key="SystemUpgradeAnnouncement3">
                格兰仕智利
              </a-menu-item>
              <a-menu-item key="SystemUpgradeAnnouncement4">
                格兰仕加拿大
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <a-dropdown >
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
        name: "HeadNav",
        data(){
            return{
                selectLanguage:'请选择语言'
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
        }
    }
</script>

<style scoped>
  .headtext{
    width: 20%;
  }
  a {
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    -webkit-text-decoration-skip: objects;
  }
  .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title {
    clear: both;
    margin: 0;
    padding: 5px 12px;
    color: red;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  *, ::after, ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .ant-dropdown-menu {
    position: relative;
    margin: 0;
    padding: 4px 0;
    text-align: left;
    list-style-type: none;
    background-color: #0C0C0C;
    opacity: 80%;
    background-clip: padding-box;
    border-radius: 4px;
    outline: none;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    -webkit-transform: translate3d(0, 0, 0);
  }
</style>
