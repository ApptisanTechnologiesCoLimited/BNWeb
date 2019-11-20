<template>
    <div id="myartworks">


            <div class="content login middle">
                <div class="cell">
                    <div class="container">
                        <div class="row">
                            <p class="font30 text-center">MY ARTWORKS</p>


                            <div class="col-xs-12 mb20">
                                <a href="">
                                    <span class="iconfont icon-add button-icon mr20"></span>
                                    <span class="font18 black">Add a new artwork</span>
                                </a>

                            </div>

                            <div class="col-sm-7 col-xs-12">

                                <table class="table mb0" >
                                    <tr >
                                        <th>Name</th>
                                        <th class="text-center w30">Change Date</th>
                                    </tr>
                                </table>
                                <div class="scroll-wrapper">
                                    <div class="scrollbar-dynamic">
                                        <table class="table list-box">

                                            <tr :class="activeClass == index ? 'active':''" v-for="( i,index ) in artworkList" @click="zan(index)" :key="index">
                                                <td>{{i.name}}</td>
                                                <td class="text-center w30">{{new Date(i.changedate) | dateFormat('DD.MM.YYYY')}}</td>
                                            </tr>


                                        </table>
                                    </div>
                                </div>

                                <p class="text-center mt30">
                                    <span class="text-super">Scroll down to see more</span> <br>
                                    <span class="iconfont icon-jiantou_down font30 animate-bounce-down"></span>
                                </p>

                            </div>

                            <div class="col-sm-5 col-xs-12 text-center" >
                                <img :src="current.img" alt="">
                                <div class="mt20 font11">
                                    {{current.name}}<br>
                                    {{current.product}}
                                </div>
                                <div class="mt20">
                                    <router-link :to="'/artwork/' + current.id" class="black mr20">Open</router-link>
                                    <a class="black" data-toggle="modal" data-target="#edit"  ><span class="iconfont icon-edit font18"></span></a>
                                    <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                                    <a class="black" @click="delete_artwork()"><span class="iconfont icon-delete font18"></span></a>

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
                            <p class="font18 text-center">EDIT ARTWORK</p>
                            <div class="row">
                                <div class="col-sm-8 col-sm-offset-2">
                                    <table class="table mt30 font12">
                                        <tr>
                                            <td>Name</td>
                                            <td><input type="text" class="form-control" v-model="editable_artwork.name"></td>
                                        </tr>
                                        <tr>
                                            <td class="text-middle">Product</td>
                                            <td class="text-right">{{editable_artwork.product}}</td>
                                        </tr>
                                        <tr>
                                            <td class="text-middle">Unique ID</td>
                                            <td class="text-right">{{editable_artwork.id}}</td>
                                        </tr>
                                        <tr>
                                            <td class="text-middle">Communication protocol</td>
                                            <td class="text-right text-middle">
                                                <input type="text" class="form-control"  v-model="editable_artwork.protocol" />
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="mt50 text-center">
                                        <div class="row mlr0">
                                            <div class="col-sm-4 prl7">
                                                <button type="button" class="ebutton" @click="edit_artwork()" data-dismiss="modal" aria-label="Close">OK</button>
                                            </div>
                                            <div class="col-sm-4 prl7">
                                                <button type="button" class="ebutton">Change design</button>
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
import axios from "axios";

export default {
  name: 'myartworks',
  data(){
        return {
            artworkList:{},
            current:{},
            editable_artwork:{},
            activeClass:0

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
             this.editable_artwork = Object.assign({},this.current);

         })
          .catch(function (error) { // 请求失败处理
            alert(error);
          });
      },
      zan(index){
          this.current =  this.artworkList[index]
          this.editable_artwork = Object.assign({},this.current);
          this.activeClass = index;


      },
        delete_artwork() {
            const h = this.$createElement;
            this.$msgbox({
                title: 'DELETE ARTWORK',
                message: h('p', null, [
                    h('span', null, 'Are you sure you want to delete '),
                    h('br',null,' '),
                    h('span', null , this.current.name +'?')
                ]),
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true;
                        instance.confirmButtonText = 'Deleting...';
                        axios
                            .delete('http://localhost:3000/artwork/api/' + this.current.id)
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
        edit_artwork(){
            axios
                .put('http://localhost:3000/artwork/api/'+ this.editable_artwork.id,{
                    "name":this.editable_artwork.name,
                    "protocol":this.editable_artwork.protocol
                })
                .then(res => {
                    // window.console.log(res.data);
                    if(res.data.affectedRows == 1){
                        this.$message({
                            type: 'success',
                            message: 'Delete Successful!'
                        }),
                        this.getData();
                    }else{
                        this.$message({
                            type: 'error',
                            message: 'Delete Failed!'
                        })
                    }
                })
                .catch(function (error) { // 请求失败处理
                    alert(error);
                });
      }


  }
}

</script>
