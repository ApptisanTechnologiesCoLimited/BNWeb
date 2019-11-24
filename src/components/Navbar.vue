<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
3      <transition-group>
4        <el-breadcrumb-item  v-for="(item,index) in levelList" :key="item.path">
5          <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{item.meta.title}}</span>
6          <router-link   v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
7        </el-breadcrumb-item>
8      </transition-group>
9    </el-breadcrumb>
</template>

<script>
export default {
         name: "Navbar",
       data(){
           return {
             levelList:null
           }
       },
       created() {
         this.getBreadcrumb()
       },
     watch:{
         $route(){
           this.getBreadcrumb()
         }
       },
       methods:{
         getBreadcrumb(){
             let matched=this.$route.matched.filter(item=>item.name)//$route.matched 将会是一个包含从上到下的所有对象 (副本)。
             const first=matched[0]
             if(first && first.name !=='dashboard'){//$route.name当前路由名称  ；$route.redirectedFrom重定向来源的路由的名字
               matched=[{ path: '/dashboard', meta: { title: 'dashboard' }}].concat(matched)
           }
             this.levelList=matched
           }
       }
     }

</script>

<style scoped>
</style>
