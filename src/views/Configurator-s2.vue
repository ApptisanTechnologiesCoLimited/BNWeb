<template>
  <div id="addstep">
    <div class="bg-gray">
      <ol class="breadcrumb">
          <li class="black">1. Collection</li>
          <li class="orange">2. Materials</li>
          <li class="gray-w">3. Frame</li>
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
                <div class="row mt10">
                  <div class="col-xs-10 col-xs-offset-1">
                    <div class="col-xs-6 relative text-center">
                      <img v-if="material == 1" :src="frameImg.frame1" class="h350" alt="">
                      <img v-if="material == 2" :src="frameImg.frame2" class="h350" alt="">
                      <img v-if="material == 3" :src="frameImg.frame3" class="h350" alt="">
                      <img v-if="material == 4" :src="frameImg.frame4" class="h350" alt="">
                      <div class="button-img">
                         <img v-if="buttonColor == 1" :src="bTypeImg.buttonB4" class="h350" alt="">
                         <img v-if="buttonColor == 2" :src="bTypeImg.buttonW4" class="h350" alt="">
                      </div>
                     

                    </div>
                  <div class="col-xs-6 text-center">
                    <p class="font20 mb20">SELECT COLLECTION</p>
                    
                    <div class="row">
                      <p class="mb20">FRAME</p>
                      <div class="col-xs-12">
                        <div class="inlineb mr20" @click="actMate(1,'/img/ybg.png');" :class="material == 1 ? 'active':''" >
                          <img :src="frameImg.frame1" class="h50" alt="York black (Glass)" title="York black (Glass)">
                          <p class="name-mc">
                            York black (Glass)
                          </p>
                          
                        </div>
                        <div class="inlineb mr20" @click="actMate(2,'/img/mbf.png');" :class="material == 2 ? 'active':''" >
                          <img :src="frameImg.frame2" class="h50" alt="Mars Black" title="Mars Black">
                          <p class="name-mc">
                            Mars Black
                          </p>
                        </div>
                        <div class="inlineb mr20" @click="actMate(3,'/img/sf.png');" :class="material == 3 ? 'active':''" >
                          <img :src="frameImg.frame3" class="h50" alt="Silver" title="Silver">
                          <p class="name-mc">
                            Silver
                          </p>
                        </div>
                        <div class="inlineb" @click="actMate(4,'/img/iws.png');" :class="material == 4 ? 'active':''" >
                          <img :src="frameImg.frame4" class="h50" alt="Ice White Surface" title="Ice White Surface">
                          <p class="name-mc">
                            Ice White Surface
                          </p>
                        </div>
                        <div class="col-xs-12 mt30">
                          <hr class="gray ">
                        </div>
                        <div class="col-xs-12">
                          <p class="mb20 mt20">BUTTONS</p>
                          <div class="inlineb mr20" @click="actButton(1,'/img/button-b4.png');" :class="buttonColor == 1 ? 'active':''" >
                            <img :src="bTypeImg.buttonB4" class="h50" alt="York black (Glass)" title="York black (Glass)">
                            <p class="name-mc">
                              York black (Glass)
                            </p>
                          
                         </div>
                         <div class="inlineb" @click="actButton(2,'/img/button-w4.png');" :class="buttonColor == 2 ? 'active':''" >
                            <img :src="bTypeImg.buttonW4" class="h50" alt="Ice White Surface" title="Ice White Surface">
                            <p class="name-mc">
                              Ice White Surface
                            </p>
                          
                         </div>

                        </div>

                        
                      </div>
                        
                    </div>
                   
                  </div>
                </div>
                 
                </div>
              </div>
            </div><!-- Alba End -->


            <!-- Aria Start -->
            <div v-if="collection==1">
              <div class="container">
                <div class="row mt10">
                  <div class="col-xs-10 col-xs-offset-1">
                    <div class="col-xs-6 relative text-center">
                      <img v-if="material == 1" :src="frameImg.frame1" class="h350" alt="">
                      <img v-if="material == 2" :src="frameImg.frame4" class="h350" alt="">

                    </div>
                  <div class="col-xs-6 text-center">
                    <p class="font20 mb20">SELECT MATERIAL AND COLOR</p>
                    
                    <div class="row mt15p">
                      <p class="mb20">Surface</p>
                      <div class="col-xs-12">
                        <div class="inlineb mr20" @click="actMate(1,'/img/ybg.png');" :class="material == 1 ? 'active':''" >
                          <img :src="frameImg.frame1"  class="h50" alt="York black (Glass)" title="York black (Glass)">
                          <p class="name-mc">
                            York black (Glass)
                          </p>
                          
                        </div>
                        <div class="inlineb mr20" @click="actMate(2,'/img/images/iws.png');" :class="material == 2 ? 'active':''" >
                          <img :src="frameImg.frame4"  class="h50" alt="Mars Black" title="Mars Black">
                          <p class="name-mc">
                            Ice White (Glass)
                          </p>
                        </div>
                
                     

                        
                      </div>
                        
                    </div>
                   
                  </div>
                </div>
                 
                </div>
              </div>
            </div><!-- Aria End-->
           
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
            
            collection:{},
            material:{},
            buttonColor:{},
            mateImg:{},
            buttonImg:{},
            frameImg:{
              'frame1':require('../assets/images/ybg.png'),
              'frame2':require('../assets/images/mbf.png'),
              'frame3':require('../assets/images/sf.png'),
              'frame4':require('../assets/images/iws.png')
            },
            bTypeImg:{
              'buttonW2':require('../assets/images/button-w2.png'),
              'buttonW4':require('../assets/images/button-w4.png'),
              'buttonW5':require('../assets/images/button-w5.png'),
              'buttonW8':require('../assets/images/button-w8.png'),
              'buttonB2':require('../assets/images/button-b2.png'),
              'buttonB4':require('../assets/images/button-b4.png'),
              'buttonB5':require('../assets/images/button-b5.png'),
              'buttonB8':require('../assets/images/button-b8.png')
            },

            
        }
      },
  
  mounted () {
     if(localStorage.getItem("step") == null){
          this.$router.push({path: '/collection/step1'});
         }//若collection为空值时，设置默认选项。

      if(localStorage.getItem("material") == null){
        this.material = 1;
      }else{
        this.material = localStorage.getItem("material");
      }
      if(localStorage.getItem("buttonColor") == null){
        this.buttonColor = 1;
      }else{
        this.buttonColor = localStorage.getItem("buttonColor")
      }
      if(localStorage.getItem("collection")){
        this.collection = localStorage.getItem("collection");
      }
      if(localStorage.getItem("mateImg")){
        this.mateImg = localStorage.getItem("mateImg")
      }
      if(localStorage.getItem("ButtonColorImg")){
        this.buttonImg = localStorage.getItem("ButtonColorImg")
      }
       
     },
  methods:{
    next(){
        var step = 2;
        var materialL = this.material;
        var buttonColorL = this.buttonColor;
        var imgMate = this.mateImg;
        var imgButton = this.buttonImg;
        localStorage.setItem("step",step),
        localStorage.setItem("buttonColor",buttonColorL),
        localStorage.setItem("material",materialL),
        localStorage.setItem("mateImg",imgMate),
        localStorage.setItem("ButtonColorImg",imgButton)

        this.$router.push({path: '/collection/step3'});
        
    },
    back(){
      this.$router.push({path: '/collection/step1'});
    },
    
     actButton(index,img){
       this.buttonColor = index,
       this.buttonImg = img

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
