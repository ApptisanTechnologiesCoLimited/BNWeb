<template>
  <div id="list">
    <table border="1">
      <tr>
        <th>name</th>
        <th>email</th>
        <th>gender</th>
      </tr>
      <tr v-for="item in list" :key='item'>
        <td>{{item.name.first}}</td>
        <td>{{item.email}}</td>
        <td>{{item.gender}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { fetchList } from '@/services/people'
export default {
  name: 'PeopleList',
  data() {
    return {
      list: [],
    }
  },
  components: {},
  created() {
    this.getData()
  },
  methods: {
    getData() {
      fetchList().then(data => {
        this.list = data.results
      })
    }
  }
}
</script>

<style>
</style>
