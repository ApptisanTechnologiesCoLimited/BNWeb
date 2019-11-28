<template>
  <div id="addstep">
    <div class="bg-gray">
      <el-steps :active="2" finish-status="success" simple>
         
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
            <div v-if="active == 0">
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
            </div>
            <div v-if="active == 1">
              <div class="container">
                <div class="row">
                  <p class="font20">SELECT FORMAT</p>
                  <div class="col-xs-12 text-center mt30 inlineb">
                     
                      <div class="inlineb p10 w100" v-viewer>
                        <div class="text-center" v-if="material==1">
                          <img src="../assets/images/ybg.png" v-if="format == 1 || format == 2" class="h350" alt="York black (Glass)" title="York black (Glass)">
                          <img src="../assets/images/ybg.png" v-if="format == 2" class="h350" alt="York black (Glass)" title="York black (Glass)">
                        </div>
                        <div class="text-center" v-if="material==2">
                          <img src="../assets/images/mbf.png" v-if="format == 1 || format == 2" class="h350" alt="York black (Glass)" title="York black (Glass)">
                          <img src="../assets/images/mbf.png" v-if="format == 2" class="h350" alt="York black (Glass)" title="York black (Glass)">
                        </div>
                         <div class="text-center" v-if="material==3">
                          <img src="../assets/images/sf.png" v-if="format == 1 || format == 2" class="h350" alt="York black (Glass)" title="York black (Glass)">
                          <img src="../assets/images/sf.png" v-if="format == 2" class="h350" alt="York black (Glass)" title="York black (Glass)">
                        </div>
                         <div class="text-center" v-if="material==4">
                          <img src="../assets/images/iws.png" v-if="format == 1 || format == 2" class="h350" alt="York black (Glass)" title="York black (Glass)">
                          <img src="../assets/images/iws.png" v-if="format == 2" class="h350" alt="York black (Glass)" title="York black (Glass)">
                        </div>
                          <div class="button-img">
                            <div v-if="buttonColor == 1">
                              <img v-if="format == 1 || format == 2" src="../assets/images/button-b4.png" class="h350" alt="">
                              <img v-if="format == 2 " src="../assets/images/button-b4.png" class="h350" alt="">
                            </div>
                            <div v-if="buttonColor == 2">
                              <img v-if="format == 1 || format == 2" src="../assets/images/button-w4.png" class="h350" alt="">
                              <img v-if="format == 2 " src="../assets/images/button-w4.png" class="h350" alt="">
                            </div>
                            
                          </div>
                      </div>
                      <!-- <p>Click to zoom</p> -->
                      
                      
                    </div>
                    <div class="col-xs-4 col-xs-offset-4 text-center mt30">
                        
                        <div class="mr20 inlineb" @click="act(1);" :class="format == 1 ? 'active':''">
                          <div class="border inlineb">
                            <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                          </div>
                          <p class="name-f">
                            One Frame
                          </p>
                        </div>
                        <div class="mr20 inlineb" @click="act(2);" :class="format == 2 ? 'active':''">
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
            <div v-if="active == 2">
              <div class="container">
                <div class="row">
                  <p class="font20">SELECT FUNCTION</p>
                  <div class="col-xs-12 text-center mt30 inlineb mb30">
                    <div class="inlineb p10 w100" v-viewer>
                      <div class="text-center" v-if="material==1">
                          <img src="../assets/images/ybg.png" v-if="format == 1 || format == 2" class="h350" alt="York black (Glass)" title="York black (Glass)">
                          <img src="../assets/images/ybg.png" v-if="format == 2" class="h350" alt="York black (Glass)" title="York black (Glass)">
                       </div>
                    </div>
                    <div class="button-img">
                      <div v-if="buttonColor == 1">
                        <div v-if="format == 1">
                          <img v-if="buttonType == 1" :src="bTypeImg.buttonB2" class="h350" alt="">
                          <img v-if="buttonType == 2" :src="bTypeImg.buttonB4" class="h350" alt="">
                          <img v-if="buttonType == 3" :src="bTypeImg.buttonB5" class="h350" alt="">
                          <img v-if="buttonType == 4" :src="bTypeImg.buttonB8" class="h350" alt="">
                        </div>
                        
                        
                      </div>
                      <div v-if="buttonColor == 2">
                        <div v-if="format == 1">
                          <img v-if="buttonType == 1" :src="bTypeImg.buttonW2" class="h350" alt="">
                          <img v-if="buttonType == 2" :src="bTypeImg.buttonW4" class="h350" alt="">
                          <img v-if="buttonType == 3" :src="bTypeImg.buttonW5" class="h350" alt="">
                          <img v-if="buttonType == 4" :src="bTypeImg.buttonW8" class="h350" alt="">
                        </div>
                        
                        
                      </div>
                     
                      
                    </div>
                  </div>
                  <div class="col-xs-4 text-center" :class="format == 1 ? 'col-xs-offset-4':'col-xs-offset-2'">
                     <div class="inlineb mr20" @click="actButtontype(1);" :class="buttonType == 1 ? 'active':''">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          2 keys
                        </p>
                      </div>
                      <div class="inlineb mr20" @click="actButtontype(2);" :class="buttonType == 2 ? 'active':''">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          4 keys
                        </p>
                      </div>
                      <div class="inlineb mr20" @click="actButtontype(3);" :class="buttonType == 3 ? 'active':''">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          5 keys
                        </p>
                      </div>
                       <div class="inlineb" @click="actButtontype(4);" :class="buttonType == 4 ? 'active':''">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                          8 keys
                        </p>
                      </div>
                   
                  </div>
                  <div class="col-xs-4 text-center" v-if="format == 1">
                    
                  </div>

                </div>
              </div>

            </div>
             
          </div>
         
          
        </div>
        
        <!-- <div class="container">
          <hr class="gray">
          <div class="row">
          <div class="col-xs-4 click" @click="back()"><i class="el-icon-d-arrow-left"></i> BACK</div>
          <div class="col-xs-4 text-center click" @click="save()">SAVE THE ARTWORK</div>
          <div class="col-xs-4 text-right click" @click="next()">NEXT <i class="el-icon-d-arrow-right"></i></div>
        </div>
        </div> -->
        <div class="button-back click white" v-if="active !== 0 " @click="back()"><i class="el-icon-d-arrow-left"></i> BACK</div>
        <router-link :to="'/collection-ab/'" class="button-back click white" v-if="active == 0 "><i class="el-icon-d-arrow-left"></i> BACK</router-link>
        <div class="button-next click orange" @click="next()">NEXT <i class="el-icon-d-arrow-right"></i></div>
        
  </div>
</template>

<script>
import "../assets/css/project.css";
// import axios from "axios";
export default {
  name: 'addstep',
  data(){
        return {
            artworkList:{},
            current:{},
            artwork_query: '',
            format:1,
            material:1,
            product_quantity:0,
            active: 2,
            buttonColor:1,
            buttonType:1,
            listData: [1, 2, 3, 4, 5, 6, 7, 8],
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
       this.buttonColor = index
     },

     act2(index){
        this.material = index
        // alert(this.activeClass);
        
     },
     actButtontype(index){
       this.buttonType = index
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
