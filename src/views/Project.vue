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
                            <div class="col-sm-6"><input type="text" class="form-control" placeholder="Villa 1"></div>
                            <div class="col-sm-3 text-center">
                                <button type="button" class="ebutton">CREATE</button>
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
                                    <tr>
                                        <td class="">Suite 1</td>
                                        <td class="text-center option h40">
                                            <a class="black mr20" href="#" >Open</a>
                                            <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                                            <a class="black" data-toggle="modal" data-target="#delete"><span class="iconfont icon-delete font18"></span></a>
                                        </td>
                                        <td class="text-center">14.04.2019</td>
                                    </tr>
                                    <!-- loop end -->
                                    <!-- loop start -->
                                    <tr>
                                        <td class="">Suite 2</td>
                                        <td class="text-center option h40">
                                            <a class="black mr20" href="#" >Open</a>
                                            <a class="black" href="#"><span class="iconfont icon-copy font18"></span></a>
                                            <a class="black" data-toggle="modal" data-target="#delete"><span class="iconfont icon-delete font18"></span></a>
                                        </td>
                                        <td class="text-center">14.04.2019</td>
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
                project:{}
            }
        },
        mounted() {
            axios.get("http://localhost:3000/project/api/"+ this.$route.params.id).then(response =>
            {
                this.project = response.data[0];

            })
        }
    }
</script>