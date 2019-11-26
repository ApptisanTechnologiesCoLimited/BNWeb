<template>
  <div id="addproduct">
    <div class="bg-gray">
      <el-steps :active="0" finish-status="success" simple>
          <el-step title="1. Collection"></el-step>
          <el-step title="2. Materials"></el-step>
          <el-step title="3. Format"></el-step>
          <el-step title="4. Function"></el-step>
          <el-step title="5. Engraving"></el-step>
          <el-step title="6. Backlights"></el-step>
          <el-step title="7. Details"></el-step>
          
        </el-steps>
            <span class="font20 black click" @click="$router.go(-1)">✕</span>
      </div>
       
        <div class="content middle" >
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 text-center">
                      <p class="font20">{{fName}} , {{mName}} </p>
                      <div class=" inlineb p10" v-viewer>
                        <img v-if="format == 1 && material == 1" src="../assets/images/ybg.png" class="h245" alt="">
                        <img v-if="format == 2 && material == 1" src="../assets/images/ybg-2.png" class="h245" alt="">
                        <img v-if="format == 3 && material == 1" src="../assets/images/ybg-3.png" class="h245" alt="">
                      </div>
                      <!-- <p>Click to zoom</p> -->
                      <p class="mt20">Frame only, Mechanical part is not provided</p>
                      
                    </div>
                  
                  </div>
                  <hr class="gray mt20 mb20">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <p class="mb20">FORMAT</p>
                    <div class="mr20 inlineb">
                      <div class="border inlineb mb10" @click="act(1,'One Frame');" :class="format == 1 ? 'active':''">
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                      </div><br>
                      One Frame
                    </div>
                    <div class="mr20 inlineb">
                      <div class="border inlineb mb10" @click="act(2,'Double Frame');" :class="format == 2 ? 'active':''">
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                      </div><br>
                      Double Frame
                    </div>
                    <div class="inlineb">
                      <div class="border inlineb mb10" @click="act(3,'Threeble Frame');" :class="format == 3 ? 'active':''">
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                        <span title="SOCKET" class="glyphicon glyphicon-th-large button-icon-small font20 click"></span>
                      </div><br>
                      Threeble Frame
                    </div>
                  </div>
                  <div class="col-xs-4 text-center">
                    <p class="mb20">MATERIAL AND COLOR</p>
                    <div class="inlineb mr20" @click="act2(1,'York black (Glass)');" :class="material == 1 ? 'active':''" >
                      <img src="../assets/images/ybg.png" class="h50" alt="York black (Glass)" title="York black (Glass)">
                      <p class="name-mc">
                        York black (Glass)
                      </p>
                      
                    </div>
                    <div class="inlineb mr20" @click="act2(2,'Mars Black');" :class="material == 2 ? 'active':''" >
                      <img src="../assets/images/mbf.png" class="h50" alt="Mars Black" title="Mars Black">
                      <p class="name-mc">
                        Mars Black
                      </p>
                    </div>
                    <div class="inlineb mr20" @click="act2(3,'Silver');" :class="material == 3 ? 'active':''" >
                      <img src="../assets/images/sf.png" class="h50" alt="Silver" title="Silver">
                      <p class="name-mc">
                        Silver
                      </p>
                    </div>
                    <div class="inlineb" @click="act2(4,'Ice White Surface');" :class="material == 4 ? 'active':''" >
                      <img src="../assets/images/iws.png" class="h50" alt="Ice White Surface" title="Ice White Surface">
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
                        <a class="click button-select w100" @click="select()">Select and Add</a>
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
            
            
        }
      },
  
  mounted () {
      
       
     },
  methods:{
   
     select(){
       axios
          .post('http://localhost:3000/product/api/',{
                    "name":this.fName + this.mName,
                    "type":2,
                    "quantity":this.product_quantity,
                    "format":this.format,
                    "material":this.material,
                    "aid": 0,
                    "rid":this.$route.params.id
                })
                .then(res => {
                    // window.console.log(res.data);
                    if(res.data.affectedRows == 1){
                        this.$message({
                            type: 'success',
                            message: 'Product Added Successfully!'
                        })
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
