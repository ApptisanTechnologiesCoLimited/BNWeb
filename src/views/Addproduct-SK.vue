<template>
  <div id="addproduct">
    <div class="bg-gray">
            <ol class="breadcrumb">
                <li><a href="#/dash">Dashboard</a></li>
                <li><a href="#/myprojects">My Projects</a></li>
                <li><a class="active">Add A Product</a></li>
              </ol>
        </div>
        <div class="row mlr0 font18">
          <div class="col-xs-6 prl30">
            ADD A PRODUCT
          </div>
          <div class="col-xs-6 text-right prl30">
            <div class="row font13 lh25">
              <div class="pull-right">
                <span class="font20 black click" @click="$router.go(-1)">✕</span>
              </div>
              <div class="pull-right mr20 text-center">
                  <i class="glyphicon glyphicon-th-large button-icon border active font20 click" title="SOCKET"></i><br>SOCKET
              </div>
              
               <div class="pull-right mr20">
                 <router-link :to="'/addproduct-keypad/' + $route.params.id">
                    <i class="glyphicon el-icon-office-building button-icon border font25" title="KEYPAD"></i>
                  </router-link>
               </div>
              
            </div>
          </div>
          

            
        </div>
       
        <div class="content middle addsk" >
           <div class="cell">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 text-center">
                      <p class="font20">{{fName}} , {{mName}} </p>
                      <div class=" inlineb p10" v-viewer>
                        <div v-if="material == 1">
                          <img v-if="format == 1 || format == 2 ||format == 3" src="../assets/images/ybg-socket.jpg" class="h245" alt="">
                          <img v-if="format == 2 || format == 3" src="../assets/images/ybg-socket.jpg" class="h245" alt="">
                          <img v-if="format == 3" src="../assets/images/ybg-socket.jpg" class="h245" alt="">
                        </div>
                        <div v-if="material == 2">
                          <img v-if="format == 1 || format == 2 ||format == 3" src="../assets/images/mbf-socket.jpg" class="h245" alt="">
                          <img v-if="format == 2 || format == 3" src="../assets/images/mbf-socket.jpg" class="h245" alt="">
                          <img v-if="format == 3" src="../assets/images/mbf-socket.jpg" class="h245" alt="">
                        </div>
                        <div v-if="material == 3">
                          <img v-if="format == 1 || format == 2 ||format == 3" src="../assets/images/sf-socket.jpg" class="h245" alt="">
                          <img v-if="format == 2 || format == 3" src="../assets/images/sf-socket.jpg" class="h245" alt="">
                          <img v-if="format == 3" src="../assets/images/sf-socket.jpg" class="h245" alt="">
                        </div>
                        <div v-if="material == 4">
                          <img v-if="format == 1 || format == 2 ||format == 3" src="../assets/images/iws-socket.jpg" class="h245" alt="">
                          <img v-if="format == 2 || format == 3" src="../assets/images/iws-socket.jpg" class="h245" alt="">
                          <img v-if="format == 3" src="../assets/images/iws-socket.jpg" class="h245" alt="">
                        </div>
                       
                       
                      </div>
                      <!-- <p>Click to zoom</p> -->
                      <p class="mt20">Frame only, Mechanical part is not provided</p>
                      <p class="text-center"><el-input size="medium" class="w30" v-model="pName" suffix-icon="el-icon-edit" placeholder="Place edit the product name"></el-input></p>
                      
                    </div>
                  
                  </div>
                  <hr class="gray mt20 mb20">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <p class="mb20">FORMAT</p>
                    <div class="mr20 inlineb" @click="act(1,'One Frame');" :class="format == 1 ? 'active':''">
                      <div class="border inlineb">
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                      </div>
                      <p class="name-f">
                        One Frame
                      </p>
                    </div>
                    <div class="mr20 inlineb" @click="act(2,'Double Frame');" :class="format == 2 ? 'active':''">
                      <div class="border inlineb">
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                      </div>
                      <p class="name-f">
                        Double Frame
                      </p>
                      
                    </div>
                    <div class="inlineb" @click="act(3,'Threeble Frame');" :class="format == 3 ? 'active':''">
                      <div class="border inlineb">
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                      </div>
                      <p class="name-f">
                        Threeble Frame
                      </p>
                    </div>
                  </div>
                  <div class="col-xs-4 text-center">
                    <p class="mb20">MATERIAL AND COLOR</p>
                    <div class="inlineb mr20" @click="act2(1,'York black (Glass)');" :class="material == 1 ? 'active':''" >
                      <img src="../assets/images/collection/alba/frame/single/ybg.png" class="h50" alt="York black (Glass)" title="York black (Glass)">
                      <p class="name-mc">
                        York black (Glass)
                      </p>
                      
                    </div>
                    <div class="inlineb mr20" @click="act2(2,'Mars Black');" :class="material == 2 ? 'active':''" >
                      <img src="../assets/images/collection/alba/frame/single/mbf.png" class="h50" alt="Mars Black" title="Mars Black">
                      <p class="name-mc">
                        Mars Black
                      </p>
                    </div>
                    <div class="inlineb mr20" @click="act2(3,'Silver');" :class="material == 3 ? 'active':''" >
                      <img src="../assets/images/collection/alba/frame/single/sf.png" class="h50" alt="Silver" title="Silver">
                      <p class="name-mc">
                        Silver
                      </p>
                    </div>
                    <div class="inlineb" @click="act2(4,'Ice White Surface');" :class="material == 4 ? 'active':''" >
                      <img src="../assets/images/collection/alba/frame/single/iws.png" class="h50" alt="Ice White Surface" title="Ice White Surface">
                      <p class="name-mc">
                        Ice White Surface
                      </p>
                    </div>

                  </div>
                  <div class="col-xs-4">
                    <div class="row">
                      <p class="text-center mb20">ADD TO THE ROOM</p>
                      <div class="col-xs-4 text-center">
                         <el-input size="medium" placeholder=""  v-model="product_quantity"> </el-input><br>
                         Quantity
                      </div>
                      <div class="col-xs-6 text-center">
                        <div class="click button-select w100" @click="select()">Select and Add</div>
                      </div>
                    </div>

                  </div>
                   
                  
               </div>
            
        
             </div>
           </div>
         
          
        </div>
  </div>
</template>

<script>
import "../assets/css/project.css";
import axios from "axios";
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
            fName:'One Frame',
            mName:'York black (Glass)',
            pName:''
            
            
        }
      },
  
  mounted () {
      
       
     },
  methods:{
   
     select(){
       axios
          .post('http://localhost:3000/product/api/',{
                    "name":this.pName,
                    "type":2,
                    "quantity":this.product_quantity,
                    "format":this.fName,
                    "material":this.mName,
                    "aid": 0,
                    "rid":this.$route.params.id
                })
                .then(res => {
                    // window.console.log(res.data);
                    if(res.data.affectedRows == 1){
                        this.$message({
                            type: 'success',
                            message: 'Product Added Successfully!'
                        }),
                         this.$router.go(-1)
                    }else{
                        this.$message({
                            type: 'error',
                            message: 'Add Failed!'
                        })
                    }
                })
                .catch(function (error) { // 请求失败处理
                    alert(error);
                });
     },
     act(index,fName){
        this.fName = fName,
        this.format = index
        // alert(this.activeClass);
        
     },
     act2(index,mName){
        this.mName = mName,
        this.material = index
        // alert(this.activeClass);
        
     }
    
  },
 
}
</script>

<style>
</style>
