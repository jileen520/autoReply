<template>
  <div>
    <el-button @click="test">测试npm</el-button>
    <a href="https://mms.pinduoduo.com/open.html?response_type=code&client_id=c98b9ccd842a44c8a0be00ead21d3c6d&redirect_uri=http://api.xhmdd.com/pdd/cb">测试npm2</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    test: function () {
      this.$http.jsonp('https://mms.pinduoduo.com/open.html?response_type=code&client_id=c98b9ccd842a44c8a0be00ead21d3c6d&redirect_uri=http://api.xhmdd.com/pdd/cb', {
        jsonp: 'cb'
      }).then(res => {
        debugger
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
