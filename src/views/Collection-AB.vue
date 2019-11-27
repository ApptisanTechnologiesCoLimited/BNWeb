<template>
  <div id="addproduct">
    <div class="bg-gray">
       <ol class="breadcrumb">
          <li>1. Collection</li>
          
          <span class="font16 black click pull-right" @click="$router.go(-1)">✕</span>
        </ol>
    </div>
       
        <div class="content middle project">
          <div class="cell">
              <div class="container">
                <div class="row">
                  <div class="col-xs-10 col-xs-offset-1">
                    <div class="row">
                      <div class="col-xs-6">
                        <img src="../assets/images/ybg.png" class="h350" alt="">
                      </div>
                      <div class="col-xs-6 text-center mt30">
                        <p class="font20">SELECT COLLECTION</p>
                        <router-link :to="'/alba/step'" class="button-b black w100 mt30 active">
                          ALBA
                        </router-link>
                        <router-link :to="'/collection-ar/'" class="button-b black w100 mt30">
                          ARIA
                        </router-link>

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

export default {
  name: 'addproduct',
  data(){
        return {
            type:1
        }
      },
 
}
</script>

<style lang="css">
#addproduct{
   background-image: url(../assets/images/bg1.jpeg);
 }
</style>
