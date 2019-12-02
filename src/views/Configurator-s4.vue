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
                  <p class="font20">SELECT FUNCTION</p>
                  <div class="col-xs-12 text-center mt30 inlineb mb30">
                    <div class="inlineb p10 w100" v-viewer>
                      <div class="text-center">
                          <img :src="albaImages.frame[format][frame]"  class="h350" alt="" title="">
                       </div>
                    </div>
                    <div class="button-img">
                      <div>
                        <img :src="albaImages.button[buttonColor][buttonType]" class="h350" alt="">
                        <img v-if="format" :src="albaImages.button[buttonColor][buttonType2]" class="h350" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-4 text-center" :class="format == 0 ? 'col-xs-offset-4':'col-xs-offset-2'">
                    <i class="el-icon-arrow-left click font25 left" @click=" buttonType > 0  ? buttonType-- : ''"></i>
                      <div class="inlineb active prl7" v-if="buttonType == 0">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          2 keys
                        </p>
                      </div>
                      <div class="inlineb active prl7" v-if="buttonType == 1">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          4 keys
                        </p>
                      </div>
                      <div class="inlineb active prl7" v-if="buttonType == 2">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          5 keys
                        </p>
                      </div>
                      <div class="inlineb active prl7" v-if="buttonType == 3">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          8 keys
                        </p>
                      </div>
                    <i class="el-icon-arrow-right click font25 right" @click=" buttonType < 3 ? buttonType++ :''"></i>
                   
                  
                  </div>
                  <div class="col-xs-4 text-center" v-if="format == 1">
                     <i class="el-icon-arrow-left click font25 left" @click=" buttonType2 > 0  ? buttonType2 -- : ''"></i>
                      <div class="inlineb active prl7" v-if="buttonType2 == 0">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          2 keys
                        </p>
                      </div>
                      <div class="inlineb active prl7" v-if="buttonType2 == 1">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          4 keys
                        </p>
                      </div>
                      <div class="inlineb active prl7" v-if="buttonType2 == 2">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          5 keys
                        </p>
                      </div>
                      <div class="inlineb active prl7" v-if="buttonType2 == 3">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          8 keys
                        </p>
                      </div>
                    <i class="el-icon-arrow-right click font25 right" @click=" buttonType2 < 3 ? buttonType2 ++ :''"></i>

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
            frame:{},
            buttonColor:{},
            buttonType:{},//本页配置项
            buttonType2:{},//本页配置项
            albaImages:{
              'frame':[
                  [//single
              require('../assets/images/collection/alba/frame/single/ybg.png'),
              require('../assets/images/collection/alba/frame/single/mbf.png'),
              require('../assets/images/collection/alba/frame/single/sf.png'),
              require('../assets/images/collection/alba/frame/single/iws.png')
              ],
                  [//double
              require('../assets/images/collection/alba/frame/double/ybg2.png'),
              require('../assets/images/collection/alba/frame/double/mbf2.png'),
              require('../assets/images/collection/alba/frame/double/sf2.png'),
              require('../assets/images/collection/alba/frame/double/iws2.png')


                  ]
                ],
               "button":[
                  [//black
              
              require('../assets/images/collection/alba/button/black/button-b2.png'),
              require('../assets/images/collection/alba/button/black/button-b4.png'),
              require('../assets/images/collection/alba/button/black/button-b5.png'),
              require('../assets/images/collection/alba/button/black/button-b8.png')

             
            ],
                 [//white
              require('../assets/images/collection/alba/button/white/button-w2.png'),
              require('../assets/images/collection/alba/button/white/button-w4.png'),
              require('../assets/images/collection/alba/button/white/button-w5.png'),
              require('../assets/images/collection/alba/button/white/button-w8.png')
                 ]
                ]

              
            }
            

            
        }
      },
  
  mounted () {
     if(localStorage.getItem("step") == null){
          this.$router.push({path: '/collection/step1'});
         }//若collection为空值时，设置默认选项。
      if(localStorage.getItem("collection")){
        this.collection = localStorage.getItem("collection");
      }
      if(localStorage.getItem("frame")){
        this.frame = localStorage.getItem("frame");
      }
      if(localStorage.getItem("format")){
        this.format = localStorage.getItem("format");
      }else{
         this.format = 0
        }

      if(localStorage.getItem("buttonType")){
        this.buttonType = localStorage.getItem("buttonType");
      }else{
         this.buttonType = 0
        }
      if(localStorage.getItem("buttonType2")){
        this.buttonType2 = localStorage.getItem("buttonType2");
      }else if(localStorage.getItem("format") == 1){
        this.buttonType2 = 0
      }

       if(localStorage.getItem("buttonColor")){
        this.buttonColor = localStorage.getItem("buttonColor");
      }
      window.console.log(this.albaImages.frame[0])
      
       
     },
  methods:{
    next(){
        var step = 4;
        localStorage.setItem("step",step),
        localStorage.setItem("buttonType",this.buttonType),
        localStorage.setItem("buttonType2",this.buttonType2),
        this.$router.push({path: '/collection/step5'});
        
    },
    back(){
      this.$router.push({path: '/collection/step3'});
    },
     actMate(index){
        this.material = index
     },
     actButtontype(index){
       this.buttonType = index
     },
     
    
  },
  
  created:function () {
        this.$parent.headerB();
        this.$parent.footerB();
  }
 
}
</script>

<style lang="css" scoped>
    
</style>
