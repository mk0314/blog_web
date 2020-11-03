<template>
  <div class="supportsystems" >
    <div class="supportsystemimg">
      <img src="../assets/images/worldmap.png"
           alt="格兰仕国际EDI业务支持系统图"
           style="width: 658px;height: 334px;">
    </div>
    <div class="supportsystemimg1">
      <ul class="supportsystemul">
        <li class="supportsystemulli" >
          <span class="supportsystemullispan" >多时区</span>
        </li>
        <li class="supportsystemulli">
          <span class="supportsystemullispan">多语言</span>
        </li>
        <li class="supportsystemulli">
          <span class="supportsystemullispan"> EPR系统集成</span>
        </li>
        <li class="supportsystemulli">
          <span class="supportsystemullispan">端到端的全程自动化</span>
        </li>
        <img src="../assets/images/knowmore.png"
             alt="了解更多"
             style="width: 110px;height: 29px;float: right;margin-right: 90px;">
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "supportSystem"
    }
</script>

<style scoped>
  .supportsystems{
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap:wrap ;
  }
  .supportsystemimg{
    width: 658px;
    margin-top: 30px;
  }
  .supportsystemimg1{
    width: 500px;
    margin-top: 60px;
    float: right;
  }
  .supportsystemul{

  }
  .supportsystemulli{
    color:#ff0000;
    font-size:30px;
  }
  .supportsystemullispan{
    color:#000000;
    font-size:30px;
  }
</style>
