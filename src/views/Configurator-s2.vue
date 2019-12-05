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
                      <img  :src="selectedFrameImage" class="h350" alt="">

                      <div class="hold-img">
                         <img src="../assets/images/collection/alba/hold/YorkBlack-Button-Base.png" class="h350" alt="">
                      </div>
                      
                      <div class="button-img">
                         <img  :src="selectedButtonImage" class="h350" alt="">
                      </div>
                     

                    </div>
                  <div class="col-xs-6 text-center">
                    <p class="font20 mb20">SELECT COLLECTION</p>
                    
                    <div class="row">
                      <p class="mb20">FRAME</p>
                      <div class="col-xs-12">

                        <div v-for="(i,index) in frameData" :key="index" class="inlineb mr20" @click="changeFrame(index)" :class="frame==i.id? 'active':''" >
                          <img :src="i.img" class="h50" alt="York black (Glass)" title="York black (Glass)">
                          <p class="name-mc">
                            {{i.name}}
                          </p>
                          
                        </div>
                        
                        
                        
                        <div class="col-xs-12 mt30">
                          <hr class="gray ">
                        </div>
                        <div class="col-xs-12">
                          <p class="mb20 mt20">BUTTONS</p>

                          <div v-for="(i,index) in buttonData" :key="index" class="inlineb mr20" @click="changeButton(index)" :class="button== i.id ? 'active':''" >
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
import axios from "axios";

export default {
  name: 'addstep',
  data(){
        return {
          selectedFrameImage:"",
          selectedButtonImage:"",
            // items:[
            // {
            //   frame:{name:'York black (Glass)',img:require('../assets/images/collection/alba/frame/single/ybg.png')},
            //   buttonType:[{name:2,hole:'default'},{name:4,hole:'default'},{name:8,hole:'default'},{name:5,hole:'tt'},{name:1,hole:'socket'}],
            //   buttonColor:[{name:'York black (Glass)',img:require('../assets/images/collection/alba/button/black/button-b2.png')}]
              
            // },
            // {
            //   frame:{name:'Mars black (Metal)',img:require('../assets/images/collection/alba/frame/single/mbf.png')},
            //   buttonColor:[{name:'York black (Glass)',img:require('../assets/images/collection/alba/button/black/button-b2.png')}]
              
            // },
            // {
            //   frame:{name:'Siler (Metal)',img:require('../assets/images/collection/alba/frame/single/sf.png')},
            //   buttonColor:[{name:'York black (Glass)',img:require('../assets/images/collection/alba/button/black/button-b2.png')},
            //   {name:'Ice White (Glass)',img:require('../assets/images/collection/alba/button/white/button-w2.png')}]
            // },
            // {
            //   frame:{name:'Ice White (Glass)',img:require('../assets/images/collection/alba/frame/single/iws.png')},
            //   buttonColor:[{name:'Ice White (Glass)',img:require('../assets/images/collection/alba/button/white/button-w2.png')}]
            // }],
            frameData:[],
            buttonData:[],
            collection:{},
            frame:{},
            button:{},
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
      var step = localStorage.getItem("step")
      this.collection = localStorage.getItem("collection")
      this.frame = localStorage.getItem("frame")
      this.button = localStorage.getItem("button")

     if(step == null){
          this.$router.push({path: '/collection/step1'});
         }//若collection为空值时，设置默认选项。


      // if(localStorage.getItem("collection")){
      //   this.collection = localStorage.getItem("collection");

      // }

      // if(localStorage.getItem("frame") == null){
      //   this.frame =0
        
      // }else{
      //   this.frame = localStorage.getItem("frame");
      // }
      

      // if(localStorage.getItem("buttonColor") == null){
      //   this.buttonColor = 0;
      // }else{
      //   this.buttonColor = localStorage.getItem("buttonColor")
      // }

      axios// 读取frame数据
          .get('http://localhost:3000/step2/frames')
          .then(response =>
         {
             this.frameData = response.data 
             this.selectedFrameImage = response.data[this.frame-1].img 

         }).catch(function (error) { // 请求失败处理
            window.console.log(error);
          });

        axios// 读取button数据, 根据选中frame而定
          .get('http://localhost:3000/step2/buttons/'+this.frame)
          .then(response =>
         {
             this.buttonData = response.data
             this.selectedButtonImage = response.data[this.button-1].img  
            

         })
          .catch(function (error) { // 请求失败处理
            window.console.log(error);
          });



           

      
       
     },
  methods:{
    next(){
      
        localStorage.setItem("step",2),
        localStorage.setItem("buttonColor",this.buttonColor),
        localStorage.setItem("frame",this.frame),

        this.$router.push({path: '/collection/step3'});
        
    },
    back(){
      this.$router.push({path: '/collection/step1'});
    },
    changeFrame(index){
      this.frame = this.frameData[index].id
      this.selectedFrameImage = this.frameData[index].img
      axios
          .get('http://localhost:3000/step2/buttons/'+this.frame)
          .then(response =>
         {
             this.buttonData = response.data;
             this.selectedButtonImage = response.data[0].img
                 

         })
          .catch(function (error) { // 请求失败处理
          
            alert(error);
          });
    },
    changeButton(index){
      this.button = this.buttonData[index].id
      this.selectedButtonImage = this.buttonData[index].img
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
