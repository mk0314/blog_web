<template>
  <div class="imgBox">
    <img class="img-slide img1" src="../assets/images/galanzEDIlogo.png" alt="1">
    <img class="img-slide img2" src="../assets/images/galanzEDIlogo.png" alt="2">
    <img class="img-slide img3" src="../assets/images/galanzEDIlogo.png" alt="3">
  </div>
</template>

<script>
    export default {
        name: "slide-auto",
        data(){
            return{
                index: 0
            }
        },
        mounted(){
          this.ChangeImg()
        },
        methods:{
            ChangeImg() {
              let index = this.index++;
              var a=document.getElementsByClassName("img-slide");
              if(index>=a.length) index=0;
              for(var i=0;i<a.length;i++){
                  a[i].style.display='none';
              }
              a[index].style.display='block';
          }
        }
    }
</script>

<style scoped>
  .imgBox{
    border-top: 2px solid cadetblue;
    width: 50%;
    height: 500px;
    margin: 0 auto;

  }

  .imgBox img{
    width: 60%;
    height: 300px;
    margin: 0 auto;
    padding-top: 30px;

  }

  .img1{
    display: block;
  }

  .img2{
    display: none;
  }

  .img3{
    display: none;
  }
</style>
