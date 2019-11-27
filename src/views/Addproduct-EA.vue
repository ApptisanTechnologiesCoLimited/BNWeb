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
              <div class="pull-right mr20">
                <router-link :to="'/addproduct-sockets/' + $route.params.id">
                  <i class="glyphicon glyphicon-th-large button-icon border font20 click" title="SOCKET"></i>
                </router-link>
              </div>
               <div class="pull-right mr20 text-center"><i class="glyphicon el-icon-office-building button-icon border active font25" title="KEYPAD"></i><br>KEYPAD
               </div>
              
            </div>

              
                    
            
            
          </div>
          

            
        </div>
       
        <div class="content middle mt20" >
          
              <div class="container">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <div class="product-img bg inlineb p10" v-viewer>
                      <img :src="current.img" class="w100" alt="">
                    </div>
                   
                    <table class="table text-left mt20">
                      <tr>
                        <td class="w30 gray">Product:</td>
                        <td>{{current.product}}</td>
                      </tr>
                      <tr>
                        <td class="gray">Finish:</td>
                        <td>{{current.material}}</td>
                      </tr>
                      <tr>
                        <td class="gray">Protocol:</td>
                        <td>{{current.protocol}}</td>
                      </tr>
                    </table>
                   
                    
                  </div>
                  <div class="col-xs-7 col-xs-offset-1">
                    <div> 
                      <a href="#" data-toggle="modal" data-target="#addnew">
                        <span class="iconfont icon-add button-icon mr20"></span>
                        <span class="font16 black text-middle">ADD A PROJECT</span>
                      </a>
                    </div>
                    
                    <hr class="mt10 mb10">
                     <div class="row">
                        <div class="col-xs-5">
                          <span class="iconfont icon-iconfind button-icon mr20 font25"></span>
                          <span class="font16 black text-middle mr20">FIND AN ARTWORK</span>
                        </div>
                        <div class="col-xs-7 mt10">
                           <el-input size="medium" placeholder="Place search your keyword"  v-model="artwork_query"> </el-input>
                        </div>
                      </div>
                   
                    <div>
                      <table class="table mt30">
                            <tr>
                                <th class="w40">Name</th>
                                <th class="w40">Product</th>
                                <th class="text-center pr15">Latest change</th>
                            </tr>
                        </table>
                    </div>
                    <div class="h200">
                        <table class="table list-box">
                            <!-- loop start -->
                              <tr v-for="(i,index) in filtered_artwork" :key="index" class="click" :class="activeClass == index ? 'active':''" @click="sendData(index)">
                                <td class="w40">{{i.name}}</td>
                                <td class="w40">{{i.product}}</td>
                                <td class="text-center">{{new Date(i.changedate) | dateFormat('DD.MM.YYYY')}}</td>
                              </tr>
                            
                            <!-- loop end -->

                        </table>
                        
                    </div>
                    <div class="row">
                      <div class="col-xs-5 text-right lh25">
                        <el-input size="medium" v-model="current.product" suffix-icon="el-icon-edit" placeholder="Place edit the product name"></el-input>
                      </div>
                      <div class="col-xs-3 text-center">
                         <el-input size="medium" placeholder=""  v-model="product_quantity"> </el-input>
                         Quantity
                      </div>
                      <div class="col-xs-4 text-center">
                        <div class="click button-select w100" @click="select(current.id)">Select and Add</div>
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
            activeClass:0,
            product_quantity:0
            
        }
      },
  
  mounted () {
       this.getData();
       
     },
  methods:{
    getData:function(){
        axios
          .get('http://localhost:3000/artwork/api')
          .then(response =>
         {
             this.artworkList = response.data;
             this.current = this.artworkList[0]; 

         })
          .catch(function (error) { // 请求失败处理
            alert(error);
          });
      },
      sendData(index){
          this.current =  this.artworkList[index]
          this.activeClass = index
        },
     select(ID){
       axios
          .post('http://localhost:3000/product/api/',{
                    "name":this.current.name,
                    "product":this.current.product,
                    "type":1,
                    "aid": ID,
                    "quantity":this.product_quantity,
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
     change(code){
       this.activeClass2 = code
     }
  },
  computed: {
        filtered_artwork:function() {
            return this.artworkList.filter(artwork => {
                return artwork.name.toLowerCase().includes(this.artwork_query.toLowerCase())
            })
        }
    }
}
</script>

<style>
</style>
