<template>
  <div id="dealer">
    <div class="content project middle">
      <div class="cell">
        <div class="container">
          <p class="font30 text-center"><b>BLACK NOVA</b> PARTNER P</p>
          <div class="row mt50">
            <div class="col-xs-6">
              <div class="border bg-gray h200"></div>
              <p class="lh3 font16">Latest post preview from Public Website News Section</p>
            </div>
            <div class="col-xs-3 prl30 text-center">
              <router-link class="black" to="/">
                <div class="wh200 border click inlineb">
                  <i class="el-icon-bell font30"></i>
                </div>
                <p class="lh3">Information</p>
              </router-link>

            </div>
            <div class="col-xs-3 prl30 text-center">
              <router-link class="black" to="/">
                <div class="wh200 border click inlineb">
                  <i class="el-icon-user font30"></i>
                </div>
                <p class="lh3">Manage users</p>
              </router-link>

            </div>

          </div>
          <div class="row mt50">
            <div class="col-xs-6">
              <div class="border bg-gray h200"></div>
              <p class="lh3 font16">Latest post preview from Partner Portal News Section</p>
            </div>
            <div class="col-xs-3 prl30 text-center">
              <router-link class="black" to="/myartworks">
                <div class="wh200 border click inlineb">
                  <i class="el-icon-brush font30"></i>
                </div>
                <p class="lh3">My artworks</p>
              </router-link>
              

            </div>
            <div class="col-xs-3 prl30 text-center">
              <router-link class="black" to="/myprojects">
                <div class="wh200 border click inlineb">
                  <i class="el-icon-office-building font30"></i>
                </div>
                <p class="lh3">My projects</p>
              </router-link>

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
  name: 'dealer'
}
</script>

<style>
</style>
