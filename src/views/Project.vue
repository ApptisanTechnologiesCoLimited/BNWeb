<template>
<div id="project">
    <div class="bg-gray">
        <ol class="breadcrumb">
            <li><a href="#">My projects</a></li>
            <li class="active">MGM Cotai</li>
            <a class="pull-right" href="#">All projects</a>
        </ol>
    </div>
    <div class="content project middle" >
        <div class="cell">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 mb20">
                        <p class="font30 text-center">{{project.name}}</p>
                        <p class="text-center font18 mt30">
                            <span>{{project.city}}, {{project.country}}</span>
                            <span v-if="project.category==1" class="ml40">Residential</span>
                            <span v-if="project.category==2" class="ml40">Hospotality</span>
                            <span v-if="project.category==3" class="ml40">Marine</span>
                            <span v-if="project.category==4" class="ml40">Commercial</span>

                        </p>
                        <div class="mt30 text-justify">
                            {{project.description}}

                        </div>
                        <div class="mt30">
                            <a class="black" data-toggle="modal" data-target="#edit"><span class="iconfont icon-edit font18"></span> Edit project details</a>
                            <a class="pull-right black" href=""> Print project artwork</a>
                        </div>

                    </div>
                    <div class="col-xs-12 col-sm-6 col-sm-offset-3 mb20 mt50">
                        <div class="row">
                            <div class="col-sm-6"><input type="text" v-model="rname" class="form-control" placeholder="Villa 1"></div>
                            <div class="col-sm-3 text-center">
                                <button type="button" class="ebutton" @click="create_roomtype()">CREATE</button>
                            </div>
                            <div class="col-sm-3 text-center">
                                <button type="button" class="ebutton">CANCEL</button>
                            </div>
                            <div class="col-sm-12 font12 mt10">Possible names: Suite, Standard Room, Deluxe Room</div>
                            <div class="col-sm-12 mt50">
                                <table class="table mb0">
                                    <tr>
                                        <th class="w30">Name</th>
                                        <th class="text-center w40"></th>
                                        <th class="text-center">Latest change</th>
                                    </tr>
                                    <!-- loop start -->
                                    <tr v-for="(i,index) in roomtypeList" :key="index">
                                        <td class="">{{i.name}}</td>
                                        <td class="text-center option h40">
                                            <a class="black mr20" href="#" >Open</a>
                                            <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                                            <a class="black" @click="delete_roomtype(i)"  ><span class="iconfont icon-delete font18"></span></a>
                                        </td>
                                        <td class="text-center">{{i.change_date}}</td>
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
</template>

<script>

    import axios from "axios";

    export default {
        name: 'project',
        data(){
            return {
                project:{},
                roomtypeList:[],
                rname:""
            }
        },
        mounted() {
            axios.get("http://localhost:3000/project/api/"+ this.$route.params.id).then(response =>
            {
                this.project = response.data[0];

            })
            this.getRoomtypes();
            window.console.log(Date.now());


        },
        methods:{
            getRoomtypes(){
                axios.get("http://localhost:3000/roomtype/api/byproject/"+this.$route.params.id).then(response =>
                {
                    this.roomtypeList = response.data;

                })

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