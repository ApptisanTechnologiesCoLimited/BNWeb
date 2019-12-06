<template>
  <div id="collectionA">
    <div class="bg-img1" v-if="collection == 0"></div>
    <div class="bg-img2" v-if="collection == 1"></div>
    <div class="">
       <ol class="breadcrumb">
          <li class="orange">1. Collection</li>
          
          <span class="font16 black click pull-right" @click="$router.go(-1)">✕</span>
        </ol>
    </div>
       
        <div class="content middle collection">
          <div class="cell">
              <div class="container relative">
                <div class="row">
                  <div class="col-xs-10 col-xs-offset-1">
                    <div class="row">
                      <div class="col-xs-6">
                        <img :src="collectionImages[collection]"  class="h350" alt="">
                      </div>
                      <div class="col-xs-6 text-center mt30">
                        <p class="font20" :class="collection == 1 ? 'white':''">SELECT COLLECTION</p>
                        <div class="button-b black w100 mt30" :class="collection == 0 ? 'active':'white'" @click="collection=0">
                          ALBA
                        </div>
                        <div class="button-b black w100 mt30" :class="collection == 1 ? 'active':''" @click="collection=1">
                          ARIA
                        </div>

                      </div>
                    </div>
                  </div>
                 
                </div>
                 
                <div class="row next-nav">
                  <div class="col-xs-12"><hr class="gray"></div>
                  <div class="col-xs-4 click"></div>
                  <div class="col-xs-4 text-center click"></div>
                  <div class="col-xs-4 text-right click">
                    <div :class="collection == 0 ? 'black':'white'" @click="next()">NEXT <i class="el-icon-d-arrow-right"></i></div>
                  </div>

                  <!-- <div class="col-xs-4 text-right click" v-if="type == 1">
                    <router-link :to="'/collection/step2'" class="white">NEXT <i class="el-icon-d-arrow-right"></i></router-link>
                  </div> -->
                </div>
                
               
              </div>
             
              
              
          </div>
          <!-- <router-link :to="'/alba/step'" class="button-next click orange">NEXT <i class="el-icon-d-arrow-right"></i></router-link> -->
         
            
         
          
        </div>
  </div>
</template>

<script>
import "../assets/css/project.css";

export default {
  name: 'collectionA',
  data(){
        return {
            collection:0,
            collectionImages:[
              require("../assets/images/collection/alba/ab-product.png"),
              require("../assets/images/collection/aria/ar-product.png")
            ]

        }
      },
  created:function () {
        this.$parent.headerB();
        this.$parent.footerB();
  },
  mounted () {
    
      // if(localStorage.getItem("collection")){
      //   this.collection = localStorage.getItem("collection")
      //    }else{
      //      this.collection = 0
      //   }//若collection为空值时，设置默认选项。
       
     },
  methods:{
    
    next(){
        localStorage.setItem("step",1)
        localStorage.setItem("collection",this.collection)
        localStorage.setItem("frame",0)
        localStorage.setItem("button",0),
        


        
        this.$router.push({path: '/collection/step2'});
    }
  }
 
}
</script>

<style lang="css">
.bg-img1,
.bg-img2{
   width:100vw;
   height:100vh;
   position: fixed;
   top:0;
   left:0;
   background-size:cover;
   z-index:-1;
 }
 .bg-img1{background-image: url(../assets/images/bg1.jpg);}
 .bg-img2{background-image: url(../assets/images/bg2.jpg);}
</style>
