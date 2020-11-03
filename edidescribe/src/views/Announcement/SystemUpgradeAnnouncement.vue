<template>
    <div>
      <HeadRotation/>
      <div style="margin: auto">
        <div  style=" margin-top: 100px;text-align: center;">
          <span class="titleContent" >系统升级公告</span>
        </div>
        <div style="text-align: center">
          <a-input-search v-model="searchStr" placeholder="输入搜选项" class="search"  @search="onSearch"/>
        </div>
        <div class="main"  v-for="(item,index) in announcementinfos" :key="index">
          <div class="circle" >
            <span style="line-height: 40px;color: #ffffff;font-size: 21px;">{{announcementinfos.length-index}}</span>
          </div>
          <div class="announcement" >
            <div class="announcementContent">
              <span>{{item.announcementContent}}</span>
            </div>
            <div class="announcementDate">
              <span>{{item.announcementDate}}</span>
            </div>
          </div>
        </div>
      </div>
      <FooterBar/>
    </div>
</template>

<script>
  import HeadRotation from "../../components/HeadRotation";
  import FooterBar from "../../components/footerBar"
    export default {
        name: "EDIProgressAnnouncement",
        components:{
            HeadRotation,
            FooterBar
        },
        data(){
            return{
                current: 0,
                searchStr: '',
                announcementinfos:[
                    {
                        announcementContent:'加拿大系统预定于10月底上线',
                        announcementDate:'2020年8月23日'
                    },
                    {
                        announcementContent:'加拿大系统预定于10月底上线',
                        announcementDate:'2020年8月23日'
                    },
                    {
                        announcementContent:'加拿大系统预定于10月底上线',
                        announcementDate:'2020年8月23日'
                    },
                ]
            }
        },
        methods:{
            onChange(current) {
                console.log('onChange:', current);
                this.current = current;
            },
            onSearch(){

            }
        }
    }
</script>

<style scoped>
  announcementTitle{

  }
  .titleContent{
   font-family: MicrosoftYaHei;
    font-size: 36px;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
  }
  .search{
    width: 360px;
    height: 55px;
    line-height: 55px;
  }
  .main{
    width: 60.4%;
    margin:30px auto;
    display: flex;
    flex-wrap: wrap;
  }
  .circle{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    background: red;
    margin-top: 100px;
    position: absolute;
    z-index: 222;
    text-align: center;
    margin-left: 15px;
  }
  .announcement{
    width: 1060px;
    height: 240px;
    background: #F2F2F2;
    margin-left: 90px;
    border-radius: 10px;
  }
  .announcementContent{
    margin: 30px 30px;
    font-family: MicrosoftYaHei;
    font-size: 24px;
  }
  .announcementDate{
    margin:108px 30px;
    font-family: MicrosoftYaHei;
    font-size: 24px;
    color: #000000;
  }
</style>
