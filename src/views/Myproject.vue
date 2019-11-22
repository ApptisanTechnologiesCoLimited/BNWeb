<template>
 <div id="myproject">
   <div class="bg-gray">
      <ol class="breadcrumb">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">My projects</a></li>
          <li class="active">MGM Cotai</li>

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
              <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="Place input you keyword! " @select="handleSelect" class="w40 mr20"></el-autocomplete>
              <button type="button" class="ebutton w30">Find</button>


            </div>
            <div class="col-xs-12"><hr class="gray"></div>
            <div class="col-xs-12 mb10">
              <a href="#" data-toggle="modal" data-target="#addnew">
                <span class="iconfont icon-add button-icon mr20"></span>
                <span class="font18 black text-middle">ADD A PROJECT</span>
              </a>

            </div>
            <div class="col-xs-12 mb20">
              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <span class="iconfont icon-Hotel button-icon mr20"></span> RESIDENTIAL
                      <span class="glyphicon glyphicon-menu-up pull-right" aria-hidden="true"></span>
                    </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
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
                        <tr v-for="( i,index ) in projectList[0]" :key="index">
                          <td class="">{{i.name}}</td>
                          <td class="text-center option h40">
                            <router-link :to="'/project/' + i.id" class="black mr20">Open</router-link>
                            <a class="black" data-toggle="modal" data-target="#edit" @click="sendData(index,0)"><span class="iconfont icon-edit font18"></span></a>
                            <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                            <a class="black" data-toggle="modal" data-target="#delete"><span class="iconfont icon-delete font18"></span></a>
                          </td>
                          <td class="text-center">{{i.customer_name}}</td>
                          <td class="text-center">{{i.country}}</td>
                          <td class="text-center">city</td>
                          <td class="text-center">{{new Date(i.changedate) | dateFormat('DD.MM.YYYY')}}</td>
                        </tr>
                        <!-- loop end -->
                        <tr>
                          <td colspan="4">
                           <div class="block text-center">
                              <el-pagination
                                layout="prev, pager, next"
                                :total="10">
                              </el-pagination>
                            </div>
                          </td>
                          </tr>

                      </table>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                        <span class="iconfont icon-xingzhuang button-icon mr20"></span> HOSPITALITY
                        <span class="glyphicon glyphicon-menu-up pull-right" aria-hidden="true"></span>

                    </h4>
                  </div>
                  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
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
                        <tr v-for="( i,index ) in projectList[1]" :key="index">
                          <td class="">{{i.name}}</td>
                          <td class="text-center option h40">
                            <router-link :to="'/project/' + i.id" class="black mr20">Open</router-link>
                            <a class="black" data-toggle="modal" data-target="#edit" @click="sendData(index,0)"><span class="iconfont icon-edit font18"></span></a>
                            <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                            <a class="black" data-toggle="modal" data-target="#delete"><span class="iconfont icon-delete font18"></span></a>
                          </td>
                          <td class="text-center">{{i.customer_name}}</td>
                          <td class="text-center">{{i.country}}</td>
                          <td class="text-center">city</td>
                          <td class="text-center">{{new Date(i.changedate) | dateFormat('DD.MM.YYYY')}}</td>
                        </tr>
                        <!-- loop end -->
                          <tr>
                          <td colspan="4">
                           <div class="block text-center">
                              <el-pagination
                                layout="prev, pager, next"
                                :total="10">
                              </el-pagination>
                            </div>
                          </td>
                          </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <span class="iconfont  button-icon mr20"></span> MARINE
                      <span class="glyphicon glyphicon-menu-up pull-right" aria-hidden="true"></span>
                    </h4>
                  </div>
                  <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
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
                        <tr v-for="( i,index ) in projectList[2]" :key="index">
                          <td class="">{{i.name}}</td>
                          <td class="text-center option h40">
                            <router-link :to="'/project/' + i.id" class="black mr20">Open</router-link>
                            <a class="black" data-toggle="modal" data-target="#edit" @click="sendData(index,0)"><span class="iconfont icon-edit font18"></span></a>
                            <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                            <a class="black" data-toggle="modal" data-target="#delete"><span class="iconfont icon-delete font18"></span></a>
                          </td>
                          <td class="text-center">{{i.customer_name}}</td>
                          <td class="text-center">{{i.country}}</td>
                          <td class="text-center">city</td>
                          <td class="text-center">{{new Date(i.changedate) | dateFormat('DD.MM.YYYY')}}</td>
                        </tr>
                        <!-- loop end -->
                          <tr>
                          <td colspan="4">
                           <div class="block text-center">
                              <el-pagination
                                layout="prev, pager, next"
                                :total="10">
                              </el-pagination>
                            </div>
                          </td>
                          </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingFour">
                    <h4 class="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <span class="iconfont  button-icon mr20"></span> COMMERCIAL
                      <span class="glyphicon glyphicon-menu-up pull-right" aria-hidden="true"></span>
                    </h4>
                  </div>
                  <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
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
                        <tr v-for="( i,index ) in projectList[3]" :key="index">
                          <td class="">{{i.name}}</td>
                          <td class="text-center option h40">
                            <router-link :to="'/project/' + i.id" class="black mr20">Open</router-link>
                            <a class="black" data-toggle="modal" data-target="#edit" @click="sendData(index,0)"><span class="iconfont icon-edit font18"></span></a>
                            <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                            <a class="black" data-toggle="modal" data-target="#delete"><span class="iconfont icon-delete font18"></span></a>
                          </td>
                          <td class="text-center">{{i.customer_name}}</td>
                          <td class="text-center">{{i.country}}</td>
                          <td class="text-center">city</td>
                          <td class="text-center">{{new Date(i.changedate) | dateFormat('DD.MM.YYYY')}}</td>
                        </tr>
                        <!-- loop end -->
                          <tr>
                          <td colspan="4">
                           <div class="block text-center">
                              <el-pagination
                                layout="prev, pager, next"
                                :total="10">
                              </el-pagination>
                            </div>
                          </td>
                          </tr>
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
                           <td><input type="text" class="form-control" value=""></td>
                         </tr>
                         <tr>
                          <td class="text-middle">Customer name</td>
                          <td class="text-right"><input type="text" class="form-control" value=""></td>
                        </tr>
                        <tr>
                          <td class="text-middle">Category</td>
                          <td class="text-right">
                            <select class="form-control">
                              <option value="Hospitality">Hospitality</option>
                              <option value="Residential">Residential</option>

                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Country</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" value="">
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">City</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" value="">
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Description <br><span class="font10">(max 250 symbols)</span> </td>
                          <td class="text-right text-middle">
                              <textarea class="form-control" rows="3"></textarea>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Number of rooms</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" value="">
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Hotel brand</td>
                          <td class="text-right text-middle">
                              <select class="form-control">
                                  <option value="Hospitality">Hospitality</option>
                                  <option value="Residential">Residential</option>

                                </select>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-middle">Purchase Order #</td>
                          <td class="text-right text-middle">
                            <input type="text" class="form-control" value="">
                          </td>
                        </tr>
                      </table>
                      <div class="mt50 text-center">
                        <div class="row mlr0">
                          <div class="col-sm-4 prl7 col-sm-offset-2">
                             <button type="button" class="ebutton">OK</button>
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
            projectList:{},
            current:{},
            editable_project:{},
            state: '',
            timeout:  null

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
        },
      querySearchAsync(queryString, cb) {
        var projectList = this.projectList;
        var results = queryString ? projectList.filter(this.createStateFilter(queryString)) : projectList;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        window.console.log(item);
      }
    },
    mounted() {
      this.getData();
    }
}
</script>

<style>
</style>
