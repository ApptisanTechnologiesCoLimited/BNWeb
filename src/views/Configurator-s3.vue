<template>
  <div id="addstep">
    <div class="bg-gray">
      <ol class="breadcrumb">
          <li class="black">1. Collection</li>
          <li class="black">2. Materials</li>
          <li class="orange">3. Frame</li>
          <li class="gray-w">4. Product</li>
          <li class="gray-w">5. Engraving</li>
          <li class="gray-w">6. Backlights</li>
          <li class="gray-w">7. Details</li>
          <li class="gray-w">8. Create</li>
          <span class="font16 black click pull-right">✕</span>
        </ol>
           
      </div>
       
        <div class="content middle collect" >
          <div class="cell">
            <!-- Alba Start -->
            <div v-if="collection==0">
              <div class="container">
                <div class="row">
                  <p class="font20">SELECT FORMAT</p>
                  <div class="col-xs-12 text-center mt30 inlineb">
                     
                      <div class="inlineb p10 w100" v-viewer>
                        <div class="text-center">
                          <img :src="mateImg"  class="h350" alt="" title="">
                        </div>
                     
                          <div class="button-img">
                            <div>
                              <img :src="buttonColorImg" class="h350" alt="">
                            </div>
                        
                          </div>
                      </div>
                      <!-- <p>Click to zoom</p> -->
                      
                      
                    </div>
                    <div class="col-xs-4 col-xs-offset-4 text-center mt30">
                        
                        <div class="mr20 inlineb" @click="actFormat(1);" :class="format == 1 ? 'active':''">
                          <div class="border inlineb">
                            <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                          </div>
                          <p class="name-f">
                            One Frame
                          </p>
                        </div>
                        <div class="mr20 inlineb" @click="actFormat(2);" :class="format == 2 ? 'active':''">
                          <div class="border inlineb">
                            <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                            <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                          </div>
                          <p class="name-f">
                            Double Frame
                          </p>
                          
                        </div>
                   
                    </div>


                </div>
               

              </div>
            </div>
            <!-- Alba End -->


            <!-- Aria Start -->
            <!-- Aria End-->
           
          </div>
         
          
        </div>
        
        <div class="container">
          <hr class="gray">
          <div class="row">
          <div class="col-xs-4 click" @click="back()"><i class="el-icon-d-arrow-left"></i> BACK</div>
            <div class="col-xs-4"></div>
            <div class="col-xs-4 text-right click orange" @click="next()">NEXT <i class="el-icon-d-arrow-right"></i></div>
          </div>
        </div>
        
      
        
  </div>
</template>

<script>
import "../assets/css/project.css";
// import axios from "axios";
export default {
  name: 'addstep',
  data(){
        return {
            
            collection:{},//用于判断ab或ar
            format:{},
            mateImg:{},
            buttonColorImg:{}
            

            
        }
      },
  
  mounted () {
     if(localStorage.getItem("step") == null){
          this.$router.push({path: '/collection/step1'});
         }//若collection为空值时，设置默认选项。
      if(localStorage.getItem("collection")){
        this.collection = localStorage.getItem("collection");
      }
      if(localStorage.getItem("mateImg")){
        this.mateImg = localStorage.getItem("mateImg");
        // window.console.log(this.mateImg);
      }
      if(localStorage.getItem("ButtonColorImg")){
        this.buttonColorImg = localStorage.getItem("ButtonColorImg");
        // window.console.log(this.buttonColorImg);
      }
      
       
     },
  methods:{
    next(){
        var step = 3;
        localStorage.setItem("step",step),
        

        this.$router.push({path: '/collection/step4'});
        
    },
    back(){
      this.$router.push({path: '/collection/step2'});
    },
     actMate(index,img){
        this.material = index,
        this.mateImg = img

        
     }
    
  },
  
  created:function () {
        this.$parent.headerB();
        this.$parent.footerB();
  }
 
}
</script>

<style lang="css" scoped>
    
</style>
