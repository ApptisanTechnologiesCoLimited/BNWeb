<template>
    <div id="roomtype">
<div class="bg-gray">
            <ol class="breadcrumb">
                <li><a href="#">My projects</a></li>
                <li><a href="#">MGM Cotai</a></li>
                <li class="active">Suite 1</li>
               
              </ol>
        </div>
        <div class="content project middle" >
          <div class="cell">
              <div class="container">
                  <div class="row">
                      <div class="col-xs-12 col-sm-8 col-sm-offset-2 mb20">
                          <p class="font30 text-center">{{roomtype.name}}</p>
                          <p class="text-center mt30 font15">
                            <span>Suite 1</span>
                          </p>

                          <div class="row mt50">
                               <div class="col-sm-4 prl30 mb30">
                              <div class="product-box">
                                <a class="img-box p20 text-center" style="background-image:url('../assets/images/pic1.jpg');">
                                  <span class="iconfont icon-add button-icon font30"></span>
                                </a>
                                <p class="font18 mt20">Add a product</p>
                                <p class="showPcs1 pcs"></p>
                              </div>

                            </div>
                            <div class="col-sm-4 prl30 mb30">
                              <div class="product-box">
                                <div class="img-box p20" :style="{backgroundImage:'url('+require('../assets/images/pic1.jpg')+')'}">
                                  
                                </div>
                                <p class="font18 mt20">ALBA 13</p>
                                <div class="row editbox">
                                  <div class="col-xs-6">
                                    <p class="showPcs1 pcs" v-show="!isshow">
                                       <span class="mr20"> QTY</span> 45
                                    </p>
                                    <p class="editPcs1 " v-show="isshow">
                                      <span class="mr20">QTY</span> <input type="tel" class="w30" value="45">
                                    </p>
                                  </div>
                                  <div class="col-xs-6 text-right">
                                      <a class="black editPcsButton" @click="edit_pcs()"><span class="iconfont icon-edit"></span></a>
                                      <a class="black" data-toggle="modal" data-target="#delete"><span class="iconfont icon-delete"></span></a>
                                  </div>
                                </div>


                              </div>

                            </div>
                            <div class="col-sm-4 prl30 mb30">
                              <div class="product-box">
                                <div class="img-box p20" :style="{backgroundImage:'url('+require('../assets/images/pic1.jpg')+')'}">
                                  
                                </div>
                                <p class="font18 mt20">ALBA 13</p>
                                <div class="row editbox">
                                  <div class="col-xs-6">
                                    <p class="showPcs1 pcs" v-show="!isshow">
                                       <span class="mr20"> QTY</span> 45
                                    </p>
                                    <p class="editPcs1 " v-show="isshow">
                                      <span class="mr20">QTY</span> <input type="tel" class="w30" value="45">
                                    </p>
                                  </div>
                                  <div class="col-xs-6 text-right">
                                      <a class="black editPcsButton" @click="edit_pcs()"><span class="iconfont icon-edit"></span></a>
                                      <a class="black" data-toggle="modal" data-target="#delete"><span class="iconfont icon-delete"></span></a>
                                  </div>
                                </div>


                              </div>

                            </div>
                            <div class="col-sm-4 prl30 mb30">
                              <div class="product-box">
                                <div class="img-box p20" :style="{backgroundImage:'url('+require('../assets/images/pic1.jpg')+')'}">
                                  
                                </div>
                                <p class="font18 mt20">ALBA 13</p>
                                <div class="row editbox">
                                  <div class="col-xs-6">
                                    <p class="showPcs1 pcs" v-show="!isshow">
                                       <span class="mr20"> QTY</span> 45
                                    </p>
                                    <p class="editPcs1 " v-show="isshow">
                                      <span class="mr20">QTY</span> <input type="tel" class="w30" value="45">
                                    </p>
                                  </div>
                                  <div class="col-xs-6 text-right">
                                      <a class="black editPcsButton" @click="edit_pcs()"><span class="iconfont icon-edit"></span></a>
                                      <a class="black" data-toggle="modal" data-target="#delete"><span class="iconfont icon-delete"></span></a>
                                  </div>
                                </div>


                              </div>

                            </div>
                            <div class="col-sm-4 prl30 mb30">
                              <div class="product-box">
                                <div class="img-box p20" :style="{backgroundImage:'url('+require('../assets/images/pic1.jpg')+')'}">
                                  
                                </div>
                                <p class="font18 mt20">ALBA 13</p>
                                <div class="row editbox">
                                  <div class="col-xs-6">
                                    <p class="showPcs1 pcs" v-show="!isshow">
                                       <span class="mr20"> QTY</span> 45
                                    </p>
                                    <p class="editPcs1 " v-show="isshow">
                                      <span class="mr20">QTY</span> <input type="tel" class="w30" value="45">
                                    </p>
                                  </div>
                                  <div class="col-xs-6 text-right">
                                      <a class="black editPcsButton" @click="edit_pcs()"><span class="iconfont icon-edit"></span></a>
                                      <a class="black" data-toggle="modal" data-target="#delete"><span class="iconfont icon-delete"></span></a>
                                  </div>
                                </div>


                              </div>

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

     import axios from "axios";
     import "../assets/css/project.css";

     export default {
         name: 'roomtype',
         data(){
             return {
                 roomtype:{},
                 productList:[],
                 rname:"",
                 isshow:false
             }
         },
         mounted() {
             axios.get("http://localhost:3000/roomtype/api/"+ this.$route.params.id).then(response =>
             {
                 this.roomtype = response.data[0];

             })//get a



             this.getProductList();


         },
         methods:{
             getProductList(){
                 axios.get("http://localhost:3000/product/api/byroomtype/"+this.$route.params.id).then(response =>
                 {
                     this.roomtypeList = response.data;

                 })

             },
             edit_pcs(){
                 this.isshow = !this.isshow;
             },
             delete_roomtype(rt) {
                 const h = this.$createElement;
                 this.$msgbox({
                     title: 'DELETE ROOM TYPE',
                     message: h('p', null, [
                         h('span', null, 'Are you sure you want to delete?'),
                         h('br',null,' '),
                         h('span', null , rt.name +'?')
                     ]),
                     showCancelButton: true,
                     confirmButtonText: 'Yes',
                     cancelButtonText: 'No',
                     beforeClose: (action, instance, done) => {
                         if (action === 'confirm') {
                             instance.confirmButtonLoading = true;
                             instance.confirmButtonText = 'Deleting...';
                             axios
                                 .delete('http://localhost:3000/roomtype/api/' + rt.id)
                                 .then(
                                     res => {
                                         // window.console.log(res.data);
                                         if(res.data.affectedRows == 1){
                                             instance.confirmButtonLoading = false;
                                             done();
                                             this.$message({
                                                 type: 'success',
                                                 message: 'Delete Successful!'
                                             })

                                             this.getRoomtypes();
                                         }else{
                                             instance.confirmButtonLoading = false;
                                             done();
                                             this.$message({
                                                 type: 'error',
                                                 message: 'Delete Failed!'
                                             })
                                         }

                                     }

                                 )
                                 .catch(
                                     function (error) { // 请求失败处理
                                         window.console.log(error);
                                     });


                         } else {
                             done();
                         }
                     }
                 });
             },
             create_roomtype() {

                 axios
                     .post('http://localhost:3000/roomtype/api/',{
                         "name":this.rname,

                         "pid":this.$route.params.id
                     })
                     .then(
                         res => {
                             if(res.data.affectedRows == 1){
                                 this.$message({
                                     type: 'success',
                                     message: 'Create Successful!'
                                 })
                                 this.rname = "";

                                 this.getRoomtypes();
                             }else{
                                 this.$message({
                                     type: 'error',
                                     message: 'Create Failed!'
                                 })
                             }

                         }

                     )
                     .catch(
                         function (error) { // 请求失败处理
                             window.console.log(error);
                         });
             }
         }
     }
 </script>