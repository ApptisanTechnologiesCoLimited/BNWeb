<template>
    <div id="myartworks">
		<Header/>
      
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
                                        <table class="table list-box lh25">
											
                                            <tr v-for="( i,index ) in artworkList" v-on:click="zan(index)" v-bind:key="index">
                                                <td>{{i.name}}</td>
                                                <td class="text-center w30">{{i.changedate}}</td>
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
                                <img v-bind:src="current.img" alt="">
                                <div class="mt50 font11">
                                    {{current.product}}
                                </div>
                                <div class="mt50">
                                    <a class="black mr20" href="#" >Open</a>
                                    <a class="black" data-toggle="modal" data-target="#edit"><span class="iconfont icon-edit font18"></span></a>
                                    <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                                    <a class="black" data-toggle="modal" data-target="#delete"><span class="iconfont icon-delete font18"></span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div class="sub-footer font10 mt30">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="hidden">Interior images <br>are provided by Sivak+Partners.</div>
                        </div>
                        <div class="col-sm-4 text-center">All rights reserved - Black Nova© - 2019 | Legal</div>
                        <div class="col-sm-4 text-right font13">
                            <div class="hidden">
                                <a class="black" href="#"><span class="iconfont icon-instagram"></span></a>
                                <a class="black" href="#"><span class="iconfont icon-Facebook"></span></a>
                                <a class="black" href="#"><span class="iconfont icon-twitter"></span></a>
                                <a class="black" href="#"><span class="iconfont icon-linkedin font18"></span></a>
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
                                            <td><input type="text" class="form-control" ></td>
                                        </tr>
                                        <tr>
                                            <td class="text-middle">Product</td>
                                            <td class="text-right">ALBA 4 General Purpose + Socket (Double Frame)</td>
                                        </tr>
                                        <tr>
                                            <td class="text-middle">Unique ID</td>
                                            <td class="text-right">999999</td>
                                        </tr>
                                        <tr>
                                            <td class="text-middle">Communication protocol</td>
                                            <td class="text-right text-middle">
                                                <input type="text" class="form-control" value="Cresnet" id="communication"/>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="mt50 text-center">
                                        <div class="row mlr0">
                                            <div class="col-sm-4 prl7">
                                                <button type="button" class="ebutton">OK</button>
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

            <div class="modal" id="delete" tabindex="-1" role="dialog" aria-labelledby="" data-backdrop="static">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                        <div class="modal-body">
                            <p class="font18 text-center">DELETE ARTWORK</p>
                            <div class="row">
                                <div class="col-sm-8 col-sm-offset-2">
                                    <p class="mt30 text-center font15">Are you sure you want to delete “dddddd” ?</p>
                                    <div class="mt50 text-center">
                                        <div class="row mlr0">

                                            <div class="col-sm-offset-2 col-sm-4 prl7">
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
import axios from "axios";
import Header from '../components/Header.vue';
export default {
  name: 'myartworks',
  components: {
    Header
  },
  data(){
        return {
                    artworkList:null,
					current: null
                }
      },
   mounted () {
       axios
         .get('http://localhost:3000/artwork/api')
         .then(response => (this.artworkList = response.data,this.current = this.artworkList[0]))
         .catch(function (error) { // 请求失败处理
			// console.log(error);
			alert(error);
         });
     },methods:{zan(index){this.current =  this.artworkList[index]}}
}

</script>
