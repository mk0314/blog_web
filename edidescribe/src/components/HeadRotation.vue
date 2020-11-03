<template>
  <div>
    <HeadNav/>
    <a-carousel autoplay v-if="showAutoplay" >
      <div v-for="(item,index) in imgInfo" :key="index" >
        <img :src="require('../assets/images/'+item+'.png')" alt="" style="width: 100%;height: 580px;">
      </div>
    </a-carousel>
    <img :src="url" alt="" style="height: 580px;width: 100%;" v-if="showImg">
  </div>
</template>
<script>
  import HeadNav from '../components/HeadNav'
    export default {
        name: "Headrotation",
        components:{
            HeadNav
        },
        data(){
            return{
                url: 'http://meicloud.com/public/uploads/image/20200624/1592964901398.jpg',
                showAutoplay: false,
                showImg: false,
                selectLanguage: '选择语言',
                headstyle:{
                    background: '',
                },
                textColor:{
                    color: '#fff',
                },
                imgInfo:['background2', 'background2', 'background2', 'background2']
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


        }
    }
</script>

<style >

  .ShowImg{
    width: 100%;
    height: 580px;
    background-repeat:no-repeat;
    background-size:100% 100%;
  }

  /* 轮播图 */
  .ant-carousel .slick-slide {
    text-align: center;
    height: 580px;
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
