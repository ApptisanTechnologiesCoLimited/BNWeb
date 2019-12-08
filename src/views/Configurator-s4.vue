<template>
  <div id="addstep">
    <div class="bg-gray">
      <ol class="breadcrumb">
          <li class="black">1. Collection</li>
          <li class="black">2. Materials</li>
          <li class="black">3. Frame</li>
          <li class="orange">4. Function</li>
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
                  <p class="font20">SELECT FUNCTION</p>
                  <div class="col-xs-12 text-center mt30 inlineb mb30">
                    <div class="inlineb p10 w100">
                      <div class="text-center">
                          <img :src="frameImage"  class="h350" alt="" title="">
                       </div>
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

                    <div class="icon-img">
                         <img :src="iconImage" class="h350" alt="">
                         <img v-if="smartSwitch.format=='double'" :src="rightIconImage" class="h350" alt="">
                          </div>

                  </div>
                  <div class="col-xs-4 text-center" :class="smartSwitch.format == 'single' ? 'col-xs-offset-4':'col-xs-offset-2'">
                    <i class="el-icon-arrow-left click font25 left" @click="smartSwitch.button > 0  ? smartSwitch.button-- : ''"></i>
                      <div v-for="(i,index) in buttonControl" :key="index"  class="inlineb active prl7" v-show="smartSwitch.button == i.id">
                        <div class="border inlineb">
                          <span title="" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                         ID: {{i.id}}
                        </p>
                      </div>



                    <i class="el-icon-arrow-right click font25 right" @click=" smartSwitch.button < 4 ? smartSwitch.button++ :''"></i>


                  </div>
                  <div class="col-xs-4 text-center" v-if="smartSwitch.format == 'double'">
                     <i class="el-icon-arrow-left click font25 left" @click=" smartSwitch.rightButton > 0  ? smartSwitch.rightButton -- : ''"></i>
                      <div v-for="(i,index) in buttonControl" :key="index"  class="inlineb active prl7" v-show="smartSwitch.rightButton == i.id">
                        <div class="border inlineb">
                          <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        </div>
                        <p class="name-f">
                         ID: {{i.id}}
                        </p>
                      </div>



                    <i class="el-icon-arrow-right click font25 right" @click=" smartSwitch.rightButton < 4 ? smartSwitch.rightButton ++ :''"></i>

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
         iconData:{
          black:[
                {id:1,name:' 2 keys',img:'images/collection/alba/icon/black/ab-onWhite-icon2.png'},
                {id:2,name:' 4 keys',img:'images/collection/alba/icon/black/ab-onWhite-icon4.png'},
                {id:3,name:' 5 keys',img:'images/collection/alba/icon/black/ab-onWhite-icon5.png'},
                {id:4,name:' 8 keys',img:'images/collection/alba/icon/black/ab-onWhite-icon8.png'},
              ]
                ,
               white:[
                 {id:1,name:' 2 keys',img:'images/collection/alba/icon/white/ab-onBlack-icon2.png'},
                 {id:2,name:' 4 keys',img:'images/collection/alba/icon/white/ab-onBlack-icon4.png'},
                 {id:3,name:' 5 keys',img:'images/collection/alba/icon/white/ab-onBlack-icon5.png'},
                 {id:4,name:' 8 keys',img:'images/collection/alba/icon/white/ab-onBlack-icon8.png'}
                 ]
        }



        }
      },


  methods:{
    next(){

        localStorage.setItem("smartSwitch",JSON.stringify(this.smartSwitch)),
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
        this.smartSwitch = JSON.parse(localStorage.getItem("smartSwitch"))
        if(this.smartSwitch == null){
          this.$router.push({path: '/collection/step1'});
         }
  },
  computed:{
    frameImage:function(){

       if(this.smartSwitch.format == 'single')
      return this.frameData.single.find(f => f.id == this.smartSwitch.frame).img;
      else return this.frameData.double.find(f => f.id == this.smartSwitch.frame).img;

    },
    buttonImage: function(){

      if(this.smartSwitch.buttonColor == 1)
      return this.buttonData.black.find(b => b.id == this.smartSwitch.button).img
      else return this.buttonData.white.find(b => b.id == this.smartSwitch.button).img

    },
     rightButtonImage: function(){
      if(this.smartSwitch.buttonColor == 1)
      return this.rightButtonData.black.find(b => b.id == this.smartSwitch.rightButton).img
      else return this.rightButtonData.white.find(b => b.id == this.smartSwitch.rightButton).img
    },
    buttonControl: function(){
       if(this.smartSwitch.buttonColor == 1)
      return this.buttonData.black
      else return this.buttonData.white
    },
    holeImage: function(){

     var frame = this.smartSwitch.frame
      var buttonColor = this.smartSwitch.buttonColor
      var button = this.smartSwitch.button

      var hole =1;
      if(button == 1 || button == 2 || button == 4){
      if(frame == 1 && buttonColor == 1)hole =1;
      else if(frame == 2 && buttonColor == 1)hole=2;
      else if (frame == 3 && buttonColor == 1)hole=3;
      else if(frame == 3 && buttonColor == 2)hole=4;
      else if(frame == 4 && buttonColor == 2)hole=5;

      for(var i=0;i<this.holeData.key248.length;i++){
        if(this.holeData.key248[i].id == hole)return this.holeData.key248[i].img
      }

      }else if(button == 3){
        if(frame == 1 && buttonColor == 1)hole =1;
      else if(frame == 2 && buttonColor == 1)hole=2;
      else if (frame == 3 && buttonColor == 1)hole=3;
      else if(frame == 3 && buttonColor == 2)hole=4;
      else if(frame == 4 && buttonColor == 2)hole=5;

      for(i=0;i<this.holeData.key5.length;i++){
        if(this.holeData.key5[i].id == hole)return this.holeData.key5[i].img
      }

      }

      return null;


    },
    rightHoleImage: function(){

      var frame = this.smartSwitch.frame
      var buttonColor = this.smartSwitch.buttonColor
      var rightButton = this.smartSwitch.rightButton

      var hole =1;
      if(rightButton == 1 || rightButton == 2 || rightButton == 4){
      if(frame == 1 && buttonColor == 1)hole =1;
      else if(frame == 2 && buttonColor == 1)hole=2;
      else if (frame == 3 && buttonColor == 1)hole=3;
      else if(frame == 3 && buttonColor == 2)hole=4;
      else if(frame == 4 && buttonColor == 2)hole=5;

      for(var i=0;i<this.holeData.key248.length;i++){
        if(this.holeData.key248[i].id == hole)return this.holeData.key248[i].img
      }

      }else if(rightButton == 3){
        if(frame == 1 && buttonColor == 1)hole =1;
      else if(frame == 2 && buttonColor == 1)hole=2;
      else if (frame == 3 && buttonColor == 1)hole=3;
      else if(frame == 3 && buttonColor == 2)hole=4;
      else if(frame == 4 && buttonColor == 2)hole=5;

      for(i=0;i<this.holeData.key5.length;i++){
        if(this.holeData.key5[i].id == hole)return this.holeData.key5[i].img
      }

      }

      return null;


    },
    iconImage: function(){
      var buttonColor = this.smartSwitch.buttonColor
      var button = this.smartSwitch.button
      if(buttonColor == 1){
        {
          return this.iconData.white.find(b => b.id == button).img
        }
      }else return this.iconData.black.find(b => b.id == button).img

    },
    rightIconImage: function(){
      var buttonColor = this.smartSwitch.buttonColor
      var rightButton = this.smartSwitch.rightButton
      if(buttonColor == 1){
        {
          return this.iconData.white.find(b => b.id == rightButton).img
        }
      }else return this.iconData.black.find(b => b.id == rightButton).img

    },


  }

}
</script>

<style lang="css" scoped>

</style>
