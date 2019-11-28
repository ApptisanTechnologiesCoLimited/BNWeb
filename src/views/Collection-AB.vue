<template>
  <div id="collectionA">
    <div class="bg-img1"></div>
    <div class="bg-gray">
       <ol class="breadcrumb">
          <li>Place Select the Collection</li>
          
          <span class="font16 black click pull-right" @click="$router.go(-1)">✕</span>
        </ol>
    </div>
       
        <div class="content middle collection">
          <div class="cell">
              <div class="container">
                <div class="row">
                  <div class="col-xs-10 col-xs-offset-1">
                    <div class="row">
                      <div class="col-xs-6">
                        <img src="../assets/images/ab-product.png" class="h350" alt="">
                      </div>
                      <div class="col-xs-6 text-center mt30">
                        <p class="font20">SELECT COLLECTION</p>
                        <router-link :to="'/alba/step'" class="button-b black w100 mt30 active">
                          ALBA
                        </router-link>
                        <router-link :to="'/collection-ar/'" class="button-b black w100 mt30">
                          ARIA
                        </router-link>

                      </div>
                    </div>
                  </div>
                 
                </div>
                
               
           </div>
          </div>
          <router-link :to="'/alba/step'" class="button-next click orange">NEXT <i class="el-icon-d-arrow-right"></i></router-link>
            
         
          
        </div>
  </div>
</template>

<script>
import "../assets/css/project.css";

export default {
  name: 'collectionA',
  data(){
        return {
            type:1
        }
      },
  created:function () {
        this.$parent.headerB();
        this.$parent.footerB();
  }
 
}
</script>

<style lang="css">
.bg-img1{
   width:100vw;
   height:100vh;
   position: fixed;
   top:0;
   left:0;
   background-image: url(../assets/images/bg1.jpg);
   background-size:cover;
   z-index:-1;
 }
</style>
