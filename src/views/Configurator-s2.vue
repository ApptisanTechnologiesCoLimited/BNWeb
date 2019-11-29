<template>
  <div id="addstep">
    <div class="bg-gray">
      <ol class="breadcrumb">
          <li class="black">1. Collection</li>
          <li class="orange">2. Materials</li>
          <li class="gray-w">3. Materials</li>
          <li class="gray-w">4. Materials</li>
          <li class="gray-w">5. Materials</li>
          <li class="gray-w">6. Materials</li>
          <li class="gray-w">7. Materials</li>
          <li class="gray-w">8. Materials</li>
          <span class="font16 black click pull-right">✕</span>
        </ol>
           
      </div>
       
        <div class="content middle collect" >
          <div class="cell">
            <!-- Step 1 Start -->
            <div v-if="active == 1">
              <div class="container">
                <div class="row mt10">
                  <div class="col-xs-10 col-xs-offset-1">
                    <div class="col-xs-6 relative text-center">
                      <img v-if="material == 1" src="../assets/images/ybg.png" class="h350" alt="">
                      <img v-if="material == 2" src="../assets/images/mbf.png" class="h350" alt="">
                      <img v-if="material == 3" src="../assets/images/sf.png" class="h350" alt="">
                      <img v-if="material == 4" src="../assets/images/iws.png" class="h350" alt="">
                      <div class="button-img">
                         <img v-if="buttonColor == 1" src="../assets/images/button-b4.png" class="h350" alt="">
                         <img v-if="buttonColor == 2" src="../assets/images/button-w4.png" class="h350" alt="">
                      </div>
                     

                    </div>
                  <div class="col-xs-6 text-center">
                    <p class="font20 mb20">SELECT COLLECTION</p>
                    
                    <div class="row">
                      <p class="mb20">FRAME</p>
                      <div class="col-xs-12">
                        <div class="inlineb mr20" @click="actMate(1);" :class="material == 1 ? 'active':''" >
                          <img src="../assets/images/ybg.png" class="h50" alt="York black (Glass)" title="York black (Glass)">
                          <p class="name-mc">
                            York black (Glass)
                          </p>
                          
                        </div>
                        <div class="inlineb mr20" @click="actMate(2);" :class="material == 2 ? 'active':''" >
                          <img src="../assets/images/mbf.png" class="h50" alt="Mars Black" title="Mars Black">
                          <p class="name-mc">
                            Mars Black
                          </p>
                        </div>
                        <div class="inlineb mr20" @click="actMate(3);" :class="material == 3 ? 'active':''" >
                          <img src="../assets/images/sf.png" class="h50" alt="Silver" title="Silver">
                          <p class="name-mc">
                            Silver
                          </p>
                        </div>
                        <div class="inlineb" @click="actMate(4);" :class="material == 4 ? 'active':''" >
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
                          <div class="inlineb mr20" @click="actButton(1);" :class="buttonColor == 1 ? 'active':''" >
                            <img src="../assets/images/button-b4.png" class="h50" alt="York black (Glass)" title="York black (Glass)">
                            <p class="name-mc">
                              York black (Glass)
                            </p>
                          
                         </div>
                         <div class="inlineb" @click="actButton(2);" :class="buttonColor == 2 ? 'active':''" >
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
           
          </div>
         
          
        </div>
        
        <div class="container">
          <hr class="gray">
          <div class="row">
          <div class="col-xs-4 click" @click="back()"><i class="el-icon-d-arrow-left"></i> BACK</div>
            <div class="col-xs-4 text-center click" @click="save()">SAVE THE ARTWORK</div>
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
            format:1,
            material:1,
            active: 1,
            buttonColor:1
            
        }
      },
  
  mounted () {
      
       
     },
  methods:{
    next(){
      alert(12);
      var configurator = {
        "format":this.format,
        "material":this.material,
        "buttonColor":this.buttonColor
      }
        localStorage.setItem("configurator",JSON.stringify(configurator))
        // 读取 var configurator = JSON.parse(localStorage.getItem("configurator"))
        // 再保存 configurator.material = "black"; localStorage.setItem("configurator",JSON.stringify(configurator))
        // this.$router.push({path: '/collection/step3'});
    },
    back(){
      this.$router.push({path: '/collection/step1'});
    },
    
     actButton(index){
       this.buttonColor = index
     },

     actMate(index){
        this.material = index
        // alert(this.activeClass);
        
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
