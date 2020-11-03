<template>
 <div>
    <HeadRotation/>
   <div style="height: 540px;background: #FFFFFF;">
     <div  class="contentTitle">
       <span >立即与格兰仕EDI建立连接</span>
     </div>
     <div class="content" style="text-align: center;">
       <div class="imgtext" >
         <img :src="require('../../assets/images/'+tradeimgname+'.png')"
              alt=""
              style="width: 100px;height: 100px;"
              @mouseover="enter(1)"
              @mouseout="leave(1)">
         <div style="margin: 27px auto;display: flex;flex-direction: column;font-family: MicrosoftYaHei">
           <span class="font-change" >贸易伙伴</span>
           <div style="font-family: MicrosoftYaHei;font-size: 16px;display: flex;flex-direction: column;margin-top: 24px;">
               <span >交易数据明确</span>
               <span >能更高效迅速的促进</span>
               <span >双方进行交易</span>
           </div>
         </div>
       </div>
       <div class="imgtext" >
         <img :src="require('../../assets/images/'+wareimgname+'.png')"
              alt=""
              style="width: 100px;height: 100px;"
              @mouseover="enter(2)"
              @mouseout="leave(2)">
         <div style="margin: 27px auto;display: flex;flex-direction: column;font-family: MicrosoftYaHei">
           <span class="font-change" >仓库</span>
           <div style="font-family: MicrosoftYaHei;font-size: 16px;display: flex;flex-direction: column;margin-top: 24px;">
             <span >EDI与业务</span>
             <span >无缝连接使得数据</span>
             <span >可控，省时</span>
           </div>
         </div>
       </div>
       <div class="imgtext" >
         <img :src="require('../../assets/images/'+overseasimgname+'.png')"
              alt=""
              style="width: 100px;height: 100px;"
              @mouseover="enter(3)"
              @mouseout="leave(3)">
         <div style="margin: 27px auto;display: flex;flex-direction: column;font-family: MicrosoftYaHei">
           <span class="font-change" >海外分公司</span>
           <div style="font-family: MicrosoftYaHei;font-size: 16px;display: flex;flex-direction: column;margin-top: 24px;">
             <span >EDI连接可降低</span>
             <span >纸张的消费自动处理数据</span>
             <span >可控，省时</span>
           </div>
         </div>
       </div>
       <div class="imgtext" >
         <img :src="require('../../assets/images/'+domesticimgname+'.png')"
              alt=""
              style="width: 100px;height: 100px;"
              @mouseover="enter(4)"
              @mouseout="leave(4)">
         <div style="margin: 27px auto;display: flex;flex-direction: column;font-family: MicrosoftYaHei">
           <span class="font-change" >国内分公司</span>
           <div style="font-family: MicrosoftYaHei;font-size: 16px;display: flex;flex-direction: column;margin-top: 24px;">
             <span >数据可视化</span>
             <span >交易状态支持</span>
             <span >实时可见性</span>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div style="height: 613px;background: #F2F2F2;border: 1px solid #F2F2F2">
     <div class="supportsystem"  >
       <div  class="contentTitle">
         <span >格兰仕国际EDI业务支持系统</span>
       </div>
       <SupportSystem/>
     </div>
   </div>

   <div class="announcement" >
     <div  class="contentTitle">
       <span >公告</span>
     </div>
     <Announcement/>
   </div>
   <div style="height: 600px;background: #F3F3F3;border: 1px solid #f3f3f3">
     <div  class="contentTitle">
       <span >合作伙伴</span>
     </div>
     <CooperativePartner/>
   </div>
   <FooterBar/>
 </div>
</template>


<script>
  import Announcement from "../../components/announcement";
  import HeadRotation from "../../components/HeadRotation";
  import FooterBar from "../../components/footerBar";
  import CooperativePartner from "../../components/cooperativePartner";
  import SupportSystem from "../../components/supportSystem";
    export default {
        name: "Home",
        components:{
          HeadRotation,
            FooterBar,
            CooperativePartner,
            Announcement,
            SupportSystem
        },
        props: ["renderData"],
        data(){
            return{
                chart: null,
                tradeimgname: 'tradepartner',
                wareimgname: 'Warehouse',
                overseasimgname: 'overseasSubsidiaries',
                domesticimgname: 'domesticCompany'
            }
        },
        methods: {

            leave(a) {
                switch (a) {
                    case 1:
                        this.tradeimgname = 'tradepartner';
                        break;
                    case 2:
                        this.wareimgname = 'Warehouse';
                        break;
                    case 3:
                        this.overseasimgname = 'overseasSubsidiaries';
                        break;
                    case 4:
                        this.domesticimgname = 'domesticCompany';
                        break;
                }
            },
            enter(b) {
                switch (b) {
                    case 1:
                        this.tradeimgname = 'tradepartner1';
                        break;
                    case 2:
                        this.wareimgname = 'Warehouse1';
                        break;
                    case 3:
                        this.overseasimgname = 'overseasSubsidiaries1';
                        break;
                    case 4:
                        this.domesticimgname = 'domesticCompany1';
                        break;
                }
            }
        }
    }
</script>

<style >

  .font-change{
    font-family: MicrosoftYaHei;
    font-size:24px;
    color: #000000;
    text-align: center;
  }
  .imgtext{
    width: 25%;
    height: 200px;
  }
  .contentTitle{
    font-family: MicrosoftYaHei;
    font-weight: bolder;
    font-size: 36px;
    text-align: center;
    margin-top: 100px;
  }
  .content{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin: 65px auto;
  }

  .supportsystem{
    width: 1160px;
    margin: auto;
    background: #F2F2F2;
  }

  .announcement{
    height: 600px;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
  }

  /deep/.ant-dropdown-menu {
    position: relative;
    margin: 0;
    padding: 4px 0;
    text-align: left;
    list-style-type: none;
    background-color: #000000;

    background-clip: padding-box;
    border-radius: 4px;
    outline: none;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    -webkit-transform: translate3d(0, 0, 0);
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
