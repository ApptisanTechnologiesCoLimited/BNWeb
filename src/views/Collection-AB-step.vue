<template>
  <div id="addproduct">
    <div class="bg-gray">
      <el-steps :active="active" finish-status="success" simple>
         
          <el-step title="1. Materials"></el-step>
          <el-step title="2. Format"></el-step>
          <el-step title="3. Function"></el-step>
          <el-step title="4. Engraving"></el-step>
          <el-step title="5. Backlights"></el-step>
          <el-step title="6. Details"></el-step>
          
        </el-steps>
           
      </div>
       
        <div class="content middle collect" >
          <div class="cell">
            <div id="step2" v-if="active == 0">
              <div class="container">
                <div class="row mt10">
                  <div class="col-xs-10 col-xs-offset-1">
                    <div class="col-xs-6 relative">
                      <img v-if="material == 1" src="../assets/images/ybg.png" class="h350" alt="">
                      <img v-if="material == 2" src="../assets/images/mbf.png" class="h350" alt="">
                      <img v-if="material == 3" src="../assets/images/sf.png" class="h350" alt="">
                      <img v-if="material == 4" src="../assets/images/iws.png" class="h350" alt="">
                      <img v-if="buttonC == 1" src="../assets/images/yb1.png" class="h350 button-img" alt="">
                      <img v-if="buttonC == 2" src="../assets/images/iw1.png" class="h350 button-img" alt="">

                    </div>
                  <div class="col-xs-6 text-center">
                    <p class="font20 mb20">SELECT COLLECTION</p>
                    
                    <div class="row">
                      <p class="mb20">FRAME</p>
                      <div class="col-xs-12">
                        <div class="inlineb mr20" @click="act2(1);" :class="material == 1 ? 'active':''" >
                          <img src="../assets/images/ybg.png" class="h50" alt="York black (Glass)" title="York black (Glass)">
                          <p class="name-mc">
                            York black (Glass)
                          </p>
                          
                        </div>
                        <div class="inlineb mr20" @click="act2(2);" :class="material == 2 ? 'active':''" >
                          <img src="../assets/images/mbf.png" class="h50" alt="Mars Black" title="Mars Black">
                          <p class="name-mc">
                            Mars Black
                          </p>
                        </div>
                        <div class="inlineb mr20" @click="act2(3);" :class="material == 3 ? 'active':''" >
                          <img src="../assets/images/sf.png" class="h50" alt="Silver" title="Silver">
                          <p class="name-mc">
                            Silver
                          </p>
                        </div>
                        <div class="inlineb" @click="act2(4);" :class="material == 4 ? 'active':''" >
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
                          <div class="inlineb mr20" @click="actButton(1);" :class="buttonC == 1 ? 'active':''" >
                            <img src="../assets/images/yb1.png" class="h50" alt="York black (Glass)" title="York black (Glass)">
                            <p class="name-mc">
                              York black (Glass)
                            </p>
                          
                         </div>
                         <div class="inlineb" @click="actButton(2);" :class="buttonC == 2 ? 'active':''" >
                            <img src="../assets/images/iw1.png" class="h50" alt="Ice White Surface" title="Ice White Surface">
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
            </div>
             
          </div>
         
          
        </div>
        
        <div class="container">
          <hr class="gray">
          <div class="row">
          <div class="col-xs-4 click" @click="back()"><i class="el-icon-d-arrow-left"></i> BACK</div>
          <div class="col-xs-4 text-center click" @click="save()">SAVE THE ARTWORK</div>
          <div class="col-xs-4 text-right click" @click="next()">NEXT <i class="el-icon-d-arrow-right"></i></div>
        </div>
        </div>
        
  </div>
</template>

<script>
import "../assets/css/project.css";
// import axios from "axios";
export default {
  name: 'addproduct',
  data(){
        return {
            artworkList:{},
            current:{},
            artwork_query: '',
            format:1,
            material:1,
            product_quantity:0,
            active: 0,
            buttonC:1

            
        }
      },
  
  mounted () {
      
       
     },
  methods:{
     next() {
        if (this.active++ > 5) 
        this.active = 5;
      },
      back(){
        if (this.active -- > 5) this.active = 0;
      },
      save(){},
     act(index){
        this.format = index
        // alert(this.activeClass);
        
     },
     actButton(index){
       this.buttonC = index
     },

     act2(index){
        this.material = index
        // alert(this.activeClass);
        
     }
    
  },
 
}
</script>

<style>
</style>
