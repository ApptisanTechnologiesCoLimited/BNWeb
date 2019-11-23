<template>
<div id="artwork">
<div class="bg-gray">
      <ol class="breadcrumb">
                    <li><a href="/dash">Dashboard</a></li>

          <li><a href="/myartworks">My Artworks</a></li>
          <li class="active">{{artwork.name}}</li>
        </ol>
  </div>
    <div class="content login middle" v-loading="loading">
        <div class="cell">
            <div class="container">
                <div class="row">

                    <div class="col-xs-5 text-center mt5p" >
                        <img :src="artwork.img" alt="">
                    </div>
                    <div class="col-xs-5 col-xs-offset-2 text-right">
                        <h3 class="now">{{artwork.name}}</h3>
                        <div class="mt30 lh25">
                        
                            <p>Protocol: {{artwork.protocol}}</p>
                            <p>UID: {{artwork.id}}</p>
                            
                        </div>

                        <div class="mt30">
                            <a href="#">
                                <span class="font18 black">Add to a project</span>
                                <span class="button-icon ml20"></span>
                            </a>
                            <hr>
                            <div class="row font12">
                                <div class="col-xs-4 text-left">
                                    <a href="#">
                                        <span class="button-icon"></span><br>
                                        <span class="black mt10 inlineb">Generate engraving file (.DXF)</span>
                                    </a>
                                </div>
                                <div class="col-xs-4 text-center">
                                    <a href="#">
                                        <span class="button-icon"></span><br>
                                        <span class="black mt10 inlineb">Generate product labels (.XML)</span>
                                    </a>
                                </div>
                                <div class="col-xs-4">
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




</div>

</template>
<script>
    import axios from "axios";

    export default {
        name: 'artwork',
        data(){
            return {
                artwork:{},
                loading:true
            }
        },
        mounted() {
            axios.get("http://localhost:3000/artwork/api/"+ this.$route.params.id).then(response =>
            {
                this.artwork = response.data[0];
                this.loading=false;

            })
        }
    }

</script>
