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
                      <img  :src="frameImage" class="h350" alt="">

                      <div class="hold-img">
                         <img :src="holeImage" class="h350" alt="">
                      </div> 
                      
                      <div class="button-img">
                         <img  :src="buttonImage" class="h350" alt="">
                      </div>
                     

                    </div>
                  <div class="col-xs-6 text-center">
                    <p class="font20 mb20">SELECT COLLECTION</p>
                    
                    <div class="row">
                      <p class="mb20">FRAME</p>
                      <div class="col-xs-12">

                        <div v-for="(i,index) in frameControl" :key="index" class="inlineb mr20" @click="changeFrame(i.id)" :class="i.id==frame? 'active':''" >
                          <img :src="i.img[0]" class="h50" alt="York black (Glass)" title="York black (Glass)">
                          <p class="name-mc">
                            {{i.name}}
                          </p>
                          
                        </div>
                        
                        
                        
                        <div class="col-xs-12 mt30">
                          <hr class="gray ">
                        </div>
                        <div class="col-xs-12">
                          <p class="mb20 mt20">BUTTONS</p>

                          <div v-for="(i,index) in buttonControl" :key="index" class="inlineb mr20" @click="changeButton(i.id)" :class="i.id == button ? 'active':''" >
                            <img :src="i.img" class="h50" alt="York black (Glass)" title="York black (Glass)">
                            <p class="name-mc">
                              {{i.name}}
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
                      <img :src="frameImages[1][frame]" class="h350" alt="">

                    </div>
                  <div class="col-xs-6 text-center">
                    <p class="font20 mb20">SELECT MATERIAL AND COLOR</p>
                    
                    <div class="row mt15p">
                      <p class="mb20">Surface</p>
                      <div class="col-xs-12">
                        <div class="inlineb mr20" @click="frame=0" :class="frame == 4 ? 'active':''" >
                          <img :src="frameImages[1][0]"  class="h50" alt="York black (Glass)" title="York black (Glass)">
                          <p class="name-mc">
                            York black (Glass)
                          </p>
                          
                        </div>
                        <div class="inlineb mr20" @click="frame=1" :class="frame == 5 ? 'active':''" >
                          <img :src="frameImages[1][1]"  class="h50" alt="Mars Black" title="Mars Black">
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
//import axios from "axios";

export default {
  name: 'addstep',
  data(){
        return {
          frameData:[
              {id:1,name:'York black (Glass)',buttonColor:[1],img:[require('../assets/images/collection/alba/frame/single/ybg.png'),require('../assets/images/collection/alba/frame/double/ybg2.png')]},
              {id:2,name:'Mars black (Metal)',buttonColor:[1],img:[require('../assets/images/collection/alba/frame/single/mbf.png'),require('../assets/images/collection/alba/frame/double/mbf2.png')]},
              {id:3,name:'Siler (Metal)',buttonColor:[1,2],img:[require('../assets/images/collection/alba/frame/single/sf.png'),require('../assets/images/collection/alba/frame/double/sf2.png')]},
              {id:4,name:'Ice White (Glass)',buttonColor:[2],img:[require('../assets/images/collection/alba/frame/single/iws.png'),require('../assets/images/collection/alba/frame/double/iws2.png')]},
            

            ],
            buttonData:[
              {id:1,name:'York black (Glass)',img:'images/collection/alba/button/black/button-b2.png'},
               {id:2,name:'Ice White (Glass)',img:'images/collection/alba/button/white/button-w2.png'}
            ],
            holeData:[
               {id:1,name:'York Black',img:require('../assets/images/collection/alba/hole/YorkBlack-Button-Base.png')},
               {id:2,name:'Mars black',img:require('../assets/images/collection/alba/hole/MarsBlack-Button-Base.png')},
              {id:3,name:'Silver black',img:require('../assets/images/collection/alba/hole/SilverBlack-Button-Base.png')},
              {id:4,name:'Silver white',img:require('../assets/images/collection/alba/hole/SilverWhite-Button-Base.png')},
               {id:5,name:'Ice White',img:require('../assets/images/collection/alba/hole/IceWhite-Button-Base.png')}

              
            ],
            collection:0,
            frame: 1,
            button:1
            

            
        }
      },
  
  mounted () {
      var step = localStorage.getItem("step")
      this.collection = localStorage.getItem("collection")
      this.frame = localStorage.getItem("frame")
      this.button = localStorage.getItem("button")
      

     if(step == null){
          this.$router.push({path: '/collection/step1'});
         }//若collection为空值时，设置默认选项。

           

   
     },
  methods:{
    next(){
      
        localStorage.setItem("step",2),
        localStorage.setItem("button",this.button),
        localStorage.setItem("frame",this.frame),

        this.$router.push({path: '/collection/step3'});
        
    },
    back(){
      this.$router.push({path: '/collection/step1'});
    },
    changeFrame(fid){
      this.frame = fid
      var frame = this.frameData.find(f => f.id == this.frame)
      this.button = frame.buttonColor[0]
     
   
      
    },
    changeButton(bid){
      this.button = bid
      
    },  
  }, 
  created:function () {
        this.$parent.headerB();
        this.$parent.footerB();
  },
  computed:{
    frameImage:function(){
      return this.frameData.find(f => f.id == this.frame).img[0];
    },
    buttonImage: function(){

      return this.buttonData.find(b => b.id == this.button).img
    },
    holeImage: function(){
      
      var hole =1;
      if(this.frame == 1 && this.button == 1)hole =1;
      else if(this.frame == 2 && this.button == 1)hole=2;
      else if (this.frame == 3 && this.button == 1)hole=3;
      else if(this.frame == 3 && this.button == 2)hole=4;
      else if(this.frame == 4 && this.button == 2)hole=5;

      for(var i=0;i<this.holeData.length;i++){
        if(this.holeData[i].id == hole)return this.holeData[i].img
      }
      return null;

    
    },
    frameControl: function(){
      return this.frameData;
    },
    buttonControl: function(){
        var resultButton =[]
      var frame = this.frameData.find(f => f.id == this.frame)
      

      for(var i=0;i<frame.buttonColor.length;i++){
  
        var buttonColor = frame.buttonColor[i];

        for(var j=0;j<this.buttonData.length;j++){
          if(buttonColor == this.buttonData[j].id)
          resultButton.push(this.buttonData[j]);
        }

      }

          

      return resultButton
    }
  }
 
}
</script>

<style lang="css" scoped>
    
</style>
