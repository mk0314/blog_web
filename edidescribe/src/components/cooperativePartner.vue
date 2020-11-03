<template>

  <a-carousel autoplay  >
    <div style="margin: auto;">
      <div style="width: 80%;margin:40px auto;display: flex;flex-wrap: wrap;"
           v-for="( item, index) in cooperativePartners" :key="index">
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg1+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg2+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg3+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg4+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg5+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
      </div>
    </div>
    <div style="margin: auto;">
      <div style="width: 80%;margin:40px auto;display: flex;flex-wrap: wrap;"
           v-for="( item, index) in cooperativePartners" :key="index">
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg1+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg2+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg3+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg4+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg5+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
      </div>
    </div>
    <div style="margin: auto;">
      <div style="width: 80%;margin:40px auto;display: flex;flex-wrap: wrap;"
           v-for="( item, index) in cooperativePartners" :key="index">
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg1+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg2+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg3+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg4+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
        <div style="width: 20%;display: flex;flex-wrap: wrap;">
          <img :src="require('../assets/images/'+item.partnerImg5+'.png')" alt="" style="width: 150px;height: 80px;">
        </div>
      </div>
    </div>
  </a-carousel>
</template>

<script>
    export default {
        name: "cooperativePartner",
        data(){
            return{
                cooperativePartners:[
                    {
                        partnerImg1:'partnerImg1',
                        partnerImg2:'partnerImg2',
                        partnerImg3:'partnerImg3',
                        partnerImg4:'partnerImg4',
                        partnerImg5:'partnerImg5'
                    },
                    {
                        partnerImg1:'partnerImg1',
                        partnerImg2:'partnerImg2',
                        partnerImg3:'partnerImg3',
                        partnerImg4:'partnerImg4',
                        partnerImg5:'partnerImg5'
                    },
                    {
                        partnerImg1:'partnerImg1',
                        partnerImg2:'partnerImg2',
                        partnerImg3:'partnerImg3',
                        partnerImg4:'partnerImg4',
                        partnerImg5:'partnerImg5'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
  /deep/.ant-carousel .slick-slide {
    text-align: center;
    height: 450px;
    line-height: 50px;
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

</style>
