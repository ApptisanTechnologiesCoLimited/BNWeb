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
                  <div class="col-xs-5 col-xs-offset-1">
                    <div class="row">
                      <div class="col-xs-4 text-center click">
                        <span class="iconfont icon-add button-icon border"></span>
                        <p class="mt10">Create<br> New Artwork</p>
                      </div>
                       <div class="col-xs-4 text-center click">
                        <span class="glyphicon glyphicon-search button-icon border font20"></span>
                        <p class="mt10">Add<br> an Existing Artwork</p>
                      </div>
                       <div class="col-xs-4 text-center click">
                        <span class="glyphicon glyphicon-th-large button-icon border font20"></span>
                        <p class="mt10">Add<br> a Socket Frame</p>
                      </div>
                    </div>
                    <hr>
                    <el-input
                      size="medium"
                      placeholder="Place search your keyword"
                      suffix-icon="el-icon-search"
                      >
                    </el-input>
                    <table class="table mt30">
                        <tr>
                            <th class="w30">Name</th>
                            <th class="text-center">Latest change</th>
                        </tr>
                        <!-- loop start -->
                        <tr v-for="(i,index) in roomtypeList" :key="index">
                            <td class="">{{i.name}}</td>
                            <td class="text-center">{{new Date(i.change_date) | dateFormat('DD.MM.YYYY')}}</td>
                        </tr>
                        <!-- loop end -->

                    </table>
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
