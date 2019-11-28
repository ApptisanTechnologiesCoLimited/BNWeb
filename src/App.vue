<template>
<div id="app">
    <Header :class="header_show ? '':'bg-black'"/>
    <router-view></router-view>
    <Footer :class="footer_show ? '':'bg-black'"/>

  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
      Header,
      Footer
  },
  data(){
        return {
            header_show:true,
            footer_show:true
        }
      },
    methods:{ 
      headerB:function () {
        this.header_show = false;
      },
      //是否显示底部
      footerB:function () {
          this.footer_show = false;
      }
  }
  
}
</script>

<style >
@import 'assets/css/custom.css';
</style>

