<template>
<div id="artwork">

    <div class="content login middle">
        <div class="cell">
            <div class="container">
                <div class="row">

                    <div class="col-sm-5 col-xs-12 text-center mt5p">
                        <img v-bind:src="require('../assets' + artwork.img)" alt="">
                    </div>
                    <div class="col-sm-5 col-xs-12 col-sm-offset-2 text-right">
                        <h3 class="now">{{artwork.name}}</h3>
                        <div class="mt30 lh25">
                            <p>ALBA 4, General Purpose Panel</p>
                            <p>Cresnet</p>
                            <p>UID 999999</p>
                            <div class="font11 lh15">
                                D L FE 4K X G YB <br>
                                D L FE FR 1F X M AS<br>
                                D L BE 12 K
                            </div>
                        </div>

                        <div class="mt30">
                            <a href="#">
                                <span class="font18 black">Add to a project</span>
                                <span class="button-icon ml20"></span>
                            </a>
                            <hr>
                            <div class="row font12">
                                <div class="col-sm-4 text-left">
                                    <a href="#">
                                        <span class="button-icon"></span><br>
                                        <span class="black mt10 inlineb">Generate engraving file (.DXF)</span>
                                    </a>
                                </div>
                                <div class="col-sm-4 text-center">
                                    <a href="#">
                                        <span class="button-icon"></span><br>
                                        <span class="black mt10 inlineb">Generate product labels (.XML)</span>
                                    </a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#">
                                        <span class="button-icon"></span><br>
                                        <span class="black mt10 inlineb">Print artwork reference sheet (.PDF)</span>
                                    </a>
                                </div>
                            </div>
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




</div>

</template>
<script>
    import axios from "axios";

    export default {
        name: 'artwork',
        data(){
            return {
                artwork:{}
            }
        },
        mounted() {
            axios.get("http://localhost:3000/artwork/api/"+ this.$route.params.id).then(response =>
            {
                this.artwork = response.data;

            })
        }
    }

</script>
