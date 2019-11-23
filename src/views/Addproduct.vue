<template>
  <div id="addproduct">
    <div class="bg-gray">
            <ol class="breadcrumb">
                <li><a href="#">My projects</a></li>
                <li><a href="#">MGM Cotai</a></li>
                <li class="active">Suite 1</li>
              </ol>
        </div>
        <div class="prl30 font18">
          ADD A PRODUCT
            <a href="" class="pull-right font20 black" @click="this.$router.go(-1)">✕</a>
        </div>
       
        <div class="content login middle" >
           <div class="cell">
              <div class="container">
                <div class="row">
                  <div class="col-xs-4 col-xs-offset-2 text-center">
                    <div class="product-img bg inlineb" :style="{backgroundImage:'url('+require('../assets/images/pic1.jpg')+')'}"></div>
                    <p class="click"> Click to zoom</p>
                    <div class="row mt20">
                      <div class="col-xs-8 text-left">
                        ALBA 4, General Purpose York Black Glass
                      </div>
                      <div class="col-xs-4 text-right">
                        Crestnet
                      </div>
                      <div class="col-xs-12 mt20">
                        <a class="click button-select w100">Select</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="row">
                      <div class="col-xs-4">
                        <span class="iconfont icon-add button-icon mr20 border"></span>
                        <span>Create New Artwork</span>
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
// import axios from "axios";
export default {
  name: 'addproduct'
}
</script>

<style>
</style>
