<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/button-sample">ButtonSample</router-link> |
      <router-link to="/text-sample">TextSample</router-link> |
      <router-link to="/if">If</router-link> |
      <router-link to="/for">For</router-link> |
      <router-link to="/computed">Computed</router-link> |
      <router-link to="/markdown">Markdown</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
