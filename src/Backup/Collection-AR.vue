<template>
  <div id="collectionB">
    <div class="bg-img2"></div>
    <div class="bg-gray">
       <ol class="breadcrumb">
          <li>Place Select the Collection</li>
          
          <span class="font16 black click pull-right" @click="$router.go(-1)">✕</span>
        </ol>
    </div>
       
        <div class="content middle collection">
          <div class="cell">
              <div class="container relative">
                <div class="row">
                  <div class="col-xs-10 col-xs-offset-1">
                    <div class="row">
                      <div class="col-xs-6">
                        <img src="../assets/images/ar-product.png" class="h350" alt="">
                      </div>
                      <div class="col-xs-6 text-center mt30">
                        <p class="font20 white">SELECT COLLECTION</p>
                        <router-link :to="'/collection-ab/'" class="button-b white w100 mt30">
                          ALBA
                        </router-link>
                        <router-link :to="'/collection-ar/step'" class="button-b white w100 mt30 active">
                          ARIA
                        </router-link>

                      </div>
                    </div>
                  </div>
                 
                </div>
                <div class="row next-nav">
                  <div class="col-xs-12"><hr class="gray"></div>
                  <div class="col-xs-4 click"></div>
                  <div class="col-xs-4 text-center click"></div>
                  <div class="col-xs-4 text-right click">
                    <router-link :to="'/alba/step'" class="white">NEXT <i class="el-icon-d-arrow-right"></i></router-link>
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
  name: 'collectionB',
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
            type:2
            
            
        }
      },
  
  mounted () {
      
       
     },
  methods:{
   
     select(){
       axios
          .post('http://localhost:3000/product/api/',{
                    "name":this.fName + this.mName,
                    "type":this.type,
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

<style lang="css">
.bg-img2{
   width:100vw;
   height:100vh;
   position: fixed;
   top:0;
   left:0;
   background-image: url(../assets/images/bg2.jpg);
   background-size:cover;
   z-index:-1;
 }
 
</style>
