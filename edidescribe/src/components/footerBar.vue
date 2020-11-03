<template>
  <div style="height: 500px;background: #000000;">
<!--    <div class="footer" >-->
<!--      <p class="footertitle" >支持</p>-->
<!--      <p class="footertitle" >格兰仕EDI</p>-->
<!--      <p class="footertitle" >公告</p>-->
<!--      <p class="footertitle" >格兰仕全球</p>-->
<!--    </div>-->
<!--    <div class="footer">-->
<!--      <p class="footercontent" >Q&A</p>-->
<!--      <p class="footercontent" >介绍</p>-->
<!--      <p class="footercontent" >EDI进展</p>-->
<!--      <p class="footercontent" >格兰仕中国</p>-->
<!--    </div>-->
<!--    <div class="footer">-->
<!--      <p class="footercontent">联系我们</p>-->
<!--      <p class="footercontent">对接</p>-->
<!--      <p class="footercontent">系统升级</p>-->
<!--      <p class="footercontent">格兰仕美国</p>-->
<!--    </div>-->
<!--    <div class="footer">-->
<!--      <p class="footercontent"></p>-->
<!--      <p class="footercontent">案例分析</p>-->
<!--      <p class="footercontent"></p>-->
<!--      <p class="footercontent">格兰仕智利</p>-->
<!--    </div>-->
<!--    <div class="footer">-->
<!--      <p class="footercontent"></p>-->
<!--      <p class="footercontent">业务数据流程图</p>-->
<!--      <p class="footercontent"></p>-->
<!--      <p class="footercontent">格兰仕加拿大</p>-->
<!--    </div>-->
    <div style="width: 70%;display: flex;flex-wrap: wrap;margin: auto">
      <div style="width: 25%;display: flex;flex-direction: column;">
        <span class="footertitle">支持</span>
        <span class="footercontent" >Q&A</span>
        <span class="footercontent">联系我们</span>
      </div>
      <div style="width: 25%;display: flex;flex-direction: column;">
        <span class="footertitle">格兰仕EDI</span>
        <span class="footercontent">介绍</span>
        <span class="footercontent">对接</span>
        <span class="footercontent">案例分析</span>
        <span class="footercontent">业务数据流程图</span>
      </div>
      <div style="width: 25%;display: flex;flex-direction: column;">
        <span class="footertitle">公告</span>
        <span class="footercontent">EDI进展</span>
        <span class="footercontent">系统升级</span>
      </div>
      <div style="width: 25%;display: flex;flex-direction: column;">
        <span class="footertitle">格兰仕全球</span>
        <span class="footercontent">格兰仕中国</span>
        <span class="footercontent">格兰仕美国</span>
        <span class="footercontent">格兰仕智利</span>
        <span class="footercontent">格兰仕加拿大</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "footerBar"
    }
</script>

<style scoped>
  .footer{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    text-align: center;
    margin: auto;
  }
  .footertitle{

    color: #EB2222 ;
    font-size: 18px;
    text-align: left;
    padding-top: 100px;
  }
  .footercontent{
    color: #ffffff;
    font-size: 14px;
    text-align: left;
    padding-top: 20px;
  }
</style>
