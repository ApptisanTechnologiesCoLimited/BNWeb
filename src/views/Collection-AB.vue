<template>
  <div id="collectionA">
    <div class="bg-img1" v-if="type == 0"></div>
    <div class="bg-img2" v-if="type == 1"></div>
    <div class="bg-gray">
       <ol class="breadcrumb">
          <li>Place Select the Collection</li>
          
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
                        <img src="../assets/images/ab-product.png" v-if="type == 0" class="h350" alt="">
                        <img src="../assets/images/ar-product.png" v-if="type == 1" class="h350" alt="">
                      </div>
                      <div class="col-xs-6 text-center mt30">
                        <p class="font20" :class="type == 1 ? 'white':''">SELECT COLLECTION</p>
                        <div class="button-b black w100 mt30" :class="type == 0 ? 'active':'white'" @click="setType(0);">
                          ALBA
                        </div>
                        <div class="button-b black w100 mt30" :class="type == 1 ? 'active':''" @click="setType(1);">
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
                  <div class="col-xs-4 text-right click" v-if="type == 0">
                    <router-link :to="'/alba/step'" class="black">NEXT <i class="el-icon-d-arrow-right"></i></router-link>
                  </div>
                  <div class="col-xs-4 text-right click" v-if="type == 1">
                    <router-link :to="'/aria/step'" class="white">NEXT <i class="el-icon-d-arrow-right"></i></router-link>
                  </div>
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
            type:0
        }
      },
  created:function () {
        this.$parent.headerB();
        this.$parent.footerB();
  },
  methods:{
    setType(ID){
      
      this.type = ID
      var configurator = {
        "step":1,
        "collection":ID
      }
        localStorage.setItem("configurator",JSON.stringify(configurator))
        // 读取 var configurator = JSON.parse(localStorage.getItem("configurator"))
        // 再保存 configurator.material = "black"; localStorage.setItem("configurator",JSON.stringify(configurator))
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
