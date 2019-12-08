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
      
        </ol>

      </div>

        <div class="content middle collect" >
          <div class="cell">
            <!-- Alba Start -->
            <div v-if="1">
              <div class="container">
                <div class="row">
                  <p class="font20">SELECT FORMAT</p>
                  <div class="col-xs-12 text-center mt30 inlineb">

                      <div class="inlineb p10 w100">
                        <div class="text-center">
                          <img :src="frameImage"  class="h350" alt="" title="">
                        </div>

                      <div class="hold-img">
                         <img :src="holeImage" class="h350" alt="">
                         <img v-if="smartSwitch.format=='double'" :src="rightHoleImage" class="h350" alt="">

                      </div>

                          <div class="button-img">
                            <div>
                              <img :src="buttonImage" class="h350" alt="">
                              <img v-if="smartSwitch.format=='double'" :src="rightButtonImage" class="h350" alt="">

                            </div>



                          </div>
                      </div>
                      <!-- <p>Click to zoom</p> -->


                    </div>
                    <div class="col-xs-4 col-xs-offset-4 text-center mt30">

                        <div class="mr20 inlineb" @click="smartSwitch.format='single'" :class="smartSwitch.format == 'single' ? 'active':''">
                          <div class="border inlineb">
                            <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                          </div>
                          <p class="name-f">
                            Single Frame
                          </p>
                        </div>
                        <div class="mr20 inlineb" @click="smartSwitch.format='double'" :class="smartSwitch.format == 'double' ? 'active':''">
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

           smartSwitch:null,
            frameData:{
              single:[
              {id:1,name:'York black (Glass)',buttonColor:[1],img:require('../assets/images/collection/alba/frame/single/ybg.png')},
              {id:2,name:'Mars black (Metal)',buttonColor:[1],img:require('../assets/images/collection/alba/frame/single/mbf.png')},
              {id:3,name:'Siler (Metal)',buttonColor:[1,2],img:require('../assets/images/collection/alba/frame/single/sf.png')},
              {id:4,name:'Ice White (Glass)',buttonColor:[2],img:require('../assets/images/collection/alba/frame/single/iws.png')},
              ],
              double:[
              {id:1,name:'York black (Glass)',buttonColor:[1],img:require('../assets/images/collection/alba/frame/double/ybg2.png')},
              {id:2,name:'Mars black (Metal)',buttonColor:[1],img:require('../assets/images/collection/alba/frame/double/mbf2.png')},
              {id:3,name:'Siler (Metal)',buttonColor:[1,2],img:require('../assets/images/collection/alba/frame/double/sf2.png')},
              {id:4,name:'Ice White (Glass)',buttonColor:[2],img:require('../assets/images/collection/alba/frame/double/iws2.png')},
              ]
             },
             buttonColorData:[
              {id:1,name:'York black (Glass)',img:'images/collection/alba/button/black/button-b2.png'},
               {id:2,name:'Ice White (Glass)',img:'images/collection/alba/button/white/button-w2.png'}
            ],
            buttonData:{
              black:[
                {id:1,name:' 2 keys',img:'images/collection/alba/button/black/button-b2.png'},
                {id:2,name:' 4 keys',img:'images/collection/alba/button/black/button-b4.png'},
                {id:3,name:' 5 keys',img:'images/collection/alba/button/black/button-b5.png'},
                {id:4,name:' 8 keys',img:'images/collection/alba/button/black/button-b8.png'},
              ]
                ,
               white:[
                 {id:1,name:' 2 keys',img:'images/collection/alba/button/white/button-w2.png'},
                 {id:2,name:' 4 keys',img:'images/collection/alba/button/white/button-w4.png'},
                 {id:3,name:' 5 keys',img:'images/collection/alba/button/white/button-w5.png'},
                 {id:4,name:' 8 keys',img:'images/collection/alba/button/white/button-w8.png'}
                 ]
        },
        rightButtonData:{
              black:[
                {id:1,name:' 2 keys',img:'images/collection/alba/button/right/black/right-button-b2.png'},
                {id:2,name:' 4 keys',img:'images/collection/alba/button/right/black/right-button-b4.png'},
                {id:3,name:' 5 keys',img:'images/collection/alba/button/right/black/right-button-b5.png'},
                {id:4,name:' 8 keys',img:'images/collection/alba/button/right/black/right-button-b8.png'},
              ]
                ,
               white:[
                 {id:1,name:' 2 keys',img:'images/collection/alba/button/right/white/right-button-w2.png'},
                 {id:2,name:' 4 keys',img:'images/collection/alba/button/right/white/right-button-w4.png'},
                 {id:3,name:' 5 keys',img:'images/collection/alba/button/right/white/right-button-w5.png'},
                 {id:4,name:' 8 keys',img:'images/collection/alba/button/right/white/right-button-w8.png'}
                 ]
        },

             holeData:{
              key248: [
               {id:1,name:'York Black',img:require('../assets/images/collection/alba/hole/YorkBlack-Button-Base.png')},
               {id:2,name:'Mars black',img:require('../assets/images/collection/alba/hole/MarsBlack-Button-Base.png')},
              {id:3,name:'Silver black',img:require('../assets/images/collection/alba/hole/SilverBlack-Button-Base.png')},
              {id:4,name:'Silver white',img:require('../assets/images/collection/alba/hole/SilverWhite-Button-Base.png')},
               {id:5,name:'Ice White',img:require('../assets/images/collection/alba/hole/IceWhite-Button-Base.png')}],
               key5:[
                {id:1,name:'York Black',img:require('../assets/images/collection/alba/hole/YorkBlack-TT-Base.png')},
               {id:2,name:'Mars black',img:require('../assets/images/collection/alba/hole/MarsBlack-TT-Base.png')},
              {id:3,name:'Silver black',img:require('../assets/images/collection/alba/hole/SilverBlack-TT-Base.png')},
              {id:4,name:'Silver white',img:require('../assets/images/collection/alba/hole/Silver-White-TT-Base.png')},
               {id:5,name:'Ice White',img:require('../assets/images/collection/alba/hole/IceWhite-TT-Base.png')}],
               keySocket:[

               ]


        },



        }
      },


  methods:{
    next(){

        localStorage.setItem("smartSwitch",JSON.stringify(this.smartSwitch)),
        this.$router.push({path: '/collection/step4'});

    },
    back(){
      this.$router.push({path: '/collection/step2'});
    }


  },

  created:function () {
        this.$parent.headerB();
        this.$parent.footerB();
        this.smartSwitch = JSON.parse(localStorage.getItem("smartSwitch"))
        if(this.smartSwitch == null){
          this.$router.push({path: '/collection/step1'});
         }
  },
  computed:{
     frameImage:function(){

       if(this.smartSwitch.format =='single')
      return this.frameData.single.find(f => f.id == this.smartSwitch.frame).img;
      else {
        return this.frameData.double.find(f => f.id == this.smartSwitch.frame).img;}

    },
    buttonImage: function(){
      if(this.smartSwitch.buttonColor == 1)
      return this.buttonData.black[0].img
      else return this.buttonData.white[0].img
    },
    rightButtonImage: function(){
      if(this.smartSwitch.buttonColor == 1)
      return this.rightButtonData.black[0].img
      else return this.rightButtonData.white[0].img
    },
    holeImage: function(){

     var frame = this.smartSwitch.frame
      var buttonColor = this.smartSwitch.buttonColor
      var hole =1;
      if(frame == 1 && buttonColor == 1)hole =1;
      else if(frame == 2 && buttonColor == 1)hole=2;
      else if (frame == 3 && buttonColor == 1)hole=3;
      else if(frame == 3 && buttonColor == 2)hole=4;
      else if(frame == 4 && buttonColor == 2)hole=5;

      for(var i=0;i<this.holeData.key248.length;i++){
        if(this.holeData.key248[i].id == hole)return this.holeData.key248[i].img
      }
      return null;


    },
    rightHoleImage: function(){

      var frame = this.smartSwitch.frame
      var buttonColor = this.smartSwitch.buttonColor
      var hole =1;
      if(frame == 1 && buttonColor == 1)hole =1;
      else if(frame == 2 && buttonColor == 1)hole=2;
      else if (frame == 3 && buttonColor == 1)hole=3;
      else if(frame == 3 && buttonColor == 2)hole=4;
      else if(frame == 4 && buttonColor == 2)hole=5;

      for(var i=0;i<this.holeData.key248.length;i++){
        if(this.holeData.key248[i].id == hole)return this.holeData.key248[i].img
      }
      return null;


    },

  }

}
</script>

<style lang="css" scoped>

</style>
