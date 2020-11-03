<template>
  <div style="display: flex;flex-wrap: wrap;margin:30px auto">
    <div class="annuncestyle" >
      <div class="sysannouncement">
        <span>系统公告</span>
      </div>
      <ul class="announcementul">
        <li>1.加拿大系统定于10月底上线</li>
        <li>2.美国系统定于11月底上线</li>
        <li>3.加拿大系统定于10月底上线</li>
        <img src="../assets/images/more.png"
             alt="更多"
             style="width: 79px;height: 30px;float:right;border-bottom: 1px solid red; ">
      </ul>
    </div>
    <div class="annuncestyle" >
      <div class="ediannouncement" >
        <span>EDI进展公告</span>
      </div>
      <ul class="announcementul">
        <li>1.已经和CommrtceHub建立连接</li>
        <li class="announcementulli">2020-10-19</li>
        <li>2.已经和True Commerce建立连接</li>
        <li class="announcementulli" >2020-10-18</li>
        <img src="../assets/images/more.png"
             alt="更多"
             style="width: 79px;height: 30px;float:right;border-bottom: 1px solid red; ">
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "announcement"
    }
</script>

<style scoped>
  .annuncestyle{
    width: 30%;
    height: 362px;
    background: #ffffee ;
    margin: auto
  }
  .sysannouncement{
    height: 58px;
    background: #7C7C7C;
    text-align: center;
    line-height: 58px;
    font-size: 28px;
    color: #FFFFFF;
  }
  .announcementul{
    margin: 10px;
    list-style: none;
    font-size: 21px;
    font-family: MicrosoftYaHei;
  }
  .ediannouncement{
    height: 58px;
    background: #7C7C7C;
    text-align: center;
    line-height: 58px;
    font-size: 28px;
    color: #FFFFFF;
  }
  .announcementulli{
    padding-left: 15px;
    color: #000000;
  }
</style>
