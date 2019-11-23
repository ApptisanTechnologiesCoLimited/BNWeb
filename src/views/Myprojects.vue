<template>
 <div id="myproject">
   <div class="bg-gray">
      <ol class="breadcrumb">
          <li><a href="#">Dashboard</a></li>
          <li class="active"> <a href="#">My Projects</a></li>

        </ol>
  </div>

  <div class="content login middle">
    <div class="cell">
      <div class="container">
        <div class="row">
            <p class="font30 text-center">MY PORJECTS</p>
            <div class="col-xs-12 mt30">
              <span class="iconfont icon-iconfind button-icon mr20 font25"></span>
              <span class="font18 black text-middle mr20">SEARCH FOR A PROJECT</span>
              <el-input v-model="artwork_query"  placeholder="Place input you keyword! "  class="w40 mr20"></el-input>
<!--              <button type="button" class="ebutton w30" @click="search_artwork()">Find</button>-->


            </div>
            <div class="col-xs-12"><hr class="gray"></div>
            <div class="col-xs-12 mb10">
              <a href="#" data-toggle="modal" data-target="#addnew">
                <span class="iconfont icon-add button-icon mr20"></span>
                <span class="font18 black text-middle">ADD A PROJECT</span>
              </a>

            </div>
            <div class="col-xs-12 mb20">
              <div class="panel-group" id="accordion" >
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title" role="button" data-toggle="collapse" href="#collapseOne">
                      <span class="iconfont icon-Hotel button-icon mr20"></span> RESIDENTIAL
                      <span class="glyphicon glyphicon-menu-up pull-right" aria-hidden="true"></span>
                    </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel">
                    <div class="panel-body">
                      <table class="table mb0">
                        <tr>
                          <th class="">Name</th>
                          <th class="text-center w30"></th>
                          <th class="text-center">Customer Name</th>
                          <th class="text-center">Country</th>
                          <th class="text-center">City</th>
                          <th class="text-center">Latest change</th>
                        </tr>
                        <!-- loop start -->
                        <tr v-for="( i,index ) in filtered_redidential" :key="index">
                          <td class="">{{i.name}}</td>
                          <td class="text-center option h40">
                            <router-link :to="'/project/' + i.id" class="black mr20">Open</router-link>
                            <a class="black" data-toggle="modal" data-target="#edit" @click="sendData(index,0)"><span class="iconfont icon-edit font18"></span></a>
                            <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                            <a class="black" @click="delete_project(i.id,i.name)"><span class="iconfont icon-delete font18"></span></a>
                          </td>
                          <td class="text-center">{{i.customer_name}}</td>
                          <td class="text-center">{{i.country}}</td>
                          <td class="text-center">{{i.city}}</td>
                          <td class="text-center">{{new Date(i.change_date) | dateFormat('DD.MM.YYYY')}}</td>
                        </tr>
                        

                      </table>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title" role="button" data-toggle="collapse" href="#collapseTwo">

                        <span class="iconfont icon-xingzhuang button-icon mr20"></span> HOSPITALITY
                        <span class="glyphicon glyphicon-menu-up pull-right" aria-hidden="true"></span>

                    </h4>
                  </div>
                  <div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel">
                    <div class="panel-body">
                      <table class="table mb0">
                        <tr>
                          <th class="">Name</th>
                          <th class="text-center w30"></th>
                          <th class="text-center">Customer Name</th>
                          <th class="text-center">Country</th>
                          <th class="text-center">City</th>
                          <th class="text-center">Latest change</th>
                        </tr>
                        <!-- loop start -->
                        <tr v-for="( i,index ) in filtered_hopspitality" :key="index">
                          <td class="">{{i.name}}</td>
                          <td class="text-center option h40">
                            <router-link :to="'/project/' + i.id" class="black mr20">Open</router-link>
                            <a class="black" data-toggle="modal" data-target="#edit" @click="sendData(index,1)"><span class="iconfont icon-edit font18"></span></a>
                            <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                            <a class="black" @click="delete_project(i.id,i.name)"><span class="iconfont icon-delete font18"></span></a>
                          </td>
                          <td class="text-center">{{i.customer_name}}</td>
                          <td class="text-center">{{i.country}}</td>
                          <td class="text-center">{{i.city}}</td>
                          <td class="text-center">{{new Date(i.change_date) | dateFormat('DD.MM.YYYY')}}</td>
                        </tr>
                        <!-- loop end -->
                         
                      </table>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title" role="button" data-toggle="collapse" href="#collapseThree">
                      <span class="iconfont  button-icon mr20"></span> MARINE
                      <span class="glyphicon glyphicon-menu-up pull-right" aria-hidden="true"></span>
                    </h4>
                  </div>
                  <div id="collapseThree" class="panel-collapse collapse in" role="tabpanel">
                    <div class="panel-body">
                      <table class="table mb0">
                        <tr>
                          <th class="">Name</th>
                          <th class="text-center w30"></th>
                          <th class="text-center">Customer Name</th>
                          <th class="text-center">Country</th>
                          <th class="text-center">City</th>
                          <th class="text-center">Latest change</th>
                        </tr>
                        <!-- loop start -->
                        <tr v-for="( i,index ) in filtered_marine" :key="index">
                          <td class="">{{i.name}}</td>
                          <td class="text-center option h40">
                            <router-link :to="'/project/' + i.id" class="black mr20">Open</router-link>
                            <a class="black" data-toggle="modal" data-target="#edit" @click="sendData(index,2)"><span class="iconfont icon-edit font18"></span></a>
                            <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                            <a class="black" @click="delete_project(i.id,i.name)"><span class="iconfont icon-delete font18"></span></a>
                          </td>
                          <td class="text-center">{{i.customer_name}}</td>
                          <td class="text-center">{{i.country}}</td>
                          <td class="text-center">{{i.city}}</td>
                          <td class="text-center">{{new Date(i.change_date) | dateFormat('DD.MM.YYYY')}}</td>
                        </tr>
                        <!-- loop end -->
                         
                      </table>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingFour">
                    <h4 class="panel-title" role="button" data-toggle="collapse" href="#collapseFour">
                      <span class="iconfont  button-icon mr20"></span> COMMERCIAL
                      <span class="glyphicon glyphicon-menu-up pull-right" aria-hidden="true"></span>
                    </h4>
                  </div>
                  <div id="collapseFour" class="panel-collapse collapse in" role="tabpanel">
                    <div class="panel-body">
                      <table class="table mb0">
                        <tr>
                          <th class="">Name</th>
                          <th class="text-center w30"></th>
                          <th class="text-center">Customer Name</th>
                          <th class="text-center">Country</th>
                          <th class="text-center">City</th>
                          <th class="text-center">Latest change</th>
                        </tr>
                        <!-- loop start -->
                        <tr v-for="( i,index ) in filtered_commercial" :key="index">
                          <td class="">{{i.name}}</td>
                          <td class="text-center option h40">
                            <router-link :to="'/project/' + i.id" class="black mr20">Open</router-link>
                            <a class="black" data-toggle="modal" data-target="#edit" @click="sendData(index,3)"><span class="iconfont icon-edit font18"></span></a>
                            <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                            <a class="black" @click="delete_project(i.id,i.name)"><span class="iconfont icon-delete font18"></span></a>
                          </td>
                          <td class="text-center">{{i.customer_name}}</td>
                          <td class="text-center">{{i.country}}</td>
                          <td class="text-center">{{i.city}}</td>
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

      </div>
    </div>
  </div>
  <div class="modal" id="edit" tabindex="-1" role="dialog" aria-labelledby="" data-backdrop="static">
            <div class="modal-dialog" role="document">
              <div class="modal-content">

                <div class="modal-body">
                  <p class="font18 text-center">Edit PROJECT</p>
                  <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                       <table class="table mt30 font12">
                         <tr>
                           <td>Project name</td>
                           <td><input type="text" class="form-control" v-model="editable_project.name"></td>
                         </tr>
                         <tr>
                          <td class="text-middle">Customer name</td>
                          <td class="text-right"><input type="text" class="form-control" v-model="editable_project.customer_name"></td>
                        </tr>
                        <tr>
                          <td class="text-middle">Category</td>
                          <td class="text-right">
                            <select class="form-control"  v-model="editable_project.category">
                                  <option value="1">Residential</option>
                                  <option value="2">Hospitality</option>
                                  <option value="3">Marine</option>
                                  <option value="4">Commercial</option>

                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Country</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" v-model="editable_project.country">
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">City</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" v-model="editable_project.city">
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Description <br><span class="font10">(max 250 symbols)</span> </td>
                          <td class="text-right text-middle">
                              <textarea class="form-control" rows="3" v-model="editable_project.description"></textarea>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Number of rooms</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" v-model="editable_project.num_room">
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Hotel brand</td>
                          <td class="text-right text-middle">
                             <input type="text" class="form-control" v-model="editable_project.hotel_brand">
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Purchase Order #</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" v-model="editable_project.order_num">
                          </td>
                        </tr>
                      </table>
                      <div class="mt50 text-center">
                        <div class="row mlr0">
                          <div class="col-sm-4 prl7 col-sm-offset-2">
                             <button type="button" class="ebutton" data-dismiss="modal" aria-label="Close" @click="edit_project()">OK</button>
                          </div>

                          <div class="col-sm-4 prl7">
                              <button type="button" data-dismiss="modal" aria-label="Close" class="ebutton">Cancel</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal" id="addnew" tabindex="-1" role="dialog" aria-labelledby="" data-backdrop="static">
            <div class="modal-dialog" role="document">
              <div class="modal-content">

                <div class="modal-body">
                  <p class="font18 text-center">CREATE A NEW PROJECT</p>
                  <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                       <table class="table mt30 font12">
                         <tr>
                           <td>Project name</td>
                           <td><input type="text" class="form-control" v-model="add_project.name"></td>
                         </tr>
                         <tr>
                          <td class="text-middle">Customer name</td>
                          <td class="text-right"><input type="text" class="form-control" v-model="add_project.customer_name"></td>
                        </tr>
                        <tr>
                          <td class="text-middle">Category</td>
                          <td class="text-right">
                            <select class="form-control"  v-model="add_project.category">
                                  <option value="1">Residential</option>
                                  <option value="2">Hospitality</option>
                                  <option value="3">Marine</option>
                                  <option value="4">Commercial</option>

                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Country</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" v-model="add_project.country">
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">City</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" v-model="add_project.city">
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Description <br><span class="font10">(max 250 symbols)</span> </td>
                          <td class="text-right text-middle">
                              <textarea class="form-control" rows="3" v-model="add_project.description"></textarea>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Number of rooms</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" v-model="add_project.num_room">
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Hotel brand</td>
                          <td class="text-right text-middle">
                             <input type="text" class="form-control" v-model="add_project.hotel_brand">
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Purchase Order #</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" v-model="add_project.order_num">
                          </td>
                        </tr>
                      </table>
                      <div class="mt50 text-center">
                        <div class="row mlr0">
                          <div class="col-sm-4 prl7 col-sm-offset-2">
                             <button type="button" class="ebutton" data-dismiss="modal" aria-label="Close" @click="add_new_project()">OK</button>
                          </div>

                          <div class="col-sm-4 prl7">
                              <button type="button" data-dismiss="modal" aria-label="Close" class="ebutton">Cancel</button>
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
import '../assets/css/project.css';
import axios from "axios";
export default {
  name: 'myproject',
  data(){
        return {
            projectList:[[],[],[],[]],
            current:{},
            editable_project:{},
            artwork_query: '',
            timeout:  null,
            add_project:{}

        }
      },
      methods: {
      getData:function(){
        axios
          .get('http://localhost:3000/project/api')
          .then(response =>
         {

             var Residential =[];
             var Hospitality =[];
             var Marine =[];
             var Commercial =[];

             response.data.forEach(function(item){

                if(item.category == 1)Residential.push(item);
                else if(item.category == 2)Hospitality.push(item);
                else if(item.category == 3)Marine.push(item);
                else if(item.category == 4)Commercial.push(item);



             });
             this.projectList = [Residential,Hospitality,Marine,Commercial];
             // eslint-disable-next-line no-console
             console.log( this.projectList)





             //this.current = this.artworkList[0];
             //this.editable_project = Object.assign({},this.current);

         })
          .catch(function (error) { // 请求失败处理
            alert(error);
          });
      },
      sendData(index,sort){
          this.current =  this.projectList[sort][index]
          this.editable_project = Object.assign({},this.current);
          window.console.log(this.editable_project);
        },
      
      handleSelect(item) {
        window.console.log(item);
      },
      edit_project(){
            axios
                .put('http://localhost:3000/project/api/'+ this.editable_project.id,{
                    "name":this.editable_project.name,
                    "customer_name":this.editable_project.customer_name,
                    "category":this.editable_project.category,
                    "country":this.editable_project.country,
                    "city":this.editable_project.city,
                    "description":this.editable_project.description,
                    "num_room":this.editable_project.num_room,
                    "hotel_brand":this.editable_project.hotel_brand,
                    "order_num":this.editable_project.order_num
                })
                .then(res => {
                    // window.console.log(res.data);
                    if(res.data.affectedRows == 1){
                        this.$message({
                            type: 'success',
                            message: 'Edit Successfully!'
                        }),
                        this.getData();
                    }else{
                        this.$message({
                            type: 'error',
                            message: 'Edit Failed!'
                        })
                    }
                })
                .catch(function (error) { // 请求失败处理
                    alert(error);
                });
      },
      add_new_project(){
            axios
                .post('http://localhost:3000/project/api/',{
                    "name":this.add_project.name,
                    "customer_name":this.add_project.customer_name,
                    "category":this.add_project.category,
                    "country":this.add_project.country,
                    "city":this.add_project.city,
                    "description":this.add_project.description,
                    "num_room":this.add_project.num_room,
                    "hotel_brand":this.add_project.hotel_brand,
                    "order_num":this.add_project.order_num
                })
                .then(res => {
                    // window.console.log(res.data);
                    if(res.data.affectedRows == 1){
                        this.$message({
                            type: 'success',
                            message: 'Added Successful!'
                        }),
                        this.getData();
                    }else{
                        this.$message({
                            type: 'error',
                            message: 'Added Failed!'
                        })
                    }
                })
                .catch(function (error) { // 请求失败处理
                    alert(error);
                });
      },
      delete_project(ID,name) {
            const h = this.$createElement;
            this.$msgbox({
                title: 'DELETE PROJECT',
                message: h('p', null, [
                    h('span', null, 'Are you sure you want to delete '),
                    h('span', { style: 'color: red' } , name +'?')
                ]),
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true;
                        instance.confirmButtonText = 'Deleting...';
                        axios
                            .delete('http://localhost:3000/project/api/' + ID )
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

                                        this.getData();
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

      search_artwork(){
          // var i;var j;
          //
          // for(i=0;i<4;i++){
          //     for(j=0;j<this.projectList[i].length;j++) {
          //         if (!this.projectList[i][j].name.includes(this.artwork_query)) this.projectList[i].splice(j,1);
          //         // eslint-disable-next-line no-console
          //         console.log("j");
          //     }
          //     i++;
          //     // eslint-disable-next-line no-console
          //     console.log("i");
          // }

          //this.projectList[0].name.includes(this.artwork_query)


          }
    },
    mounted() {
      this.getData();
    },
    computed: {
        filtered_redidential:function() {
            return this.projectList[0].filter(project => {
                return project.name.toLowerCase().includes(this.artwork_query.toLowerCase())
            })
        },
        filtered_hopspitality:function() {
            return this.projectList[1].filter(project => {
                return project.name.toLowerCase().includes(this.artwork_query.toLowerCase())
            })
        },
        filtered_marine:function() {
            return this.projectList[2].filter(project => {
                return project.name.toLowerCase().includes(this.artwork_query.toLowerCase())
            })
        },
        filtered_commercial:function() {
            return this.projectList[3].filter(project => {
                return project.name.toLowerCase().includes(this.artwork_query.toLowerCase())
            })
        }




    }

}
</script>

<style>
</style>
