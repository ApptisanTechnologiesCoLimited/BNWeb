<template>
  <div id="addproduct">
    <div class="bg-gray">
            <ol class="breadcrumb">
                <li><a href="#/dash">Dashboard</a></li>
                <li><a href="#/myprojects">My Projects</a></li>
          <li><a class="active">Add A Product</a></li>



              </ol>
        </div>
        <div class="prl30 font18">
          ADD A PRODUCT

            <div class="pull-right font20 black" @click="$router.go(-1)">✕</div>
        </div>
       
        <div class="content login middle" >
           <div class="cell">
              <div class="container">
                <div class="row">
                  <div class="col-xs-4 col-xs-offset-2 text-center">
                    <div class="product-img bg inlineb" :style="{backgroundImage: 'url(' + current.img  + ')' }"></div>
                    <p class="click"> Click to zoom</p>
                    <div class="row mt20">
                      <div class="col-xs-8 text-left">
                        {{current.product}}
                      </div>
                      <div class="col-xs-4 text-right">
                        {{current.name}}
                      </div>
                      <div class="col-xs-12 mt20">
                        <a class="click button-select w100" @click="select(current.id)">Select</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-xs-offset-1">
                    <div class="row">
                      <div class="col-xs-4 text-center click">
                        <span class="iconfont icon-add button-icon border"></span>
                        <p class="mt10">Create<br> New Artwork</p>
                      </div>
                       <div class="col-xs-4 text-center click" :class="activeClass2 == 1 ? 'active':''" @click="change(1);">
                        <span class="glyphicon glyphicon-search button-icon border font20"></span>
                        <p class="mt10">Add<br> an Existing Artwork</p>
                      </div>
                       <div class="col-xs-4 text-center click" :class="activeClass2 == 2 ? 'active':''" @click="change(2);">
                        <span class="glyphicon glyphicon-th-large button-icon border font20"></span>
                        <p class="mt10">Add<br> a Socket Frame</p>
                      </div>
                    </div>
                    <hr>
                    <el-input size="medium" placeholder="Place search your keyword" suffix-icon="el-icon-search"  v-model="artwork_query"> </el-input>
                    <div>
                      <table class="table mt30">
                            <tr>
                                <th class="w40">Name</th>
                                <th class="text-center pr15">Latest change</th>
                            </tr>
                        </table>
                    </div>
                    <div class="h200">
                        <table class="table list-box">
                            <!-- loop start -->
                              <tr v-for="(i,index) in filtered_artwork" :key="index" class="click" :class="activeClass == index ? 'active':''" @click="sendData(index)">
                                <td class="w40">{{i.name}}</td>
                                <td class="text-center">{{new Date(i.changedate) | dateFormat('DD.MM.YYYY')}}</td>
                              </tr>
                            
                            <!-- loop end -->

                        </table>
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
            activeClass2:1
            
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
                    "type":1,
                    "aid": ID,
                    "quantity":1,
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
