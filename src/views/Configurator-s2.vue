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
            <!-- Alba -->
            <div v-if="configurator.collection==0">
              <div class="container">
                <div class="row mt10">
                  <div class="col-xs-10 col-xs-offset-1">
                    <div class="col-xs-6 relative text-center">
                      <img v-if="configurator.material == 1" src="../assets/images/ybg.png" class="h350" alt="">
                      <img v-if="configurator.material == 2" src="../assets/images/mbf.png" class="h350" alt="">
                      <img v-if="configurator.material == 3" src="../assets/images/sf.png" class="h350" alt="">
                      <img v-if="configurator.material == 4" src="../assets/images/iws.png" class="h350" alt="">
                      <div class="button-img">
                         <img v-if="configurator.buttonColor == 1" src="../assets/images/button-b4.png" class="h350" alt="">
                         <img v-if="configurator.buttonColor == 2" src="../assets/images/button-w4.png" class="h350" alt="">
                      </div>
                     

                    </div>
                  <div class="col-xs-6 text-center">
                    <p class="font20 mb20">SELECT COLLECTION</p>
                    
                    <div class="row">
                      <p class="mb20">FRAME</p>
                      <div class="col-xs-12">
                        <div class="inlineb mr20" @click="actMate(1);" :class="configurator.material == 1 ? 'active':''" >
                          <img src="../assets/images/ybg.png" class="h50" alt="York black (Glass)" title="York black (Glass)">
                          <p class="name-mc">
                            York black (Glass)
                          </p>
                          
                        </div>
                        <div class="inlineb mr20" @click="actMate(2);" :class="configurator.material == 2 ? 'active':''" >
                          <img src="../assets/images/mbf.png" class="h50" alt="Mars Black" title="Mars Black">
                          <p class="name-mc">
                            Mars Black
                          </p>
                        </div>
                        <div class="inlineb mr20" @click="actMate(3);" :class="configurator.material == 3 ? 'active':''" >
                          <img src="../assets/images/sf.png" class="h50" alt="Silver" title="Silver">
                          <p class="name-mc">
                            Silver
                          </p>
                        </div>
                        <div class="inlineb" @click="actMate(4);" :class="configurator.material == 4 ? 'active':''" >
                          <img src="../assets/images/iws.png" class="h50" alt="Ice White Surface" title="Ice White Surface">
                          <p class="name-mc">
                            Ice White Surface
                          </p>
                        </div>
                        <div class="col-xs-12 mt30">
                          <hr class="gray ">
                        </div>
                        <div class="col-xs-12">
                          <p class="mb20 mt20">BUTTONS</p>
                          <div class="inlineb mr20" @click="actButton(1);" :class="configurator.buttonColor == 1 ? 'active':''" >
                            <img src="../assets/images/button-b4.png" class="h50" alt="York black (Glass)" title="York black (Glass)">
                            <p class="name-mc">
                              York black (Glass)
                            </p>
                          
                         </div>
                         <div class="inlineb" @click="actButton(2);" :class="configurator.buttonColor == 2 ? 'active':''" >
                            <img src="../assets/images/button-w4.png" class="h50" alt="Ice White Surface" title="Ice White Surface">
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
            </div><!-- Step 1 End -->


            <!-- Aria -->
            <div v-if="configurator.collection==1">
              <div class="container">
                <div class="row mt10">
                  <div class="col-xs-10 col-xs-offset-1">
                    <div class="col-xs-6 relative text-center">
                      <img v-if="configurator.material == 1" src="../assets/images/ybg.png" class="h350" alt="">
                      <img v-if="configurator.material == 2" src="../assets/images/mbf.png" class="h350" alt="">
                      <img v-if="configurator.material == 3" src="../assets/images/sf.png" class="h350" alt="">
                      <img v-if="configurator.material == 4" src="../assets/images/iws.png" class="h350" alt="">
                      <div class="button-img">
                         <img v-if="configurator.buttonColor == 1" src="../assets/images/button-b4.png" class="h350" alt="">
                         <img v-if="configurator.buttonColor == 2" src="../assets/images/button-w4.png" class="h350" alt="">
                      </div>
                     

                    </div>
                  <div class="col-xs-6 text-center">
                    <p class="font20 mb20">SELECT MATERIAL AND COLOR</p>
                    
                    <div class="row">
                      <p class="mb20">FRAME</p>
                      <div class="col-xs-12">
                        <div class="inlineb mr20" @click="actMate(1);" :class="configurator.material == 1 ? 'active':''" >
                          <img src="../assets/images/ybg.png" class="h50" alt="York black (Glass)" title="York black (Glass)">
                          <p class="name-mc">
                            York black (Glass)
                          </p>
                          
                        </div>
                        <div class="inlineb mr20" @click="actMate(2);" :class="configurator.material == 2 ? 'active':''" >
                          <img src="../assets/images/mbf.png" class="h50" alt="Mars Black" title="Mars Black">
                          <p class="name-mc">
                            Mars Black
                          </p>
                        </div>
                        <div class="inlineb mr20" @click="actMate(3);" :class="configurator.material == 3 ? 'active':''" >
                          <img src="../assets/images/sf.png" class="h50" alt="Silver" title="Silver">
                          <p class="name-mc">
                            Silver
                          </p>
                        </div>
                        <div class="inlineb" @click="actMate(4);" :class="configurator.material == 4 ? 'active':''" >
                          <img src="../assets/images/iws.png" class="h50" alt="Ice White Surface" title="Ice White Surface">
                          <p class="name-mc">
                            Ice White Surface
                          </p>
                        </div>
                        <div class="col-xs-12 mt30">
                          <hr class="gray ">
                        </div>
                     

                        
                      </div>
                        
                    </div>
                   
                  </div>
                </div>
                 
                </div>
              </div>
            </div><!-- -->
           
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
            
            
            configurator:{}
            
        }
      },
  
  mounted () {
    
      if(localStorage.getItem("configurator")){//在每一步都应加入次行代码，用于判断用户是否从第一步开始一直配置到当先这步
      
      this.configurator = JSON.parse(localStorage.getItem("configurator"))//若是，则取出configurator

       if(!this.configurator.material)this.configurator.material = 1;//若material为空值时，设置默认选项。
       if(!this.configurator.buttonColor)this.configurator.buttonColor = 1;//若buttonColor为空值时，设置默认选项。
       
      
    
      }else{
          this.$router.push({path: '/collection/step1'});//若不是，则跳到第一步开始
      }
       
     },
  methods:{
    next(){
      
        this.configurator.step = 2
        this.configurator.material = this.material
        this.configurator.buttonColor = this.buttonColor
        localStorage.setItem("configurator",JSON.stringify(this.configurator))//再放回去
        
    },
    back(){
      this.$router.push({path: '/collection/step1'});
    },
    
     actButton(index){
       this.configurator.buttonColor = index
     },

     actMate(index){
        this.configurator.material = index
        
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
