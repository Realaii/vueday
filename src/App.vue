<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/menu">Menu</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import isMoble from './common/isMoble'
export default {
  name: 'App',
  components: {},
  data () {
    return {}
  },
  mounted () {
    if (isMoble()) {
      this.$router.replace('/Mobile')
    } else {
      this.$router.replace('/Pc')
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration:none;
    margin: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
